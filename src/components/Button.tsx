import React, { memo } from 'react';
import Icon from './Icon';

interface ButtonProps {
	children: any;
	onClick: () => void;
	color?: string;
	isLoading?: boolean;
	disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	color = 'gray',
	isLoading,
	disabled,
}) => (
	<button
		onClick={(): false | void => !isLoading && onClick()}
		disabled={disabled}
		className={`${
			disabled ? 'opacity-50 cursor-not-allowed' : `hover:bg-${color}-600`
		} bg-${color}-500 ${
			isLoading ? `text-${color}-500 hover:text-${color}-600` : 'text-white'
		} px-4 py-2 rounded duration-300`}
		style={{ transitionProperty: 'background-color' }}
	>
		{isLoading && (
			<div className="relative">
				<div className="absolute w-full text-center">
					<Icon name="spinner-third" size="lg" spin className="text-white" />
				</div>
			</div>
		)}
		{children}
	</button>
);

export default memo(Button);
