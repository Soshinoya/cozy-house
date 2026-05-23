require('dotenv').config()
const express = require('express')
const { Pool } = require('pg')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3001

// Middleware
// app.use(cors({ origin: 'http://localhost:5173', methods: ['GET', 'POST', 'PUT', 'DELETE'] }))
app.use(express.json())
app.use(cors({ origin: 'https://cozy-house-mgok.vercel.app', methods: ['GET', 'POST', 'PUT', 'DELETE'] }))

const pool = new Pool({
	connectionString: process.env.DB_URL,
	ssl: false,
})

// PostgreSQL connection pool
// const pool = new Pool({
// 	user: process.env.DB_USER,
// 	host: process.env.DB_HOST,
// 	database: process.env.DB_NAME,
// 	password: process.env.DB_PASSWORD,
// 	port: process.env.DB_PORT,
// })

// Admin auth middleware
const adminAuth = (req, res, next) => {
	const password = req.headers['x-admin-password']
	if (password === process.env.ADMIN_PASSWORD) {
		next()
	} else {
		res.status(401).json({ error: 'Unauthorized: Invalid admin password' })
	}
}

// Verify admin password
app.post('/api/auth/verify', (req, res) => {
	const { password } = req.body
	if (password === process.env.ADMIN_PASSWORD) {
		res.json({ authenticated: true })
	} else {
		res.status(401).json({ authenticated: false, error: 'Неверный пароль' })
	}
})

// Test database connection
pool.query('SELECT NOW()', (err, res) => {
	if (err) {
		console.error('Database connection error:', err.stack)
	} else {
		console.log('Connected to PostgreSQL database')
	}
})

// GET all pets with pagination
app.get('/api/pets', async (req, res) => {
	try {
		const page = parseInt(req.query.page) || 1
		const limit = parseInt(req.query.limit) || 8
		const offset = (page - 1) * limit

		// Get total count
		const countResult = await pool.query('SELECT COUNT(*) FROM pets')
		const totalCount = parseInt(countResult.rows[0].count)

		// Get paginated results
		const result = await pool.query('SELECT * FROM pets ORDER BY name LIMIT $1 OFFSET $2', [limit, offset])

		res.json({
			pets: result.rows,
			pagination: {
				currentPage: page,
				totalPages: Math.ceil(totalCount / limit),
				totalPets: totalCount,
				hasNext: page < Math.ceil(totalCount / limit),
				hasPrev: page > 1,
			},
		})
	} catch (err) {
		console.error(err)
		res.status(500).json({ error: 'Internal server error' })
	}
})

// GET all pets without pagination (for backwards compatibility)
app.get('/api/pets/all', async (req, res) => {
	try {
		const result = await pool.query('SELECT * FROM pets ORDER BY name')
		res.json(result.rows)
	} catch (err) {
		console.error(err)
		res.status(500).json({ error: 'Internal server error' })
	}
})

// GET pet by ID
app.get('/api/pets/:id', async (req, res) => {
	try {
		const { id } = req.params
		const result = await pool.query('SELECT * FROM pets WHERE id = $1', [id])

		if (result.rows.length === 0) {
			return res.status(404).json({ error: 'Pet not found' })
		}

		res.json(result.rows[0])
	} catch (err) {
		console.error(err)
		res.status(500).json({ error: 'Internal server error' })
	}
})

// POST new pet
app.post('/api/pets', adminAuth, async (req, res) => {
	try {
		const { id, name, image, breed, age, description, inoculations, diseases, parasites } = req.body

		// Validate required fields
		if (!id || !name) {
			return res.status(400).json({ error: 'ID and name are required' })
		}

		const result = await pool.query(
			'INSERT INTO pets (id, name, image, breed, age, description, inoculations, diseases, parasites) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
			[id, name, image, breed, age, description, inoculations, diseases, parasites],
		)

		res.status(201).json(result.rows[0])
	} catch (err) {
		console.error(err)
		res.status(500).json({ error: 'Internal server error' })
	}
})

// PUT update pet
app.put('/api/pets/:id', adminAuth, async (req, res) => {
	try {
		const { id } = req.params
		const { name, image, breed, age, description, inoculations, diseases, parasites } = req.body

		const result = await pool.query(
			'UPDATE pets SET name = $1, image = $2, breed = $3, age = $4, description = $5, inoculations = $6, diseases = $7, parasites = $8 WHERE id = $9 RETURNING *',
			[name, image, breed, age, description, inoculations, diseases, parasites, id],
		)

		if (result.rows.length === 0) {
			return res.status(404).json({ error: 'Pet not found' })
		}

		res.json(result.rows[0])
	} catch (err) {
		console.error(err)
		res.status(500).json({ error: 'Internal server error' })
	}
})

// DELETE pet
app.delete('/api/pets/:id', adminAuth, async (req, res) => {
	try {
		const { id } = req.params
		const result = await pool.query('DELETE FROM pets WHERE id = $1 RETURNING *', [id])

		if (result.rows.length === 0) {
			return res.status(404).json({ error: 'Pet not found' })
		}

		res.json({ message: 'Pet deleted successfully' })
	} catch (err) {
		console.error(err)
		res.status(500).json({ error: 'Internal server error' })
	}
})

// Root route
app.get('/', (req, res) => {
	res.json({ message: 'Cozy House API Server is running!' })
})

// Start server
app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})
