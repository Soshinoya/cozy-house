import { Pet } from '../types'

import imgPetsKatrine from '../assets/pet-katrine.png'
import imgPetsJennifer from '../assets/pet-jennifer.png'
import imgPetsWoody from '../assets/pet-woody.png'
import imgPetsScarlet from '../assets/pet-scarlet.png'
import imgPetsCharly from '../assets/pet-charly.png'
import imgPetsTimmy from '../assets/pet-timmy.png'
import imgPetsKatrine2 from '../assets/pet-sophia.png'
import imgPetsKatrine1 from '../assets/pet-freddie.png'

export const allPets: Pet[] = [
	{
		id: '1',
		name: 'Katrine',
		image: imgPetsKatrine,
		breed: 'British Shorthair',
		age: '6 months',
		description:
			'Katrine is a gentle and affectionate cat who loves to curl up in sunny spots. She gets along well with other pets and children.',
		inoculations: ['panleukopenia', 'rhinotracheitis', 'calicivirus'],
		diseases: ['none'],
		parasites: ['none'],
	},
	{
		id: '2',
		name: 'Jennifer',
		image: imgPetsJennifer,
		breed: 'Labrador',
		age: '2 years',
		description:
			'Jennifer is an energetic and friendly Labrador who loves to play fetch and go for long walks. She is well-trained and great with families.',
		inoculations: ['rabies', 'distemper', 'parvovirus'],
		diseases: ['none'],
		parasites: ['none'],
	},
	{
		id: '3',
		name: 'Woody',
		image: imgPetsWoody,
		breed: 'Golden Retriever',
		age: '3 years',
		description:
			'Woody is a loyal and loving Golden Retriever with a calm temperament. He enjoys swimming and being around people.',
		inoculations: ['rabies', 'distemper', 'hepatitis'],
		diseases: ['none'],
		parasites: ['none'],
	},
	{
		id: '4',
		name: 'Scarlet',
		image: imgPetsScarlet,
		breed: 'Jack Russell Terrier',
		age: '3 months',
		description:
			'Scarlet is a playful and spirited puppy with boundless energy. She loves toys and is very curious about everything around her.',
		inoculations: ['parvovirus', 'distemper'],
		diseases: ['none'],
		parasites: ['none'],
	},
	{
		id: '5',
		name: 'Charly',
		image: imgPetsCharly,
		breed: 'British Shorthair',
		age: '9 months',
		description:
			'Charly is an independent yet affectionate cat who enjoys quiet time and gentle petting. Perfect for a calm household.',
		inoculations: ['panleukopenia', 'rhinotracheitis'],
		diseases: ['none'],
		parasites: ['none'],
	},
	{
		id: '6',
		name: 'Timmy',
		image: imgPetsTimmy,
		breed: 'British Shorthair',
		age: '2 years',
		description:
			'Timmy is a laid-back and easygoing cat who loves to relax and watch the world go by from his favorite perch.',
		inoculations: ['panleukopenia', 'calicivirus', 'rabies'],
		diseases: ['none'],
		parasites: ['none'],
	},
	{
		id: '7',
		name: 'Sophia',
		image: imgPetsKatrine2,
		breed: 'British Shorthair',
		age: '1 year',
		description:
			'Sophia is a sweet and gentle cat with beautiful markings. She loves being brushed and will purr contentedly for hours.',
		inoculations: ['rhinotracheitis', 'calicivirus'],
		diseases: ['none'],
		parasites: ['none'],
	},
	{
		id: '8',
		name: 'Luna',
		image: imgPetsKatrine1,
		breed: 'British Shorthair',
		age: '8 months',
		description:
			'Luna is a playful kitten who loves interactive toys and chasing laser pointers. She is very social and loves attention.',
		inoculations: ['panleukopenia', 'rhinotracheitis', 'calicivirus'],
		diseases: ['none'],
		parasites: ['none'],
	},
]

/**
 * Featured Pets
 * Highlighted pets for the home page
 */
export const featuredPets: Pet[] = allPets.slice(0, 3)

/**
 * Get random pets for carousel/slider
 */
export const getRandomPets = (count: number): Pet[] => {
	const shuffled = [...allPets].sort(() => 0.5 - Math.random())
	return shuffled.slice(0, count)
}

/**
 * Get pet by ID
 */
export const getPetById = (id: string): Pet | undefined => {
	return allPets.find(pet => pet.id === id)
}
