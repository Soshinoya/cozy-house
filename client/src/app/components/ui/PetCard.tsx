import React from 'react'
import { PetCardProps } from '../../../types'
import { Button } from './Button'
import { Card } from './Card'

export const PetCard: React.FC<PetCardProps> = ({ pet, onLearnMore, className = '' }) => {
	return (
		<Card className={className}>
			<div className='flex flex-col items-center text-center'>
				<div className='w-full justify-center flex h-[270px] overflow-hidden'>
					<img
						src={pet.image.startsWith('http') ? pet.image : `https://cdn.jsdelivr.net/gh/Soshinoya/cozy-house@main/client/assets/${pet.image}`}
						alt={pet.name}
						className='h-full object-cover'
						loading='lazy'
					/>
				</div>
				<div className='p-6 flex flex-col items-center gap-4'>
					<h3 className='font-[Georgia,serif] text-[#545454] text-[1.25rem] leading-[1.3] tracking-[0.06em] m-0'>
						{pet.name}
					</h3>
					<Button variant='secondary' size='md' onClick={() => onLearnMore && onLearnMore(pet)}>
						Learn more
					</Button>
				</div>
			</div>
		</Card>
	)
}
