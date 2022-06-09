import React, { Dispatch, memo, SetStateAction, useCallback } from 'react';
import { SectionRef } from '../helpers/types';

import Intro from './Intro';
import About from './About';
import Skill from './Skill';
import Experience from './Experience';
import Project from './Project';

export interface ISpaProps {
	screenRef: SectionRef;
	sectionRefs: SectionRef[];
	view: string;
	setView: Dispatch<SetStateAction<string>>;
}

const Spa: React.FC<ISpaProps> = ({ screenRef, sectionRefs }) => {
	
	const gotoAbout = useCallback(() => {
		if (sectionRefs[1]?.current) {
			sectionRefs[1]?.current?.scrollIntoView!({ behavior: 'smooth' });
		}
	}, [sectionRefs]);

	return (
	<div
		ref={screenRef}
		className="overflow-y-auto bg-gray-50"
		style={{ height: 'calc(100vh - 90px)' }}
	>
		<Intro ref={sectionRefs[0]} onClick={gotoAbout} />
		<About ref={sectionRefs[1]} />
		<Skill ref={sectionRefs[2]} />
		<Experience ref={sectionRefs[3]} />
		<Project ref={sectionRefs[4]} />

		<div className="bg-gray-200 py-6 w-full flex justify-center items-center">
			<h2 className="text-base text-lg font-bold">
				Created by m-dary-nur @ 2022
			</h2>
		</div>
	</div>
)};

export default memo(Spa);
