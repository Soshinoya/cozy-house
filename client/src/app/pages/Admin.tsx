import React, { useState, useEffect } from 'react'
import { Container } from '../components/Layout/Container'
import { Pet } from '../../types'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog'
import { Trash2, Edit, Plus, Lock } from 'lucide-react'

import { API_URL } from '../../main'

export const Admin: React.FC = () => {
	const [password, setPassword] = useState('')
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [pets, setPets] = useState<Pet[]>([])
	const [loading, setLoading] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [editingPet, setEditingPet] = useState<Pet | null>(null)
	const [formData, setFormData] = useState<Partial<Pet>>({})

	useEffect(() => {
		if (isAuthenticated) {
			fetchPets()
		}
	}, [isAuthenticated])

	const fetchPets = async () => {
		setLoading(true)
		try {
			const response = await fetch(`${API_URL}/pets/all`)
			if (!response.ok) throw new Error('Failed to fetch pets')
			const data = await response.json()
			setPets(data)
		} catch (err) {
			console.error('Error fetching pets:', err)
			alert('Ошибка при загрузке данных')
		} finally {
			setLoading(false)
		}
	}

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault()
		if (!password.trim()) return

		setLoading(true)
		try {
			const response = await fetch(`${API_URL}/auth/verify`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ password }),
			})

			if (!response.ok) {
				throw new Error('Неверный пароль администратора')
			}

			setIsAuthenticated(true)
		} catch (err: any) {
			alert(err.message)
		} finally {
			setLoading(false)
		}
	}

	const handleOpenModal = (pet?: Pet) => {
		if (pet) {
			setEditingPet(pet)
			setFormData(pet)
		} else {
			setEditingPet(null)
			setFormData({
				id: '',
				name: '',
				image: '',
				breed: '',
				age: '',
				description: '',
				inoculations: [],
				diseases: [],
				parasites: [],
			})
		}
		setIsModalOpen(true)
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleArrayInputChange = (field: string, value: string) => {
		setFormData(prev => ({
			...prev,
			[field]: value
				.split(',')
				.map(item => item.trim())
				.filter(item => item !== ''),
		}))
	}

	const handleSavePet = async (e: React.FormEvent) => {
		e.preventDefault()
		setLoading(true)
		try {
			const method = editingPet ? 'PUT' : 'POST'
			const url = editingPet ? `${API_URL}/pets/${editingPet.id}` : `${API_URL}/pets`

			const response = await fetch(url, {
				method,
				headers: {
					'Content-Type': 'application/json',
					'x-admin-password': password,
				},
				body: JSON.stringify(formData),
			})

			if (!response.ok) {
				const errorData = await response.json()
				throw new Error(errorData.error || 'Failed to save pet')
			}

			await fetchPets()
			setIsModalOpen(false)
		} catch (err: any) {
			alert(err.message)
		} finally {
			setLoading(false)
		}
	}

	const handleDeletePet = async (id: string) => {
		if (!window.confirm('Вы уверены, что хотите удалить этого питомца?')) return

		setLoading(true)
		try {
			const response = await fetch(`${API_URL}/pets/${id}`, {
				method: 'DELETE',
				headers: {
					'x-admin-password': password,
				},
			})

			if (!response.ok) {
				const errorData = await response.json()
				throw new Error(errorData.error || 'Failed to delete pet')
			}

			await fetchPets()
		} catch (err: any) {
			alert(err.message)
		} finally {
			setLoading(false)
		}
	}

	if (!isAuthenticated) {
		return (
			<main className='bg-white min-h-screen flex items-center justify-center p-4'>
				<div className='max-w-md w-full space-y-8 p-8 rounded-2xl border border-gray-200 shadow-sm bg-white'>
					<div className='text-center space-y-2'>
						<div className='mx-auto w-12 h-12 bg-[#f1cdb3] rounded-full flex items-center justify-center'>
							<Lock className='text-white' size={24} />
						</div>
						<h1 className='text-2xl font-serif font-bold text-gray-900'>Вход в админку</h1>
						<p className='text-gray-500'>Введите пароль администратора</p>
					</div>
					<form onSubmit={handleLogin} className='space-y-4'>
						<div className='space-y-2'>
							<Label htmlFor='password'>Пароль</Label>
							<Input
								id='password'
								type='password'
								value={password}
								onChange={e => setPassword(e.target.value)}
								placeholder='••••••••'
								required
							/>
						</div>
						<Button type='submit' className='w-full bg-[#5B483A] text-white hover:bg-[#4a3a2e]'>
							Войти
						</Button>
					</form>
				</div>
			</main>
		)
	}

	return (
		<main className='bg-gray-50 min-h-screen py-12'>
			<Container>
				<div className='flex justify-between items-center mb-8'>
					<div>
						<h1 className='text-3xl font-serif font-bold text-gray-900'>Управление питомцами</h1>
						<p className='text-gray-500'>Редактируйте информацию о животных в базе данных</p>
					</div>
					<Button
						onClick={() => handleOpenModal()}
						className='bg-[#5B483A] text-white hover:bg-[#4a3a2e] flex gap-2'
					>
						<Plus size={18} /> Добавить питомца
					</Button>
				</div>

				<div className='bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden'>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Имя</TableHead>
								<TableHead>Порода</TableHead>
								<TableHead>Возраст</TableHead>
								<TableHead className='text-right'>Действия</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{loading && pets.length === 0 ? (
								<TableRow>
									<TableCell colSpan={4} className='text-center py-8'>
										Загрузка данных...
									</TableCell>
								</TableRow>
							) : pets.length === 0 ? (
								<TableRow>
									<TableCell colSpan={4} className='text-center py-8'>
										Питомцы не найдены
									</TableCell>
								</TableRow>
							) : (
								pets.map(pet => (
									<TableRow key={pet.id}>
										<TableCell className='font-medium'>{pet.name}</TableCell>
										<TableCell>{pet.breed}</TableCell>
										<TableCell>{pet.age}</TableCell>
										<TableCell className='text-right space-x-2'>
											<Button
												style={{ padding: '0' }}
												variant='outline'
												size='sm'
												onClick={() => handleOpenModal(pet)}
												className='p-2 h-8 w-8'
											>
												<Edit size={14} />
											</Button>
											<Button
												style={{ padding: '0' }}
												variant='outline'
												size='sm'
												onClick={() => handleDeletePet(pet.id)}
												className='p-2 h-8 w-8 text-red-500 hover:bg-red-50'
											>
												<Trash2 size={14} />
											</Button>
										</TableCell>
									</TableRow>
								))
							)}
						</TableBody>
					</Table>
				</div>

				<Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
					<DialogContent className='max-w-2xl max-h-[90vh] overflow-y-auto'>
						<DialogHeader>
							<DialogTitle className='font-serif text-2xl'>
								{editingPet ? 'Редактировать питомца' : 'Добавить нового питомца'}
							</DialogTitle>
						</DialogHeader>
						<form onSubmit={handleSavePet} className='space-y-4 mt-4'>
							<div className='grid grid-cols-2 gap-4'>
								<div className='space-y-2'>
									<Label>ID</Label>
									<Input
										name='id'
										value={formData.id || ''}
										onChange={handleInputChange}
										placeholder='Напр: 17'
										required
									/>
								</div>
								<div className='space-y-2'>
									<Label>Имя</Label>
									<Input
										name='name'
										value={formData.name || ''}
										onChange={handleInputChange}
										placeholder='Напр: Бобик'
										required
									/>
								</div>
							</div>

							<div className='grid grid-cols-2 gap-4'>
								<div className='space-y-2'>
									<Label>Порода</Label>
									<Input
										name='breed'
										value={formData.breed || ''}
										onChange={handleInputChange}
										placeholder='Напр: Лабрадор'
									/>
								</div>
								<div className='space-y-2'>
									<Label>Возраст</Label>
									<Input
										name='age'
										value={formData.age || ''}
										onChange={handleInputChange}
										placeholder='Напр: 2 года'
									/>
								</div>
							</div>

							<div className='space-y-2'>
								<Label>Изображение</Label>
								<Input
									name='image'
									value={formData.image || ''}
									onChange={handleInputChange}
									placeholder='pet-image.png'
								/>
							</div>

							<div className='space-y-2'>
								<Label>Описание</Label>
								<textarea
									name='description'
									value={formData.description || ''}
									onChange={handleInputChange}
									className='flex h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
									placeholder='Расскажите о питомце...'
								/>
							</div>

							<div className='grid grid-cols-1 gap-4'>
								<div className='space-y-2'>
									<Label>Прививки (через запятую)</Label>
									<Input
										value={(formData.inoculations || []).join(', ')}
										onChange={e => handleArrayInputChange('inoculations', e.target.value)}
										placeholder='бешенство, чумка'
									/>
								</div>
								<div className='space-y-2'>
									<Label>Болезни (через запятую)</Label>
									<Input
										value={(formData.diseases || []).join(', ')}
										onChange={e => handleArrayInputChange('diseases', e.target.value)}
										placeholder='нет'
									/>
								</div>
								<div className='space-y-2'>
									<Label>Паразиты (через запятую)</Label>
									<Input
										value={(formData.parasites || []).join(', ')}
										onChange={e => handleArrayInputChange('parasites', e.target.value)}
										placeholder='нет'
									/>
								</div>
							</div>

							<div className='flex justify-end gap-3 mt-6'>
								<Button type='button' variant='outline' onClick={() => setIsModalOpen(false)}>
									Отмена
								</Button>
								<Button
									type='submit'
									className='bg-[#5B483A] text-white hover:bg-[#4a3a2e]'
									disabled={loading}
								>
									{loading ? 'Сохранение...' : 'Сохранить'}
								</Button>
							</div>
						</form>
					</DialogContent>
				</Dialog>
			</Container>
		</main>
	)
}
