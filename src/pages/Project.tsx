import React, { memo } from 'react';
import Icon from '../components/Icon';
import projects, { Project as IProject } from '../data/projectData';

interface ProjectProps {}

const Project = React.forwardRef<HTMLDivElement, ProjectProps>((_, ref) => {
	return (
		<div
			ref={ref}
			className="bg-gray-100 flex flex-col justify-center items-center px-2 md:px-20 py-4"
		>
			<div className="w-full flex flex-col justify-center items-center px-2 md:px-20">
				<div className="my-5">
					<h1 className="px-4 text-gray-700 text-2xl border-b-2 border-red-500">
						Projects
					</h1>
				</div>
			</div>
			<div className="w-full md:w-5/6 mx-auto my-5 flex flex-col md:flex-row md:flex-wrap justify-evenly">
				{projects.map(
					({
						name,
						image,
						front,
						style,
						back,
						database,
						desc,
						live,
					}: IProject) => (
						<div
							key={name}
							className="flex flex-col flex-1 justify-start items-center m-2 md:m-4 px-4 md:px-6 py-4 bg-white border border-gray-200 hover:shadow-lg rounded-lg transition-all duration-300"
						>
							<img
								src={image}
								alt={name}
								className="w-full h-auto my-2 border-2 border:gray-300 rounded-lg"
							/>
							<div className="w-full">
								<ul className="list-none">
									<li className="py-2 flex flex-row">
										<label
											title={desc}
											className="px-2 text-base text-gray-700 italic"
										>
											{desc}
										</label>
									</li>
									<li className="py-2 flex flex-row">
										<span className="w-5/12 text-base whitespace-no-wrap">
											Client language
										</span>
										{front.map((item) => (
											<div
												key={item.label}
												className={`px-2 text-${item.color} text-base font-bold`}
											>
												{item.icon ? (
													<Icon
														name={item.icon}
														prefix={item.prefix}
														size="2x"
														alt={item.label}
													/>
												) : (
													<label
														title={item.label}
														className="text-base font-bold"
													>
														{item.label}
													</label>
												)}
											</div>
										))}
									</li>
									<li className="py-2 flex flex-row">
										<span className="w-5/12 text-base whitespace-no-wrap">
											Styling
										</span>
										{style.map((item) => (
											<div
												key={item.label}
												className={`px-2 text-${item.color} text-base font-bold`}
											>
												{item.icon ? (
													<Icon
														name={item.icon}
														prefix={item.prefix}
														size="2x"
														alt={item.label}
													/>
												) : (
													<label
														title={item.label}
														className="text-base font-bold"
													>
														{item.label}
													</label>
												)}
											</div>
										))}
									</li>
									<li className="py-2 flex flex-row">
										<span className="w-5/12 text-base whitespace-no-wrap">
											Server language
										</span>
										{back.map((item) => (
											<div
												key={item.label}
												className={`px-2 text-${item.color} text-base font-bold`}
											>
												{item.icon ? (
													<Icon
														name={item.icon}
														prefix={item.prefix}
														size="2x"
														alt={item.label}
													/>
												) : (
													<label
														title={item.label}
														className="text-base font-bold"
													>
														{item.label}
													</label>
												)}
											</div>
										))}
									</li>
									<li className="py-2 flex flex-row">
										<span className="w-5/12 text-base whitespace-no-wrap">
											Database
										</span>
										<label
											title={database}
											className="px-2 text-base font-bold"
										>
											{database}
										</label>
									</li>
									<li className="py-2 flex flex-row">
										<span className="w-5/12 text-base whitespace-no-wrap">
											Live Site
										</span>
										{live ? (
											<div className="flex flex-col">
												<a
													href={live.url}
													target="_blank"
													rel="noopener noreferrer"
													className="px-2 pb-4 text-base font-bold text-gray-700"
												>
													{live.url}
												</a>
												<p className="px-2 whitespace-pre-line">{live.desc}</p>
											</div>
										) : (
											<span className="text-gray-500 px-2">Unavailable</span>
										)}
									</li>
								</ul>
							</div>
						</div>
					)
				)}
			</div>
		</div>
	);
});

export default memo(Project);
