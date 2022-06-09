interface Experience {
	company: string;
	sub: string;
	color: string;
	jobdesk: string[];
}

const experiences: Experience[] = [
	{
		company: 'CV. Expressa',
		color: 'profile',
		sub: 'Sep 2014 - Nov 2015 ( PHP Web Programmer )',
		jobdesk: [
			'Update Features.',
			'Identifying test cases for new features.',
			'Bugs & Error fixing.',
		],
	},
	{
		company: 'Freelance',
		color: 'yellow-500',
		sub: 'Nov 2015 - Nov 2016 ( PHP / JQuery Fullstack Developer )',
		jobdesk: ['Update Features.', 'Bugs & Error fixing.'],
	},
	{
		company: 'PT. Tiga Inti Perkasa Tech',
		color: 'red-500',
		sub: 'Nov 2016 - Jan 2020 ( Senior Fullstack Engineer )',
		jobdesk: [
			'Team Lead.',
			'Design UI using mockup tool.',
			'Integrating the app with API.',
			'Create function & logic that handle client interaction.',
			'Help & guide other developers understand the code & design pattern.',
			'Creating backend API.',
			'Responsible for application performance.',
			'Fix Bugs & Errors.',
		],
	},
	{
		company: 'Freelance',
		color: 'yellow-500',
		sub: 'Jan 2020 - Current ( Fronend Engineer )',
		jobdesk: [
			'Slicing UI Design to App UI',
			'Update Features.',
			'Bugs & Error fixing.',
		],
	},
];

export default experiences;
