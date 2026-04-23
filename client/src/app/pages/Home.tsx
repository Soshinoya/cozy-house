import React from 'react'
import { Hero } from '../components/Sections/Hero'
import { About } from '../components/Sections/About'
import { OurFriends } from '../components/Sections/OurFriends'
import { Donation } from '../components/Sections/Donation'

export const Home: React.FC = () => {
	return (
		<main>
			<Hero />
			<About />
			<OurFriends />
			<Donation />
		</main>
	)
}
