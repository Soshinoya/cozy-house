export const classNames = (...classes: (string | undefined | null | false)[]): string => {
	return classes.filter(Boolean).join(' ')
}

export const formatPhoneNumber = (phone: string): string => {
	const cleaned = phone.replace(/\D/g, '')
	const match = cleaned.match(/^(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})$/)
	if (match) {
		return `+${match[1]} ${match[2]} ${match[3]} ${match[4]} ${match[5]}`
	}
	return phone
}

export const truncateText = (text: string, maxLength: number): string => {
	if (text.length <= maxLength) return text
	return text.slice(0, maxLength) + '...'
}

export const debounce = <T extends (...args: any[]) => any>(
	func: T,
	wait: number,
): ((...args: Parameters<T>) => void) => {
	let timeout: ReturnType<typeof setTimeout> | null = null

	return (...args: Parameters<T>) => {
		if (timeout) clearTimeout(timeout)
		timeout = setTimeout(() => func(...args), wait)
	}
}
