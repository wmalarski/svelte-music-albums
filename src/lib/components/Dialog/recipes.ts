import { twCva } from '$lib/utils/twCva';

export const dialogOverlayClass = twCva(['fixed inset-0 z-50 bg-black/50']);

export const dialogContentClass = twCva([
	'fixed left-[50%] top-[50%] z-50 max-h-[85vh] w-[90vw]',
	'max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-white',
	'p-6 shadow-lg'
]);

export const dialogTitleClass = twCva(['m-0 text-lg font-medium text-black']);

export const dialogDescriptionClass = twCva(['mb-5 mt-2 leading-normal text-zinc-600']);
