import React from 'react'
import { Container } from '../Layout/Container'
import imgAboutPets from '../../../assets/about-pets.png'

export const About: React.FC = () => {
	return (
		<section className='py-16 md:py-20 lg:py-24 bg-white'>
			<Container>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
					{/* Image */}
					<div className='flex justify-center order-2 lg:order-1'>
						<img
							src={imgAboutPets}
							alt='Pets at our shelter'
							className='w-full max-w-[300px] md:max-w-[400px] lg:max-w-[300px] h-auto object-contain'
							loading='lazy'
						/>
					</div>

					{/* Content */}
					<div className='flex flex-col gap-6 order-1 lg:order-2'>
						<h2 className='font-[Georgia,serif] text-[#545454] text-[2.1875rem] md:text-[2.1875rem] leading-[1.3] tracking-[0.06em] m-0'>
							О приюте
							<br />
							"Уютный Дом"
						</h2>
						<div className='flex flex-col gap-6 font-[Arial,sans-serif] text-[#4c4c4c] text-[0.9375rem] leading-[1.6]'>
							<p>
								В настоящее время у нас на попечении 121 собака и 342 кошки, и статистика показывает, что только 20%
								из них найдут семью. Остальные продолжат жить с нами и будут ждать
								своего счастливого шанса стать любимыми.
							</p>
							<p>
								Мы кормим наших подопечных лучшим кормом и следим за тем, чтобы они не болели,
								чувствовали себя комфортно (в том числе психологически) и хорошо. Нам помогают 87 волонтёров и
								28 сотрудников различной квалификации. Около 12% животных забирают себе
								сотрудники приюта. Заботясь о животных, они привязываются к ним и вряд ли
								когда-нибудь оставят их в одиночестве.
							</p>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
