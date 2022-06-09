import React, {
	useState,
	memo,
	Dispatch,
	SetStateAction,
	useCallback,
	useEffect,
} from 'react';
import { Link } from 'react-router-dom';

import Icon from './Icon';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { SectionRef } from '../helpers/types';
import sections from '../data/sectionData';

type ButtonClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

interface NavProps {
	screenRef: SectionRef;
	sectionRefs: SectionRef[];
	view: string;
	setView: Dispatch<SetStateAction<string>>;
}

interface NavButtonProps {
	ref?: React.RefObject<HTMLDivElement>;
	icon: IconName;
	label: string;
	textColor: string;
	borderColor: string;
	hoverTextColor: string;
	hoverBorderColor: string;
	isSection: boolean;
	onClick: (e: ButtonClickEvent) => void;
}

const NavButton: React.FC<NavButtonProps> = memo(
	React.forwardRef(
		(
			{
				isSection,
				icon,
				label,
				textColor,
				borderColor,
				hoverTextColor,
				hoverBorderColor,
				onClick,
			},
			ref: any
		) => (
			<button
				ref={ref}
				onClick={onClick}
				className={`w-full md:w-auto p-4 md:mx-2 md:py-1 cursor-pointer text-sm text-right md:text-center font-bold uppercase border-b-2 
					${
						isSection
							? `${textColor} ${borderColor}`
							: `border-transparent ${hoverBorderColor} ${hoverTextColor} transition-all duration-200`
					}
				`}
			>
				<Icon name={icon} size="lg" /> {label}
			</button>
		)
	)
);

const Nav: React.FC<NavProps> = ({ screenRef, sectionRefs }) => {
	const [showNav, setNav] = useState<boolean>(false);
	const [active, setActive] = useState(0);

	const gotoSection = useCallback(
		(i: number) => () => {
			if (sectionRefs[i]?.current) {
				sectionRefs[i]?.current?.scrollIntoView!({ behavior: 'smooth' });
				setActive(i);
			}
		},
		[sectionRefs]
	);

	useEffect(() => {
		const handle = () => {
			for (let i = 0; i < sectionRefs.length; i++) {
				const iRef = sectionRefs[i];
				if (iRef?.current) {
					const section = iRef.current;
					if (!section || !(section instanceof Element)) continue;
					if (section.getBoundingClientRect().top - 91 < 0) {
						continue;
					}
				}
				break;
			}
		};

		const myRef = screenRef;
		if (myRef?.current) {
			const screen = myRef.current;
			screen.addEventListener('scroll', handle);
			return () => {
				screen.removeEventListener('scroll', handle);
			};
		}
	}, [active, screenRef, sectionRefs]);

	return (
		<div className="w-full bg-white flex h-24 px-4 md:px-20 md:mx-auto justify-between items-center border-b border-gray-200">
			<h3 className="whitespace-no-wrap font-bold text-sm md:text-base">
				<code className="text-yellow-500 font-bold">{'{'}</code> made with{' '}
				<Icon name="heart" className="text-red-500" alt="love" /> and{' '}
				<Icon
					name="react"
					prefix="fab"
					className="text-profile-400"
					alt="react"
				/>{' '}
				+{' '}
				<span
					className="pl-2 pr-1 font-bold text-white bg-profile cursor-default rounded"
					title="typescript"
				>
					ts
				</span>{' '}
				+{' '}
				<span className="text-sm md:text-base" title="tailwindcss">
					tailwindcss
				</span>{' '}
				<code className="text-yellow-500 font-bold">{'}'}</code>
			</h3>
			<button
				onClick={() => setNav((old) => !old)}
				onBlur={() => setTimeout(() => setNav(false), 200)}
				className="block md:hidden"
			>
				<Icon name="bars" size="lg" />
			</button>
			<div
				className={`${
					!showNav && 'hidden'
				} absolute bg-white w-full top-0 left-0 mt-16 md:mt-0 md:left-auto md:relative z-50 border-b border-gray-300`}
			>
				<div className="flex flex-col justify-end items-end z-50">
					{sections.map((nav, i) => (
						<NavButton
							ref={sectionRefs[i]}
							key={nav.label}
							isSection={active === i}
							onClick={gotoSection(i)}
							{...nav}
						/>
					))}
					<Link
						to="/files/M_DARY_NUR_RABBANI.pdf"
						target="_blank"
						download
						className="w-full no-underline p-4 cursor-pointer text-sm text-right font-bold text-multicolor"
					>
						<Icon name="file-download" size="lg" /> My VC
					</Link>
				</div>
			</div>
			<div className="hidden flex-1 md:flex top-0 left-0 mt-16 md:mt-0 md:left-auto md:relative z-50">
				<div className="w-full flex flex-row justify-end items-center z-50">
					{sections.map((nav, i) => (
						<NavButton
							ref={sectionRefs[i]}
							key={nav.label}
							isSection={active === i}
							onClick={gotoSection(i)}
							{...nav}
						/>
					))}
					<Link
						to="/files/M_DARY_NUR_RABBANI.pdf"
						target="_blank"
						download
						className="no-underline p-4 cursor-pointer text-sm text-right font-bold text-multicolor"
					>
						<Icon name="file-download" size="lg" /> My VC
					</Link>
				</div>
			</div>
		</div>
	);
};

export default memo(Nav);
