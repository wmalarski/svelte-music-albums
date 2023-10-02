import { twCva } from '$lib/utils/twCva';

export const dropdownMenuClass = twCva([
	'z-10 flex max-h-[300px] min-w-[220px] flex-col shadow-lg',
	'rounded-md bg-white p-1 shadow-neutral-900/30 lg:max-h-none',
	'ring-0 !important'
]);

export const dropdownMenuItemClass = twCva([
	'relative h-6 min-h-[24px] select-none rounded-sm pl-6 pr-1',
	'z-20 text-magnum-900 outline-none',
	'data-[highlighted]:bg-magnum-200 data-[highlighted]:text-magnum-900',
	'data-[disabled]:text-neutral-300',
	'flex items-center text-sm leading-none',
	'ring-0 !important'
]);

export const dropdownMenuTriggerClass = twCva([
	'inline-flex h-9 w-9 items-center justify-center rounded-full bg-white',
	'text-magnum-900 transition-colors hover:bg-white/90',
	'data-[highlighted]:ring-magnum-400 data-[highlighted]:ring-offset-2 !important',
	'p-0 text-sm font-medium  data-[highlighted]:outline-none'
]);

export const dropdownMenuSeparatorClass = twCva(['m-[5px] h-[1px] bg-magnum-200']);
