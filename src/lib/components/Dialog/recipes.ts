import { twCva, twCx } from '$lib/utils/twCva';
import { buttonClass, type ButtonProps } from '../Button';

export const dialogOverlayClass = twCva(['fixed inset-0 z-50 bg-black/50']);

export const dialogContentClass = twCva([
	'fixed left-[50%] top-[50%] z-50 max-h-[85vh] w-[90vw]',
	'max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-xl',
	'bg-base-300 p-6 shadow-lg'
]);

export const dialogTitleClass = twCva(['m-0 text-lg font-medium text-base-content']);

export const dialogDescriptionClass = twCva(['mb-5 mt-2 leading-normal text-base-content']);

export const dialogCloseClass = (props: ButtonProps = {}) => {
	return twCx(buttonClass(props), 'absolute right-4 top-4');
};
