import React, { useState, useEffect } from 'react'
import { Container } from '../components/Layout/Container'
import { PetCard } from '../components/UI/PetCard'
import { PetModal } from '../components/UI/PetModal'
import { Pet } from '../../types'

interface ApiResponse {
	pets: Pet[]
	pagination: {
		currentPage: number
		totalPages: number
		totalPets: number
		hasNext: boolean
		hasPrev: boolean
	}
}

export const Pets: React.FC = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const [selectedPet, setSelectedPet] = useState<Pet | null>(null)
	const [modalOpen, setModalOpen] = useState(false)
	const [allPets, setAllPets] = useState<Pet[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)
	const [pagination, setPagination] = useState({
		currentPage: 1,
		totalPages: 1,
		totalPets: 0,
		hasNext: false,
		hasPrev: false,
	})

	const petsPerPage = 8

	useEffect(() => {
		const fetchAllPets = async () => {
			try {
				const response = await fetch(
					`https://cozy-house.onrender.com/api/pets?page=${currentPage}&limit=${petsPerPage}`,
				)
				if (!response.ok) {
					throw new Error('Failed to fetch pets')
				}
				const data: ApiResponse = await response.json()
				setAllPets(data.pets)
				setPagination(data.pagination)
			} catch (err) {
				console.error('Error fetching pets:', err)
				setError('Failed to load pets data')
			} finally {
				setLoading(false)
			}
		}

		fetchAllPets()
	}, [currentPage])

	const goToPage = (page: number) => {
		if (page >= 1 && page <= pagination.totalPages) {
			setCurrentPage(page)
		}
	}

	const handleLearnMore = (pet: Pet) => {
		setSelectedPet(pet)
		setModalOpen(true)
	}

	const handleCloseModal = () => {
		setModalOpen(false)
	}

	if (loading) {
		return <main className='bg-white min-h-screen flex items-center justify-center'>Loading...</main>
	}

	if (error) {
		return <main className='bg-white min-h-screen flex items-center justify-center'>Error: {error}</main>
	}

	return (
		<main className='bg-white min-h-screen'>
			{/* Hero Section */}
			<section
				className='relative py-20 md:py-24'
				style={{
					background: 'radial-gradient(100% 215.42% at 0% 0%, #5B483A 0%, #262425 100%)',
				}}
			>
				<Container>
					<h1 className='font-[Georgia,serif] text-white text-[2.5rem] md:text-[3.75rem] leading-[1.3] tracking-[0.06em] text-center m-0'>
						Our pets
					</h1>
				</Container>
			</section>

			{/* Pets Grid */}
			<section className='py-16 md:py-20 lg:py-24'>
				<Container>
					<div className='flex flex-col gap-12'>
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10'>
							{allPets.map(pet => (
								<PetCard key={`${pet.id}-${pet.name}`} pet={pet} onLearnMore={handleLearnMore} />
							))}
						</div>

						{/* Pagination */}
						<div className='flex justify-center items-center gap-4'>
							<button
								onClick={() => goToPage(1)}
								disabled={!pagination.hasPrev}
								className={`w-[52px] h-[52px] rounded-full border-2 border-[#f1cdb3] flex items-center justify-center text-[#292929] transition-colors ${!pagination.hasPrev ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#f1cdb3]'}`}
							>
								«
							</button>
							<button
								onClick={() => goToPage(currentPage - 1)}
								disabled={!pagination.hasPrev}
								className={`w-[52px] h-[52px] rounded-full border-2 border-[#f1cdb3] flex items-center justify-center text-[#292929] transition-colors ${!pagination.hasPrev ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#f1cdb3]'}`}
							>
								‹
							</button>
							{Array.from({ length: Math.min(5, pagination.totalPages) }, (_, idx) => {
								let pageNum
								if (pagination.totalPages <= 5) {
									pageNum = idx + 1
								} else if (currentPage <= 3) {
									pageNum = idx + 1
								} else if (currentPage >= pagination.totalPages - 2) {
									pageNum = pagination.totalPages - 4 + idx
								} else {
									pageNum = currentPage - 2 + idx
								}

								return (
									<button
										key={pageNum}
										onClick={() => goToPage(pageNum)}
										className={`w-[52px] h-[52px] rounded-full flex items-center justify-center text-[#292929] font-[Georgia,serif] text-[1.25rem] transition-colors ${
											currentPage === pageNum
												? 'bg-[#f1cdb3] border-2 border-[#f1cdb3]'
												: 'border-2 border-[#f1cdb3] hover:bg-[#f1cdb3]'
										}`}
									>
										{pageNum}
									</button>
								)
							})}
							<button
								onClick={() => goToPage(currentPage + 1)}
								disabled={!pagination.hasNext}
								className={`w-[52px] h-[52px] rounded-full border-2 border-[#f1cdb3] flex items-center justify-center text-[#292929] transition-colors ${!pagination.hasNext ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#f1cdb3]'}`}
							>
								›
							</button>
							<button
								onClick={() => goToPage(pagination.totalPages)}
								disabled={!pagination.hasNext}
								className={`w-[52px] h-[52px] rounded-full border-2 border-[#f1cdb3] flex items-center justify-center text-[#292929] transition-colors ${!pagination.hasNext ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#f1cdb3]'}`}
							>
								»
							</button>
						</div>
					</div>
				</Container>
			</section>

			<PetModal pet={selectedPet} open={modalOpen} onClose={handleCloseModal} />
		</main>
	)
}
