import React, { memo } from 'react';

import Icon from '../components/Icon';
import about from '../data/aboutData';

interface AboutProps {}

const About = React.forwardRef<HTMLDivElement, AboutProps>((_, ref) => (
	<div
		ref={ref}
		className="bg-profile-100 flex flex-col justify-center items-center md:px-2 md:px-20"
	>
		<div className="my-5">
			<h1 className="px-4 text-gray-700 py-2 text-2xl border-b-2 border-yellow-500">
				About me
			</h1>
		</div>
		<div className="w-10/12 md:w-5/6 mx-auto my-5">
			<section className="text-lg text-gray-700 leading-8 text-center">
				My fullname is <b className="text-lg">Muhammad Dary Nur Rabbani</b>,
				people call me <b className="text-lg">dary</b>,
				<br />I am with{' '}
				<code className="px-2 py-1 text-base rounded border border-profile-200 text-red-500">
					{' '}
					over 9 years
				</code>{' '}
				experience working in the software development.
				<br />I really like learning new tech and everything about{' '}
				<b className="text-lg">fast performance</b>, i also love clean and neat
				UI Design.
			</section>
		</div>
		<div className="my-5">
			<h1 className="px-4 text-gray-700 py-2 text-2xl border-b-2 border-yellow-500">
				Specialization
			</h1>
		</div>
		<div className="w-10/12 md:w-5/6 mx-auto my-5 flex flex-col md:flex-row justify-evenly">
			{about.map(({ icon, label, hoverBg, hoverBorder, description }) => (
				<div
					key={label}
					className={`flex flex-col flex-1 justify-center items-center m-4 px-6 py-4 bg-white border border-gray-200 ${hoverBorder} hover:text-white ${hoverBg} hover:shadow-lg rounded-lg transition-all duration-300`}
				>
					<div className="mt-4 mb-2">
						<Icon name={icon} size="4x" />
					</div>
					<label className="mb-2 text-lg font-bold">{label}</label>
					<section className="text-center text-base">{description}</section>
				</div>
			))}
		</div>
	</div>
));

export default memo(About);
