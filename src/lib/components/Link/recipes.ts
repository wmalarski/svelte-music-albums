import { twCva } from '$lib/utils/twCva';

export const linkClass = twCva('link', {
	defaultVariants: {
		color: null,
		hover: null,
		isActive: false
	},
	variants: {
		color: {
			accent: 'link-accent',
			error: 'link-error',
			info: 'link-info',
			neutral: 'link-neutral',
			primary: 'link-primary',
			secondary: 'link-secondary',
			success: 'link-success',
			warning: 'link-warning'
		},
		hover: {
			false: '',
			true: 'link-hover'
		},
		isActive: {
			false: '',
			true: 'border-b-2 border-white'
		}
	}
});
