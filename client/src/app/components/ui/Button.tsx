import React from 'react'
import { ButtonProps } from '../../../types'

export const Button: React.FC<ButtonProps> = ({
	children,
	variant = 'primary',
	size = 'md',
	onClick,
	className = '',
	type = 'button',
	style,
}) => {
	const baseStyles =
		'inline-flex items-center justify-center font-[Georgia,serif] tracking-[0.06em] transition-all duration-300 cursor-pointer border-2 hover:shadow-lg'

	const variantStyles = {
		primary: 'bg-[#f1cdb3] text-[#292929] border-[#f1cdb3] hover:bg-[#fddcc4]',
		secondary: 'bg-transparent text-[#f1cdb3] border-[#f1cdb3] hover:bg-[#f1cdb3] hover:text-[#292929]',
		outline: 'bg-transparent text-[#292929] border-[#f1cdb3] hover:bg-[#f1cdb3]',
	}

	const sizeStyles = {
		sm: 'px-6 py-2 text-sm rounded-[3.125rem]',
		md: 'px-11 py-4 text-[1.0625rem] leading-[1.3] rounded-[6.25rem]',
		lg: 'px-14 py-5 text-lg rounded-[6.25rem]',
	}

	return (
		<button
			style={style}
			type={type}
			onClick={onClick}
			className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
		>
			{children}
		</button>
	)
}
