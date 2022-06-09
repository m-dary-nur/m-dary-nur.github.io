import { IconName } from '@fortawesome/fontawesome-svg-core';

interface Section {
	label: string;
	icon: IconName;
	color: string;
}

const sections: Section[] = [
	{ label: 'intro', icon: 'hand-heart', color: 'profile-400' },
	{ label: 'about', icon: 'id-badge', color: 'yellow-500' },
	{ label: 'skills', icon: 'brackets-curly', color: 'purple-500' },
	{ label: 'experiences', icon: 'user-chart', color: 'green-500' },
	{ label: 'projects', icon: 'tasks', color: 'red-500' },
];

export default sections;
