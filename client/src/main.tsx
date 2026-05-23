import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import './styles/index.css'

export const API_URL = 'https://cozy-house.onrender.com/api'
// export const API_URL = 'http://localhost:3001/api'

createRoot(document.getElementById('root')!).render(<App />)
