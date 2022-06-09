import { IconName } from '@fortawesome/fontawesome-svg-core';

interface Specification {
	icon: IconName;
	hoverBg: string;
	hoverBorder: string;
	label: string;
	description: string;
}

const about: Specification[] = [
	{
		label: 'Slicing Design',
		icon: 'pencil-ruler',
		hoverBg: 'hover:bg-yellow-500',
		hoverBorder: 'hover:border-yellow-500',
		description:
			'Slicing UI design to UI app using HTML, CSS, and Javascript is so much fun and i love it.',
	},
	{
		label: 'Responsive UI',
		icon: 'phone-laptop',
		hoverBg: 'hover:bg-profile',
		hoverBorder: 'hover:border-profile',
		description:
			'I love make app support for any device for better User Experience for user.',
	},
	{
		label: 'Perfect & Clean Code',
		icon: 'code',
		hoverBg: 'hover:bg-green-500',
		hoverBorder: 'hover:border-green-500',
		description:
			'I write and make code clean, useful, readable, and reusable for other engineer.',
	},
	{
		label: 'Bug Fix',
		icon: 'bug',
		hoverBg: 'hover:bg-red-500',
		hoverBorder: 'hover:border-red-500',
		description:
			'I love code without bugs and errors, i also fixing it to make an App on the best performance.',
	},
];

export default about;
