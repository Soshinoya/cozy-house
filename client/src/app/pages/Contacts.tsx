import React from 'react'
import { Container } from '../components/Layout/Container'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const Contacts: React.FC = () => {
	return (
		<main className='bg-white'>
			{/* Hero Section */}
			<section
				className='relative py-20 md:py-24'
				style={{
					background: 'radial-gradient(100% 215.42% at 0% 0%, #5B483A 0%, #262425 100%)',
				}}
			>
				<Container>
					<h1 className='font-[Georgia,serif] text-white text-[2.5rem] md:text-[3.75rem] leading-[1.3] tracking-[0.06em] text-center m-0'>
						Contacts
					</h1>
				</Container>
			</section>

			{/* Contact Information */}
			<section className='py-16 md:py-20 lg:py-24'>
				<Container>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16'>
						{/* Questions and Suggestions */}
						<div className='flex flex-col gap-10'>
							<h2 className='font-[Georgia,serif] text-[#545454] text-[2.1875rem] leading-[1.3] tracking-[0.06em] m-0'>
								For questions
								<br />
								and suggestions
							</h2>
							<div className='flex flex-col gap-6'>
								<a
									href='mailto:email@shelter.com'
									className='flex items-center gap-5 text-[#f1cdb3] text-[1.25rem] font-[Georgia,serif] leading-[1.3] tracking-[0.06em] no-underline hover:text-[#fddcc4] transition-colors group'
								>
									<div className='w-[40px] h-[40px] flex items-center justify-center'>
										<Mail size={40} className='text-[#f1cdb3] group-hover:text-[#fddcc4]' />
									</div>
									<span className='text-[#545454]'>email@shelter.com</span>
								</a>
								<a
									href='tel:+136745677554'
									className='flex items-center gap-5 text-[#f1cdb3] text-[1.25rem] font-[Georgia,serif] leading-[1.3] tracking-[0.06em] no-underline hover:text-[#fddcc4] transition-colors group'
								>
									<div className='w-[40px] h-[40px] flex items-center justify-center'>
										<Phone size={40} className='text-[#f1cdb3] group-hover:text-[#fddcc4]' />
									</div>
									<span className='text-[#545454]'>+13 674 567 75 54</span>
								</a>
							</div>
						</div>

						{/* Visit Us */}
						<div className='flex flex-col gap-10'>
							<h2 className='font-[Georgia,serif] text-[#545454] text-[2.1875rem] leading-[1.3] tracking-[0.06em] m-0'>
								We are waiting
								<br />
								for your visit
							</h2>
							<div className='flex flex-col gap-6'>
								<a
									href='https://maps.google.com'
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-start gap-5 text-[#f1cdb3] text-[1.25rem] font-[Georgia,serif] leading-[1.3] tracking-[0.06em] no-underline hover:text-[#fddcc4] transition-colors group'
								>
									<div className='w-[40px] h-[40px] flex items-center justify-center flex-shrink-0'>
										<MapPin size={40} className='text-[#f1cdb3] group-hover:text-[#fddcc4]' />
									</div>
									<span className='text-[#545454]'>
										1 Central Street, Boston
										<br />
										(entrance from the store)
									</span>
								</a>
								<a
									href='https://maps.google.com'
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-start gap-5 text-[#f1cdb3] text-[1.25rem] font-[Georgia,serif] leading-[1.3] tracking-[0.06em] no-underline hover:text-[#fddcc4] transition-colors group'
								>
									<div className='w-[40px] h-[40px] flex items-center justify-center flex-shrink-0'>
										<MapPin size={40} className='text-[#f1cdb3] group-hover:text-[#fddcc4]' />
									</div>
									<span className='text-[#545454]'>18 South Park, London</span>
								</a>
							</div>
						</div>
					</div>

					{/* Opening Hours */}
					<div className='mt-16 p-10 bg-[#f6f6f6] rounded-lg'>
						<div className='flex items-start gap-5'>
							<Clock size={40} className='text-[#f1cdb3] flex-shrink-0' />
							<div>
								<h3 className='font-[Georgia,serif] text-[#545454] text-[1.5625rem] leading-[1.3] tracking-[0.06em] mb-4'>
									Opening Hours
								</h3>
								<div className='font-[Arial,sans-serif] text-[#4c4c4c] text-[0.9375rem] leading-[1.6] flex flex-col gap-2'>
									<p>Monday - Friday: 9:00 AM - 6:00 PM</p>
									<p>Saturday: 10:00 AM - 5:00 PM</p>
									<p>Sunday: Closed</p>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</section>
		</main>
	)
}
