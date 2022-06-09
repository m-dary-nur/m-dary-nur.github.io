import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

interface Skill {
	title: string;
	content: {
		label: string;
		initial: string;
		extra?: string;
		icon?: IconName;
		prefix?: IconPrefix;
		color: string;
		precentage: number;
	}[];
}

const skills: Skill[] = [
	{
		title: 'Server Side',
		content: [
			{
				label: 'Node.js',
				initial: '2015',
				icon: 'node',
				prefix: 'fab',
				color: 'green-400',
				precentage: 4.7,
			},
			{
				label: 'PHP',
				initial: '2014',
				icon: 'php',
				prefix: 'fab',
				color: 'blue-600',
				precentage: 4.5,
			},
		],
	},
	{
		title: 'Client Side',
		content: [
			{
				label: 'React',
				initial: '2016',
				icon: 'react',
				prefix: 'fab',
				color: 'profile',
				precentage: 4.8,
			},
			{
				label: 'Javascript (es5 / es6 / next)',
				initial: '2014',
				icon: 'js-square',
				prefix: 'fab',
				color: 'yellow-500',
				precentage: 4.8,
			},
			{
				label: 'JQuery',
				initial: '2014',
				color: 'yellow-700',
				precentage: 4.6,
			},
			{
				label: 'Angular 1',
				initial: '2015',
				extra: '1',
				icon: 'angular',
				prefix: 'fab',
				color: 'red-600',
				precentage: 3.9,
			},
			{
				label: 'Svelte',
				initial: '2019',
				color: 'orange-600',
				precentage: 3,
			},
			{
				label: 'vue',
				initial: '2016',
				icon: 'vuejs',
				prefix: 'fab',
				color: 'green-600',
				precentage: 2.8,
			},
			{
				label: 'angular 2+',
				initial: '2015',
				extra: '2+',
				icon: 'angular',
				prefix: 'fab',
				color: 'red-600',
				precentage: 2,
			},
		],
	},
	{
		title: 'Styling',
		content: [
			{
				label: 'CSS',
				initial: '2014',
				icon: 'css3-alt',
				prefix: 'fab',
				color: 'orange-500',
				precentage: 4.8,
			},
			{
				label: 'Sass',
				initial: '2017',
				icon: 'sass',
				prefix: 'fab',
				color: 'pink-400',
				precentage: 4.7,
			},
			{
				label: 'Less',
				initial: '2016',
				icon: 'less',
				prefix: 'fab',
				color: 'blue-600',
				precentage: 4,
			},
		],
	},
	{
		title: 'Database',
		content: [
			{ label: 'Maria', initial: '2015', color: 'profile', precentage: 4.1 },
			{ label: 'Mysql', initial: '2014', color: 'profile-600', precentage: 4 },
			{
				label: 'Postgres',
				initial: '2014',
				color: 'blue-600',
				precentage: 3.8,
			},
			{ label: 'Mongo', initial: '2016', color: 'green-500', precentage: 3.5 },
		],
	},
	{
		title: 'Other',
		content: [
			{ label: 'JSON', initial: '2014', color: 'red-500', precentage: 5 },
			{ label: 'Git', initial: '2017', color: 'gray-700', precentage: 4.7 },
			{
				label: 'Analyze',
				initial: '2014',
				color: 'yellow-500',
				precentage: 4.6,
			},
			{ label: 'Logic', initial: '2014', color: 'purple-500', precentage: 4.2 },
		],
	},
];

export default skills;
