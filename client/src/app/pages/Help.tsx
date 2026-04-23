import React from 'react'
import { Container } from '../components/Layout/Container'
import { Donation } from '../components/Sections/Donation'

export const Help: React.FC = () => {
	return (
		<main className='bg-white'>
			<section
				className='relative py-20 md:py-24'
				style={{
					background: 'radial-gradient(100% 215.42% at 0% 0%, #5B483A 0%, #262425 100%)',
				}}
			>
				<Container>
					<h1 className='font-[Georgia,serif] text-white text-[2.5rem] md:text-[3.75rem] leading-[1.3] tracking-[0.06em] text-center m-0'>
						Help the shelter
					</h1>
				</Container>
			</section>
			<Donation />
		</main>
	)
}
