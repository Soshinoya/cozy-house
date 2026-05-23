import React, { useState, useEffect } from 'react'
import { Container } from '../Layout/Container'
import { PetCard } from '../ui/PetCard'
import { PetModal } from '../ui/PetModal'
import { Button } from '../ui/Button'
import { Pet } from '../../../types'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { API_URL } from '../../../main'

export const OurFriends: React.FC = () => {
	const [selectedPet, setSelectedPet] = useState<Pet | null>(null)
	const [modalOpen, setModalOpen] = useState(false)
	const [allPets, setAllPets] = useState<Pet[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)
	const [currentIndex, setCurrentIndex] = useState(0)
	const petsToShow = 3

	useEffect(() => {
		const fetchPets = async () => {
			try {
				const response = await fetch(`${API_URL}/pets/all`)
				if (!response.ok) {
					throw new Error('Failed to fetch pets')
				}
				const petsData: Pet[] = await response.json()
				setAllPets(petsData)
			} catch (err) {
				console.error('Error fetching pets:', err)
				setError('Failed to load pets data')
			} finally {
				setLoading(false)
			}
		}

		fetchPets()
	}, [])

	const handleLearnMore = (pet: Pet) => {
		setSelectedPet(pet)
		setModalOpen(true)
	}

	const handleCloseModal = () => {
		setModalOpen(false)
	}

	const nextSlide = () => {
		if (currentIndex + petsToShow < allPets.length) {
			setCurrentIndex(prevIndex => prevIndex + petsToShow)
		}
	}

	const prevSlide = () => {
		setCurrentIndex(prevIndex => Math.max(0, prevIndex - petsToShow))
	}

	if (loading) {
		return <div className='py-16 md:py-20 lg:py-24 bg-[#f6f6f6]'>Loading...</div>
	}

	if (error) {
		return <div className='py-16 md:py-20 lg:py-24 bg-[#f6f6f6]'>Error: {error}</div>
	}

	return (
		<section className='py-16 md:py-20 lg:py-24 bg-[#f6f6f6]'>
			<Container>
				<div className='flex flex-col items-center gap-12'>
					<h2 className='font-[Georgia,serif] text-[#545454] text-[2.1875rem] md:text-[2.1875rem] leading-[1.3] tracking-[0.06em] text-center m-0'>
						Наши друзья,
						<br />
						которые ищут дом
					</h2>
					<div className='overflow-hidden w-full max-w-4xl mx-auto'>
						<div
							className='flex transition-transform duration-300 ease-in-out'
							style={{ transform: `translateX(-${(currentIndex / petsToShow) * 100}%)` }}
						>
							{allPets.map(pet => (
								<div
									key={pet.id}
									className='flex-shrink-0 w-full md:w-[calc(100%/2)] lg:w-[calc(100%/3)] px-4'
								>
									<PetCard pet={pet} onLearnMore={handleLearnMore} />
								</div>
							))}

							{allPets.length < petsToShow &&
								Array.from({ length: petsToShow - allPets.length }).map((_, index) => (
									<div
										key={`empty-${index}`}
										className='flex-shrink-0 w-full md:w-[calc(100%/2)] lg:w-[calc(100%/3)] px-4 invisible'
									>
										<div className='h-0 opacity-0'></div>
									</div>
								))}
						</div>
					</div>
					<div className='flex items-center gap-8'>
						<button
							onClick={prevSlide}
							disabled={currentIndex === 0}
							className={`w-[52px] h-[52px] rounded-full border-2 border-[#f1cdb3] flex items-center justify-center text-[#292929] transition-colors ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#f1cdb3]'}`}
							aria-label='Previous pets'
						>
							<ChevronLeft size={24} />
						</button>
						<button
							onClick={nextSlide}
							disabled={currentIndex + petsToShow >= allPets.length}
							className={`w-[52px] h-[52px] rounded-full border-2 border-[#f1cdb3] flex items-center justify-center text-[#292929] transition-colors ${currentIndex + petsToShow >= allPets.length ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#f1cdb3]'}`}
							aria-label='Next pets'
						>
							<ChevronRight size={24} />
						</button>
					</div>
					<Button variant='primary' size='md' onClick={() => (window.location.href = '/pets')}>
						Познакомиться с остальными
					</Button>
				</div>
			</Container>
			<PetModal pet={selectedPet} open={modalOpen} onClose={handleCloseModal} />
		</section>
	)
}
