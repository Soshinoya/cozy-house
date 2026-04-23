import React, { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X } from 'lucide-react'
import { NavLink } from '../../../types'

const navLinks: NavLink[] = [
	{ label: 'About the shelter', path: '/' },
	{ label: 'Our pets', path: '/pets' },
	{ label: 'Help the shelter', path: '/help' },
	{ label: 'Contacts', path: '/contacts' },
]

export const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const location = useLocation()
	const isHomePage = location.pathname === '/'

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

	return (
		<header className='relative z-50'>
			<div className='max-w-[90rem] mx-auto px-5 md:px-8 lg:px-16'>
				<nav className='flex items-center justify-between py-8'>
					<Link to='/' className='flex flex-col'>
						<h1
							className={`font-[Georgia,serif] text-[2rem] leading-[1.1] tracking-[0.06em] m-0 ${isHomePage ? 'text-[#f1cdb3]' : 'text-[#545454]'}`}
						>
							Cozy House
						</h1>
						<p
							className={`font-[Arial,sans-serif] text-[0.8125rem] leading-normal tracking-[0.1em] mt-1 ${isHomePage ? 'text-white' : 'text-[#4c4c4c]'}`}
						>
							Shelter for pets in Boston
						</p>
					</Link>
					<ul className='hidden md:flex items-center gap-8 list-none m-0 p-0'>
						{navLinks.map(link => {
							const isActive = location.pathname === link.path
							return (
								<li key={link.path}>
									<Link
										to={link.path}
										className={`font-[Arial,sans-serif] text-[0.9375rem] leading-[1.6] no-underline transition-colors duration-300 ${
											isActive
												? `${isHomePage ? 'text-[#fafafa]' : 'text-[#545454]'} border-b-[3px] border-[#f1cdb3] pb-1`
												: `${isHomePage ? 'text-[#cdcdcd] hover:text-[#fafafa]' : 'text-[#545454] hover:text-[#292929]'}`
										}`}
									>
										{link.label}
									</Link>
								</li>
							)
						})}
					</ul>
					<button
						onClick={toggleMenu}
						className={`md:hidden p-2 transition-colors ${isHomePage ? 'text-[#f1cdb3] hover:text-[#fddcc4]' : 'text-[#f1cdb3] hover:text-[#fddcc4]'}`}
						aria-label='Toggle menu'
					>
						{isMenuOpen ? <X size={30} /> : <Menu size={30} />}
					</button>
				</nav>
			</div>
			{isMenuOpen && (
				<div className='fixed inset-0 bg-[#292929] md:hidden z-40 pt-24'>
					<ul className='flex flex-col items-center gap-10 list-none m-0 p-8'>
						{navLinks.map(link => {
							const isActive = location.pathname === link.path
							return (
								<li key={link.path}>
									<Link
										to={link.path}
										onClick={toggleMenu}
										className={`font-[Arial,sans-serif] text-[2rem] leading-[1.6] no-underline transition-colors duration-300 ${
											isActive
												? 'text-[#fafafa] border-b-[3px] border-[#f1cdb3] pb-1'
												: 'text-[#cdcdcd] hover:text-[#fafafa]'
										}`}
									>
										{link.label}
									</Link>
								</li>
							)
						})}
					</ul>
				</div>
			)}
		</header>
	)
}
