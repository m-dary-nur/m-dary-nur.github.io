import React, { memo } from 'react';
import Icon from '../components/Icon';
import skills from '../data/skillData';

interface SkillProps {}

const Skill = React.forwardRef<HTMLDivElement, SkillProps>((_, ref) => (
	<div
		ref={ref}
		className="bg-white flex flex-col justify-center items-center px-2 md:px-20 py-4"
	>
		<div className="w-full bg-white flex flex-col justify-center items-center px-2 md:px-20">
			<div className="my-10">
				<h1 className="px-4 text-gray-700 text-2xl border-b-2 border-purple-500">
					Skills
				</h1>
			</div>
			<h3 className="text-gray-600 text-base mb-20">
				Since working as Frontend Developer, I learn some tech to find up best
				choice to implement on each project, here's several skill and tech i've learned.
			</h3>
			
			<div className="w-full flex flex-col md:flex-row">
				{skills.map(({ title, content }) => (
					<div
						key={title}
						className="w-full md:w-2/10 flex-1 pb-2 px-2 m-2 md:my-0 border border-gray-300 rounded-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
					>
						<div className="my-2 mx-4">
							<h3 className="px-4 text-gray-600 py-2 text-xl font-bold border-b-2 border-gray-300 text-center">
								{title}
							</h3>
						</div>
						{content.map(
							({ label, extra, icon, prefix, textColor, bgColor, precentage, initial }) => (
								<div
									key={label}
									className="py-2 flex flex-row justify-center items-center"
								>
									<div className="text-gray-600 w-7/12 flex items-center">
										{icon ? (
											<Icon
												name={icon}
												prefix={prefix}
												size="2x"
												className={textColor}
												alt={label}
											/>
										) : (
											<label className="font-bold" title={label}>
												{label}
											</label>
										)}
										{extra && (
											<>
												{' '}
												<span className="mx-2 font-bold">{extra}</span>
											</>
										)}
									</div>
									<div className="w-full flex flex-no-wrap text-yellow-500 justify-center items-center">
										<div className="w-full">
											<div
												className={`py-0 ${bgColor} rounded-lg`}
												style={{ width: `${precentage * 20}%` }}
											>
												<span className="text-xs text-white text-center ml-2 leading-loose whitespace-no-wrap">{`${precentage} (${initial})`}</span>
											</div>
										</div>
									</div>
								</div>
							)
						)}
					</div>
				))}
			</div>
		</div>
	</div>
));

export default memo(Skill);
