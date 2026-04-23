export interface Pet {
	id: string
	name: string
	image: string
	breed?: string
	age?: string
	description?: string
	inoculations?: string[]
	diseases?: string[]
	parasites?: string[]
}

export interface NavLink {
	label: string
	path: string
}

export interface ButtonProps {
	children: React.ReactNode
	variant?: 'primary' | 'secondary' | 'outline'
	size?: 'sm' | 'md' | 'lg'
	onClick?: () => void
	className?: string
	type?: 'button' | 'submit' | 'reset'
}

export interface CardProps {
	children: React.ReactNode
	className?: string
}

export interface PetCardProps {
	pet: Pet
	onLearnMore?: (pet: Pet) => void
	className?: string
}

export interface HelpOption {
	icon: string
	title: string
	description: string
}

export interface ContactInfo {
	email: string
	phone: string
	address: string
}
