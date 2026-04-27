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
		name: 'Катрин',
		image: imgPetsKatrine,
		breed: 'Британская короткошёрстная',
		age: '6 месяцев',
		description:
			'Катрин — нежная и ласковая кошка, которая любит сворачиваться калачиком в солнечных местах. Она хорошо ладит с другими питомцами и детьми.',
		inoculations: ['panleukopenia', 'rhinotracheitis', 'calicivirus'],
		diseases: ['none'],
		parasites: ['none'],
	},
	{
		id: '2',
		name: 'Дженнифер',
		image: imgPetsJennifer,
		breed: 'Лабрадор',
		age: '2 года',
		description:
			'Дженнифер — энергичная и дружелюбная лабрадор, которая любит играть с мячом и гулять. Она хорошо дрессирована и отлично ладит с семьями.',
		inoculations: ['rabies', 'distemper', 'parvovirus'],
		diseases: ['none'],
		parasites: ['none'],
	},
	{
		id: '3',
		name: 'Вуди',
		image: imgPetsWoody,
		breed: 'Золотистый ретривер',
		age: '3 года',
		description:
			'Вуди — преданный и ласковый золотистый ретривер со спокойным темпераментом. Он любит плавать и находиться рядом с людьми.',
		inoculations: ['rabies', 'distemper', 'hepatitis'],
		diseases: ['none'],
		parasites: ['none'],
	},
	{
		id: '4',
		name: 'Скарлет',
		image: imgPetsScarlet,
		breed: 'Джек-рассел-терьер',
		age: '3 месяца',
		description:
			'Скарлет — игривый и энергичный щенок с нескончаемой энергией. Она любит игрушки и очень любопытна ко всему вокруг.',
		inoculations: ['parvovirus', 'distemper'],
		diseases: ['none'],
		parasites: ['none'],
	},
	{
		id: '5',
		name: 'Чарли',
		image: imgPetsCharly,
		breed: 'Британская короткошёрстная',
		age: '9 месяцев',
		description:
			'Чарли — независимая, но ласковая кошка, которая любит тишину и нежные поглаживания. Идеально подходит для спокойного дома.',
		inoculations: ['panleukopenia', 'rhinotracheitis'],
		diseases: ['none'],
		parasites: ['none'],
	},
	{
		id: '6',
		name: 'Тимми',
		image: imgPetsTimmy,
		breed: 'Британская короткошёрстная',
		age: '2 года',
		description:
			'Тимми — спокойный и непринуждённый кот, который любит расслабляться и наблюдать за миром со своего любимого места.',
		inoculations: ['panleukopenia', 'calicivirus', 'rabies'],
		diseases: ['none'],
		parasites: ['none'],
	},
	{
		id: '7',
		name: 'София',
		image: imgPetsKatrine2,
		breed: 'Британская короткошёрстная',
		age: '1 год',
		description:
			'София — милая и нежная кошка с красивой шерстью. Она любит, когда её вычёсывают, и может часами мурлыкать от удовольствия.',
		inoculations: ['rhinotracheitis', 'calicivirus'],
		diseases: ['none'],
		parasites: ['none'],
	},
	{
		id: '8',
		name: 'Луна',
		image: imgPetsKatrine1,
		breed: 'Британская короткошёрстная',
		age: '8 месяцев',
		description:
			'Луна — игривый котёнок, который любит интерактивные игрушки и охоту за лазерной указкой. Она очень общительная и любит внимание.',
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
