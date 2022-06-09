import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

interface Skill {
	title: string;
	content: {
		label: string;
		initial: string;
		extra?: string;
		icon?: IconName;
		prefix?: IconPrefix;
		textColor: string;
		bgColor: string;
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
				textColor: 'text-green-400',
				bgColor: 'bg-green-400',
				precentage: 4.7,
			},
			{
				label: 'PHP',
				initial: '2014',
				icon: 'php',
				prefix: 'fab',
				textColor: 'text-blue-600',
				bgColor: 'bg-blue-600',
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
				textColor: 'text-profile',
				bgColor: 'bg-profile',
				precentage: 4.8,
			},
			{
				label: 'Javascript (es5 / es6 / next)',
				initial: '2014',
				icon: 'js-square',
				prefix: 'fab',
				textColor: 'text-yellow-500',
				bgColor: 'bg-yellow-500',
				precentage: 4.8,
			},
			{
				label: 'JQuery',
				initial: '2014',
				textColor: 'text-yellow-700',
				bgColor: 'bg-yellow-700',
				precentage: 4.6,
			},
			{
				label: 'Angular 1',
				initial: '2015',
				extra: '1',
				icon: 'angular',
				prefix: 'fab',
				textColor: 'text-red-600',
				bgColor: 'bg-red-600',
				precentage: 3.9,
			},
			{
				label: 'Svelte',
				initial: '2019',
				textColor: 'text-orange-600',
				bgColor: 'bg-orange-600',
				precentage: 3,
			},
			{
				label: 'vue',
				initial: '2016',
				icon: 'vuejs',
				prefix: 'fab',
				textColor: 'text-green-600',
				bgColor: 'bg-green-600',
				precentage: 2.8,
			},
			{
				label: 'angular 2+',
				initial: '2015',
				extra: '2+',
				icon: 'angular',
				prefix: 'fab',
				textColor: 'text-red-600',
				bgColor: 'bg-red-600',
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
				textColor: 'text-orange-500',
				bgColor: 'bg-orange-500',
				precentage: 4.8,
			},
			{
				label: 'Sass',
				initial: '2017',
				icon: 'sass',
				prefix: 'fab',
				textColor: 'text-pink-400',
				bgColor: 'bg-pink-400',
				precentage: 4.7,
			},
			{
				label: 'Less',
				initial: '2016',
				icon: 'less',
				prefix: 'fab',
				textColor: 'text-blue-600',
				bgColor: 'bg-blue-600',
				precentage: 4,
			},
		],
	},
	{
		title: 'Database',
		content: [
			{
				label: 'Maria',
				initial: '2015',
				textColor: 'text-profile',
				bgColor: 'bg-profile',
				precentage: 4.1,
			},
			{
				label: 'Mysql',
				initial: '2014',
				textColor: 'text-profile-600',
				bgColor: 'bg-profile-600',
				precentage: 4,
			},
			{
				label: 'Postgres',
				initial: '2014',
				textColor: 'text-blue-600',
				bgColor: 'bg-blue-600',
				precentage: 3.8,
			},
			{
				label: 'Mongo',
				initial: '2016',
				textColor: 'text-green-500',
				bgColor: 'bg-green-500',
				precentage: 3.5,
			},
		],
	},
	{
		title: 'Other',
		content: [
			{
				label: 'JSON',
				initial: '2014',
				textColor: 'text-red-500',
				bgColor: 'bg-red-500',
				precentage: 5,
			},
			{
				label: 'Git',
				initial: '2017',
				textColor: 'text-gray-700',
				bgColor: 'bg-gray-700',
				precentage: 4.7,
			},
			{
				label: 'Analyze',
				initial: '2014',
				textColor: 'text-yellow-500',
				bgColor: 'bg-yellow-500',
				precentage: 4.6,
			},
			{
				label: 'Logic',
				initial: '2014',
				textColor: 'text-purple-500',
				bgColor: 'bg-purple-500',
				precentage: 4.2,
			},
		],
	},
];

export default skills;
