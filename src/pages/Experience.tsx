import React, { memo } from 'react';
import experiences from '../data/experienceData';

interface ExperienceProps {}

const Experience = React.forwardRef<HTMLDivElement, ExperienceProps>(
	(_, ref) => (
		<div
			ref={ref}
			className="bg-white flex flex-col justify-center items-center px-2 md:px-20 py-4"
		>
			<div className="w-full bg-white flex flex-col justify-center items-center px-2 md:px-20">
				<div className="my-5">
					<h1 className="px-4 text-gray-700 text-2xl border-b-2 border-green-500">
						Experiences
					</h1>
				</div>
			</div>
			<div className="relative w-full md:w-2/3 m-8">
				<div
					className="border-r-2 border-green-500 absolute h-full top-0"
					style={{ left: 14 }}
				/>
				<ul className="list-none m-0 p-0">
					{experiences.map(({ company, color, sub, jobdesk }, i) => (
						<li key={sub} className="mb-4">
							<div className="flex items-center mb-1">
								<div
									className={`${
										i + 1 === experiences.length
											? 'bg-green-500'
											: 'bg-white border-8 border-green-500'
									} rounded-full h-8 w-8 z-10`}
								/>
								<div className="flex flex-1 flex-col ml-4 font-medium justify-center items-start">
									<span className={`text-${color} text-lg`}>{company}</span>
									<span className="text-base">{sub}</span>
								</div>
							</div>
							<div className="ml-12">
								<ul className="list-disc list-inside">
									{jobdesk.map((job) => (
										<li key={job} className="text-base">
											{job}
										</li>
									))}
								</ul>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
);

export default memo(Experience);
