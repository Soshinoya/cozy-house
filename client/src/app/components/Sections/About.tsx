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
							About the shelter
							<br />
							"Cozy House"
						</h2>
						<div className='flex flex-col gap-6 font-[Arial,sans-serif] text-[#4c4c4c] text-[0.9375rem] leading-[1.6]'>
							<p>
								Currently we have 121 dogs and 342 cats on our hands and statistics show that only 20%
								of them will find a family. The others will continue to live with us and will be waiting
								for a lucky chance to become dearly loved.
							</p>
							<p>
								We feed our wards with the best food and make sure that they do not get sick, feel
								comfortable (including psychologically) and well. We are supported by 87 volunteers and
								28 employees of various skill levels. About 12% of the animals are taken by the shelter
								staff. Taking care of the animals, they become attached to the pets and would hardly
								ever leave them alone.
							</p>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
