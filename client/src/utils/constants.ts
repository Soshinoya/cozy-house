export const SITE_INFO = {
	name: 'Cozy House',
	tagline: 'Shelter for pets in Boston',
	description: 'We offer to give a chance to a little and nice puppy with an extremely wide and open heart.',
}

export const CONTACT_INFO = {
	email: 'email@shelter.com',
	phone: '+13 674 567 75 54',
	phoneRaw: '136745677554',
	locations: [
		{
			id: 1,
			address: '1 Central Street, Boston',
			detail: '(entrance from the store)',
		},
		{
			id: 2,
			address: '18 South Park, London',
			detail: null,
		},
	],
}

export const OPENING_HOURS = {
	weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM',
	saturday: 'Saturday: 10:00 AM - 5:00 PM',
	sunday: 'Sunday: Closed',
}

export const DONATION_INFO = {
	bankName: 'Name of the bank / Type of bank account',
	cardNumber: '8380 2880 8028 8791 7435',
	legalInfo:
		'Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed ac diam. Praesent ultrices maximus tortor et vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
}

export const BREAKPOINTS = {
	mobile: 320,
	tablet: 768,
	desktop: 1024,
	largeDesktop: 1441,
} as const

export const ROUTES = {
	home: '/',
	pets: '/pets',
	help: '/help',
	contacts: '/contacts',
} as const
