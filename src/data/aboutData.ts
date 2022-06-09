import { IconName } from '@fortawesome/fontawesome-svg-core';

interface Specification {
	icon: IconName;
	color: string;
	label: string;
	description: string;
}

const about: Specification[] = [
	{
		label: 'Slicing Design',
		icon: 'pencil-ruler',
		color: 'yellow-500',
		description:
			'Slicing UI design to UI app using HTML, CSS, and Javascript is so much fun and i love it.',
	},
	{
		label: 'Responsive UI',
		icon: 'phone-laptop',
		color: 'profile',
		description:
			'I love make app support for any device for better User Experience for user.',
	},
	{
		label: 'Perfect & Clean Code',
		icon: 'code',
		color: 'green-500',
		description:
			'I write and make code clean, useful, readable, and reusable for other engineer.',
	},
	{
		label: 'Bug Fix',
		icon: 'bug',
		color: 'red-500',
		description:
			'I love code without bugs and errors, i also fixing it to make an App on the best performance.',
	},
];

export default about;
