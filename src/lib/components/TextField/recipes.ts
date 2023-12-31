import { twCva } from '$lib/utils/twCva';

export const formControlClass = twCva('form-control');

export const textFieldLabelClass = twCva('label gap-2');

export const textFieldLabelTextClass = twCva('label-text');

export const textFieldDescriptionClass = twCva('label-text-alt pt-2');

export const textFieldErrorMessageClass = twCva('text-sm text-error-content');

export const textFieldInputClass = twCva('input', {
	defaultVariants: {
		color: null,
		size: 'md',
		variant: null
	},
	variants: {
		color: {
			accent: 'input-accent',
			error: 'input-error',
			info: 'input-info',
			primary: 'input-primary',
			secondary: 'input-secondary',
			success: 'input-success',
			warning: 'input-warning'
		},
		size: {
			lg: 'input-lg',
			md: 'input-md',
			sm: 'input-sm',
			xs: 'input-xs'
		},
		variant: {
			bordered: 'input-bordered',
			ghost: 'input-ghost'
		}
	}
});
