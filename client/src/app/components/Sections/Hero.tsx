import { useNavigate } from 'react-router'
import React from 'react'
import { Button } from '../ui/Button'
import imgStartScreenPuppy from '../../../assets/puppy-start-screen.png'

export const Hero: React.FC = () => {
	const navigate = useNavigate()

	return (
		<section className='relative flex items-center overflow-hidden pt-[220px] px-5 md:px-8 lg:px-16'>
			<div
				className='absolute inset-0 z-0'
				style={{
					background: 'radial-gradient(100% 215.42% at 0% 0%, #5B483A 0%, #262425 100%)',
				}}
			/>

			<div className='relative z-10 max-w-[90rem] mx-auto w-full'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
					<div className='flex flex-col gap-10 text-center lg:text-left'>
						<h1 className='font-[Georgia,serif] text-white text-[2.5rem] md:text-[2.75rem] leading-[1.3] tracking-[0.06em] m-0'>
							Не только людям
							<br />
							нужен дом
						</h1>
						<p className='font-[Arial,sans-serif] text-[#cdcdcd] text-[0.9375rem] leading-[1.6] max-w-[28.125rem]'>
							Мы предлагаем дать шанс маленькому и доброму щенку с огромным и открытым сердцем.
							Он или она будет любить вас больше всех на свете, вы увидите!
						</p>
						<div>
							<Button variant='primary' size='md' onClick={() => navigate('/pets')}>
								Найти друга
							</Button>
						</div>
					</div>
					<div className='flex justify-center lg:justify-end'>
						<img
							src={imgStartScreenPuppy}
							alt='Happy puppy looking for a home'
							className='w-full max-w-[698px] h-auto object-contain'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
