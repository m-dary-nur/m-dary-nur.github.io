import React, { memo } from 'react';
import Icon from '../components/Icon';
import contacts from '../data/contactData';

interface IntroProps {
	onClick?: () => void;
}

const Intro = React.forwardRef<HTMLDivElement, IntroProps>(
	({ onClick }, ref) => {
		return (
			<div
				ref={ref}
				className="w-full md:w-5/6 mx-auto"
				style={{ height: 'calc(100vh - 90px)', minHeight: 460 }}
			>
				<div className="flex flex-col-reverse md:flex-row p-20 pb-0 justify-between">
					<div className="flex flex-col justify-center items-center md:items-start md:pl-10">
						<h1 className="text-4xl text-center md:text-left">
							Hi, I`m{' '}
							<span className="text-4xl font-bold text-gray-700">Dary</span>
						</h1>
						<h3 className="text-4xl text-center md:text-left font-bold text-multicolor">
							Frontend Developer
						</h3>
						<button
							onClick={onClick}
							className="mt-10 mb-6 px-6 py-3 bg-white text-profile-400 hover:bg-profile-400 hover:text-white border border-profile-400 rounded-lg text-lg font-bold transition-all duration-300"
							style={{ width: 'fit-content' }}
						>
							About Me
						</button>
					</div>
					<div className="flex md:pr-10 justify-center items-center">
						<img
							className="w-2/3 md:w-64 border-2 border-profile-400 rounded-full"
							src="https://assets.gitlab-static.net/uploads/-/system/user/avatar/5519256/avatar.png?width=160"
							alt="Muhammad Dary Nur Rabbani"
						/>
					</div>
				</div>
				<div className="w-full flex flex-col md:flex-row md:flex-wrap md:justify-evenly items-center px-10 pt-32 pb-10">
					{contacts.map(({ label, link, newTab, icon, prefix, textColor }) => (
						<div
							key={label}
							className=" cursor-pointer px-2 py-1 flex items-center"
						>
							<Icon
								name={icon}
								prefix={prefix}
								size="2x"
								className={`${textColor} pr-1`}
							/>{' '}
							<a
								href={link}
								target={newTab ? '_blank' : ''}
								rel="noopener noreferrer"
								className="pr-2 cursor-pointer no-underline font-bold"
							>
								{label}
							</a>
						</div>
					))}
				</div>
			</div>
		);
	}
);

export default memo(Intro);
