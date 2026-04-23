import React from 'react'
import { Outlet, useLocation } from 'react-router'
import { Header } from './Header'
import { Footer } from './Footer'
import { useScrollToTop } from '../../../hooks/useScrollToTop'

export const Layout: React.FC = () => {
	const location = useLocation()
	const isHomePage = location.pathname === '/'

	useScrollToTop()

	return (
		<div className='flex flex-col min-h-screen'>
			<div className={isHomePage ? 'absolute w-[100%]' : 'bg-white'}>
				<Header />
			</div>

			<Outlet />

			<Footer />
		</div>
	)
}
