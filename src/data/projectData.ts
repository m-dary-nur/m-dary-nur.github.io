import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

export interface Project {
	name: string;
	desc: string;
	image: string;
	front: Language[];
	style: Language[];
	back: Language[];
	database: string;
	contribution: string;
	live?: {
		url: string;
		desc: string;
	};
}

interface Language {
	label: string;
	icon?: IconName;
	prefix?: IconPrefix;
	color: string;
}

const projects: Project[] = [
	{
		name: 'Cashier System',
		desc: 'System to record selling item.',
		image: require('../images/cashier.png'),
		contribution: '100%',
		front: [
			{
				label: 'Javascript',
				icon: 'js-square',
				prefix: 'fab',
				color: 'yellow-500',
			},
			{
				label: 'JQuery',
				color: 'yellow-700',
			},
		],
		style: [
			{
				label: 'CSS',
				icon: 'css3-alt',
				prefix: 'fab',
				color: 'profile-600',
			},
			{
				label: 'Bootstrap',
				icon: 'bootstrap',
				prefix: 'fab',
				color: 'purple-600',
			},
		],
		back: [
			{
				label: 'PHP',
				icon: 'php',
				prefix: 'fab',
				color: 'blue-600',
			},
			{
				label: 'Codeigniter',
				icon: 'fire',
				prefix: 'far',
				color: 'orange-600',
			},
		],
		database: 'Mysql',
	},
	{
		name: 'Museum Ticketing System',
		desc: 'System to record selling ticket and visitor.',
		image: require('../images/museum.png'),
		contribution: '100%',
		front: [
			{
				label: 'Javascript',
				icon: 'js-square',
				prefix: 'fab',
				color: 'yellow-500',
			},
			{
				label: 'JQuery',
				color: 'yellow-700',
			},
		],
		style: [
			{
				label: 'CSS',
				icon: 'css3-alt',
				prefix: 'fab',
				color: 'profile-600',
			},
			{
				label: 'Bootstrap',
				icon: 'bootstrap',
				prefix: 'fab',
				color: 'purple-600',
			},
		],
		back: [
			{
				label: 'PHP',
				icon: 'php',
				prefix: 'fab',
				color: 'blue-600',
			},
			{
				label: 'Codeigniter',
				icon: 'fire',
				prefix: 'far',
				color: 'orange-600',
			},
		],
		database: 'Mysql',
	},
	{
		name: 'Clinic Internal System',
		desc: 'System to record and report patient in/out and transaction.',
		image: require('../images/clinic.png'),
		contribution: '100%',
		front: [
			{
				label: 'Javascript',
				icon: 'js-square',
				prefix: 'fab',
				color: 'yellow-500',
			},
			{
				label: 'Angular 1',
				icon: 'angular',
				prefix: 'fab',
				color: 'red-600',
			},
			{
				label: 'JQuery',
				color: 'yellow-700',
			},
		],
		style: [
			{
				label: 'CSS',
				icon: 'css3-alt',
				prefix: 'fab',
				color: 'profile-600',
			},
			{
				label: 'Semantic UI',
				color: 'teal-500',
			},
		],
		back: [
			{
				label: 'PHP',
				icon: 'php',
				prefix: 'fab',
				color: 'blue-600',
			},
			{
				label: 'Codeigniter',
				icon: 'fire',
				prefix: 'far',
				color: 'orange-600',
			},
		],
		database: 'Mysql',
	},
	{
		name: 'Inventory System',
		desc: 'System to record and report in/out of gallons water on a drinking water company.',
		image: require('../images/inventory.png'),
		contribution: '100%',
		front: [
			{
				label: 'Javascript',
				icon: 'js-square',
				prefix: 'fab',
				color: 'yellow-500',
			},
			{
				label: 'Angular 1',
				icon: 'angular',
				prefix: 'fab',
				color: 'red-600',
			},
			{
				label: 'JQuery',
				color: 'yellow-700',
			},
		],
		style: [
			{
				label: 'CSS',
				icon: 'css3-alt',
				prefix: 'fab',
				color: 'profile-600',
			},
			{
				label: 'Semantic UI',
				color: 'teal-500',
			},
		],
		back: [
			{
				label: 'PHP',
				icon: 'php',
				prefix: 'fab',
				color: 'blue-600',
			},
			{
				label: 'Codeigniter',
				icon: 'fire',
				prefix: 'far',
				color: 'orange-600',
			},
		],
		database: 'Mysql',
	},
	{
		name: 'POS System',
		desc: 'System to record and simply report selling item and in/out of stocks.',
		image: require('../images/pos.png'),
		contribution: '100%',
		front: [
			{
				label: 'Javascript',
				icon: 'js-square',
				prefix: 'fab',
				color: 'yellow-500',
			},
			{
				label: 'Angular 1',
				icon: 'angular',
				prefix: 'fab',
				color: 'red-600',
			},
			{
				label: 'JQuery',
				color: 'yellow-700',
			},
		],
		style: [
			{
				label: 'CSS',
				icon: 'css3-alt',
				prefix: 'fab',
				color: 'profile-600',
			},
			{
				label: 'Material UI',
				color: 'profile',
			},
		],
		back: [
			{
				label: 'PHP',
				icon: 'php',
				prefix: 'fab',
				color: 'blue-600',
			},
			{
				label: 'Codeigniter',
				icon: 'fire',
				prefix: 'far',
				color: 'orange-600',
			},
		],
		database: 'Mysql',
	},
	{
		name: 'ERP and accounting System',
		desc: 'An ERP System with accounting.',
		image: require('../images/erp.png'),
		contribution: '80%',
		live: {
			url: 'https://xfocus.id',
			desc: 'LOGIN ACCESS \r\nClient Code: 111 \r\nUsername: aw \r\n Password: aw',
		},
		front: [
			{
				label: 'Javascript',
				icon: 'js-square',
				prefix: 'fab',
				color: 'yellow-500',
			},
			{
				label: 'Angular 1',
				icon: 'angular',
				prefix: 'fab',
				color: 'red-600',
			},
		],
		style: [
			{
				label: 'CSS',
				icon: 'css3-alt',
				prefix: 'fab',
				color: 'profile-600',
			},
			{
				label: 'Bootstrap',
				icon: 'bootstrap',
				prefix: 'fab',
				color: 'purple-600',
			},
		],
		back: [
			{
				label: 'PHP',
				icon: 'php',
				prefix: 'fab',
				color: 'blue-600',
			},
			{
				label: 'Codeigniter',
				icon: 'fire',
				prefix: 'far',
				color: 'orange-600',
			},
		],
		database: 'Mariadb',
	},
	{
		name: 'Tax Consultant Report System',
		desc: 'System to report and tracks schedule between consultants and the clients.',
		image: require('../images/consultant.png'),
		contribution: '100%',
		live: {
			url: 'https://konsultan.miniera.tech',
			desc: 'LOGIN ACCESS \r\nKode Registrasi: 007 \r\nEmail: m.dary.nur@gmail.com \r\nPassword: 123',
		},
		front: [
			{
				label: 'Javascript',
				icon: 'js-square',
				prefix: 'fab',
				color: 'yellow-500',
			},
			{
				label: 'React',
				icon: 'react',
				prefix: 'fab',
				color: 'profile-400',
			},
		],
		style: [
			{
				label: 'CSS',
				icon: 'css3-alt',
				prefix: 'fab',
				color: 'profile-600',
			},
			{
				label: 'Tailwind',
				color: 'teal-400',
			},
		],
		back: [
			{
				label: 'Node.js',
				icon: 'node',
				prefix: 'fab',
				color: 'green-400',
			},
			{
				label: 'Restana',
				color: 'gray-600',
			},
		],
		database: 'Mariadb',
	},
	{
		name: 'My Profile',
		desc: 'my simple personal profile.',
		image: require('../images/profile.png'),
		contribution: '100%',
		front: [
			{
				label: 'Javascript',
				icon: 'js-square',
				prefix: 'fab',
				color: 'yellow-500',
			},
			{
				label: 'React',
				icon: 'react',
				prefix: 'fab',
				color: 'profile-400',
			},
			{
				label: 'Typescript',
				color: 'profile',
			},
		],
		style: [
			{
				label: 'CSS',
				icon: 'css3-alt',
				prefix: 'fab',
				color: 'profile-600',
			},
			{
				label: 'Tailwind',
				color: 'teal-400',
			},
		],
		back: [
			{
				label: 'Node.js',
				icon: 'node',
				prefix: 'fab',
				color: 'green-400',
			},
			{
				label: 'Restana',
				color: 'gray-600',
			},
		],
		database: 'Mariadb',
	},
];

export default projects;
