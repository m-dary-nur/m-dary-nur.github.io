import { IconName } from '@fortawesome/fontawesome-svg-core';

interface Section {
	label: string;
	icon: IconName;
	textColor: string;
	borderColor: string;
	hoverTextColor: string;
	hoverBorderColor: string;
}

const sections: Section[] = [
	{
		label: 'intro',
		icon: 'hand-heart',
		textColor: 'text-profile-400',
		borderColor: 'border-profile-400',
		hoverTextColor: 'hover:text-profile-400',
		hoverBorderColor: 'hover:border-profile-400',
	},
	{
		label: 'about',
		icon: 'id-badge',
		textColor: 'text-yellow-500',
		borderColor: 'border-yellow-500',
		hoverTextColor: 'hover:text-yellow-500',
		hoverBorderColor: 'hover:border-yellow-500',
	},
	{
		label: 'skills',
		icon: 'brackets-curly',
		textColor: 'text-purple-500',
		borderColor: 'border-purple-500',
		hoverTextColor: 'hover:text-purple-500',
		hoverBorderColor: 'hover:border-purple-500',
	},
	{
		label: 'experiences',
		icon: 'user-chart',
		textColor: 'text-green-500',
		borderColor: 'border-green-500',
		hoverTextColor: 'hover:text-green-500',
		hoverBorderColor: 'hover:border-green-500',
	},
	{
		label: 'projects',
		icon: 'tasks',
		textColor: 'text-red-500',
		borderColor: 'border-red-500',
		hoverTextColor: 'hover:text-red-500',
		hoverBorderColor: 'hover:border-red-500',
	},
];

export default sections;
