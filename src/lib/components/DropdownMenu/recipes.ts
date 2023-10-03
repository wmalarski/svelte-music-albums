import { twCva } from '$lib/utils/twCva';

export const dropdownMenuClass = twCva([
	'z-10 flex max-h-[300px] min-w-[220px] flex-col shadow-lg',
	'rounded-md bg-base-200 p-1 shadow-neutral-900/30 lg:max-h-none',
	'ring-0 !important'
]);

export const dropdownMenuItemClass = twCva([
	'relative h-8 min-h-[24px] select-none rounded-sm pl-6 pr-1',
	'z-20 text-base-content outline-none',
	'data-[highlighted]:bg-base-100 data-[highlighted]:text-base-content',
	'data-[disabled]:text-neutral-300',
	'flex items-center text-sm leading-none',
	'ring-0 !important'
]);

export const dropdownMenuTriggerClass = twCva([
	'inline-flex h-9 w-9 items-center justify-center rounded-full bg-base-200',
	'text-base-content transition-colors hover:bg-base-200/90',
	'data-[highlighted]:ring-base-content data-[highlighted]:ring-offset-2 !important',
	'p-0 text-sm font-medium data-[highlighted]:outline-none'
]);

export const dropdownMenuSeparatorClass = twCva(['m-[5px] h-[1px] bg-base-content']);

export const dropdownMenuCheckClass = twCva([
	'absolute top-1/2 text-base-content left-0 inline-flex w-6 items-center justify-center'
]);
