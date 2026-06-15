import React from 'react'
import { Pet } from '../../../types'
import { Dialog, DialogClose, DialogContent, DialogTitle } from './dialog'
import { X } from 'lucide-react'

interface PetModalProps {
	pet: Pet | null
	open: boolean
	onClose: () => void
}

const InfoItem: React.FC<{ label: string; value?: string }> = ({ label, value }) => (
	<li style={{ color: '#F1CDB3' }} className='font-bold text-[#292929] list-disc'>
		<div className='flex gap-2'>
			<p className='text-[#292929]'>{label}:</p>
			<span className='font-normal text-[#292929]'>{value || '—'}</span>
		</div>
	</li>
)

export const PetModal: React.FC<PetModalProps> = ({ pet, open, onClose }) => {
	if (!pet) return null

	return (
		<Dialog open={open} onOpenChange={isOpen => !isOpen && onClose()}>
			<DialogContent className='bg-white rounded-2xl border-0 p-0 max-w-[900px] shadow-2xl overflow-visible [&>button:last-child]:hidden'>
				<DialogTitle className='sr-only'>{pet.name}</DialogTitle>
				<DialogClose className='absolute -top-[-20px] -right-[-20px] min-[860px]:-top-12 min-[860px]:-right-42 w-[52px] h-[52px] rounded-full border-2 border-[#f1cdb3] flex items-center justify-center text-[#292929] hover:bg-[#f1cdb3] transition-colors bg-transparent cursor-pointer'>
					<X className='size-5' />
				</DialogClose>
				<div className='grid min-[860px]:grid-cols-2 min-[860px]:w-[630px] rounded-lg overflow-hidden'>
					<div className='h-[350px] hidden min-[860px]:block md:h-auto overflow-hidden'>
						<img
							src={pet.image.startsWith('http') ? pet.image : `https://cdn.jsdelivr.net/gh/Soshinoya/cozy-house@main/client/assets/${pet.image}`}
							alt={pet.name}
							className='w-full h-full object-cover'
						/>
					</div>
					<div className='bg-white p-8 md:p-10 flex flex-col gap-[10px] overflow-y-auto max-h-[350px] md:max-h-[500px]'>
						<h2 className='max-[860px]:text-center font-[Georgia,serif] text-[#292929] text-[2.1875rem] leading-[1.3] tracking-[0.06em] m-0'>
							{pet.name}
						</h2>
						<h3 className='max-[860px]:text-center font-[Georgia,serif] text-[#292929] text-[1.25rem] leading-[1.3] tracking-[0.06em] m-0 -mt-2'>
							{pet.breed}
						</h3>
						<p className='text-[#292929] text-[13px] leading-[1.6] tracking-[0] my-[10px]'>
							{pet.description}
						</p>
						<ul className='pl-[17px] p-0 m-0 flex flex-col gap-[0.75rem] text-[0.9375rem] leading-[1.1] tracking-[0]'>
							<InfoItem label='Возраст' value={pet.age} />
							<InfoItem label='Прививки' value={pet.inoculations?.join(', ')} />
							<InfoItem label='Заболевания' value={pet.diseases?.join(', ')} />
							<InfoItem label='Паразиты' value={pet.parasites?.join(', ')} />
						</ul>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)
}
