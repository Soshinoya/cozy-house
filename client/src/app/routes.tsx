import { createBrowserRouter } from 'react-router'
import { Layout } from './components/Layout/Layout'
import { Home } from './pages/Home'
import { Pets } from './pages/Pets'
import { Help } from './pages/Help'
import { Contacts } from './pages/Contacts'
import { Admin } from './pages/Admin'
import { NotFound } from './pages/NotFound'

export const router = createBrowserRouter([
	{
		path: '/',
		Component: Layout,
		children: [
			{ index: true, Component: Home },
			{ path: 'pets', Component: Pets },
			{ path: 'help', Component: Help },
			{ path: 'contacts', Component: Contacts },
			{ path: 'admin', Component: Admin },
			{ path: '*', Component: NotFound },
		],
	},
])
