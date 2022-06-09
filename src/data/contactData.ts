import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

interface Contact {
	label: string;
	link: string;
	newTab: boolean;
	icon: IconName;
	prefix: IconPrefix;
	color: string;
}

const contacts: Contact[] = [
	{
		label: 'm.dary.nur@gmail.com',
		link: 'mailto:m.dary.nur@gmail.com?subject=Hi, Dary',
		newTab: false,
		icon: 'envelope',
		prefix: 'far',
		color: 'red-500',
	},
	{
		label: '+6285157778815',
		link: 'https://wa.me/6285157778815?text=hi+dary',
		newTab: true,
		icon: 'whatsapp',
		prefix: 'fab',
		color: 'green-500',
	},
	{
		label: 'M. Dary N.R.',
		link: 'https://linkedin.com/in/m-dary-n-r-59050ab8',
		newTab: true,
		icon: 'linkedin',
		prefix: 'fab',
		color: 'blue-700',
	},
	{
		label: 'm-dary-nur',
		link: 'https://github.com/m-dary-nur',
		newTab: true,
		icon: 'github',
		prefix: 'fab',
		color: 'gray-800',
	},
];

export default contacts;