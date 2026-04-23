import React from 'react'
import { Link } from 'react-router'
import { Mail, Phone, MapPin } from 'lucide-react'

export const Footer: React.FC = () => {
	return (
		<footer className='relative bg-cover bg-center bg-no-repeat'>
			<div
				className='absolute inset-0 z-0'
				style={{
					background: 'radial-gradient(110.67% 538.64% at 5.73% 50%, #513D2F 0%, #1A1A1C 100%)',
				}}
			/>

			<div className='relative z-10 max-w-[90rem] mx-auto px-5 md:px-8 lg:px-16 py-10 md:py-16'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start'>
					<div>
						<h3 className='font-[Georgia,serif] text-white text-[2.1875rem] leading-[1.3] tracking-[0.06em] mb-10'>
							For questions
							<br />
							and suggestions
						</h3>
						<div className='flex flex-col gap-5'>
							<a
								href='mailto:email@shelter.com'
								className='flex items-center gap-5 text-[#f1cdb3] text-[1.25rem] font-[Georgia,serif] leading-[1.3] tracking-[0.06em] no-underline hover:text-[#fddcc4] transition-colors'
							>
								<Mail size={40} />
								<span>email@shelter.com</span>
							</a>
							<a
								href='tel:+136745677554'
								className='flex items-center gap-5 text-[#f1cdb3] text-[1.25rem] font-[Georgia,serif] leading-[1.3] tracking-[0.06em] no-underline hover:text-[#fddcc4] transition-colors'
							>
								<Phone size={40} />
								<span>+13 674 567 75 54</span>
							</a>
						</div>
					</div>

					{/* Visit Us */}
					<div>
						<h3 className='font-[Georgia,serif] text-white text-[2.1875rem] leading-[1.3] tracking-[0.06em] mb-10'>
							We are waiting
							<br />
							for your visit
						</h3>
						<div className='flex flex-col gap-5'>
							<a
								href='https://maps.google.com'
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center gap-5 text-[#f1cdb3] text-[1.25rem] font-[Georgia,serif] leading-[1.3] tracking-[0.06em] no-underline hover:text-[#fddcc4] transition-colors'
							>
								<MapPin size={40} />
								<span>
									1 Central Street, Boston
									<br />
									(entrance from the store)
								</span>
							</a>
							<a
								href='https://maps.google.com'
								target='_blank'
								rel='noopener noreferrer'
								className='flex items-center gap-5 text-[#f1cdb3] text-[1.25rem] font-[Georgia,serif] leading-[1.3] tracking-[0.06em] no-underline hover:text-[#fddcc4] transition-colors'
							>
								<MapPin size={40} />
								<span>18 South Park, London</span>
							</a>
						</div>
					</div>
					<div className='hidden lg:flex justify-center items-end'>
						<div className='w-[300px] h-[310px]'></div>
					</div>
				</div>
			</div>
		</footer>
	)
}
