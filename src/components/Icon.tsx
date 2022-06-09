import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	library,
	IconPrefix,
	IconName,
} from '@fortawesome/fontawesome-svg-core';
import {
	faHandHeart,
	faUserChart,
	faIdBadge,
	faTasks,
	faSpinnerThird,
	faHeart,
	faPhoneLaptop,
	faPencilRuler,
	faBug,
	faCode,
	faStar,
	faBracketsCurly,
	faDesktop,
	faServer,
	faDatabase,
	faFire,
	faCopyright,
	faEnvelope,
	faBars,
	faFileDownload,
} from '@fortawesome/pro-regular-svg-icons';
import {
	faReact,
	faPhp,
	faNode,
	faJsSquare,
	faVuejs,
	faAngular,
	faCss3Alt,
	faSass,
	faLess,
	faCss3,
	faBootstrap,
	faWhatsapp,
	faLinkedin,
	faGithub,
} from '@fortawesome/free-brands-svg-icons';

library.add(
	faHandHeart,
	faUserChart,
	faIdBadge,
	faTasks,
	faSpinnerThird,
	faHeart,
	faReact,
	faPhoneLaptop,
	faPencilRuler,
	faBug,
	faCode,
	faPhp,
	faNode,
	faJsSquare,
	faVuejs,
	faAngular,
	faCss3Alt,
	faSass,
	faLess,
	faStar,
	faBracketsCurly,
	faDesktop,
	faCss3,
	faServer,
	faDatabase,
	faBootstrap,
	faFire,
	faCopyright,
	faWhatsapp,
	faLinkedin,
	faEnvelope,
	faGithub,
	faBars,
	faFileDownload
);

interface IconProps {
	name: IconName;
	prefix?: IconPrefix;
	size?:
		| 'xs'
		| 'lg'
		| 'sm'
		| '1x'
		| '2x'
		| '3x'
		| '4x'
		| '5x'
		| '6x'
		| '7x'
		| '8x'
		| '9x'
		| '10x'
		| undefined;
	spin?: boolean;
	onClick?: () => void;
	className?: string;
	style?: object;
	alt?: string;
}

const Icon: React.FC<IconProps> = (props) => (
	<FontAwesomeIcon
		{...props}
		icon={[props.prefix || 'far', props.name]}
		title={props.alt}
	/>
);

export default memo(Icon, (p, n) => p.name === n.name);
