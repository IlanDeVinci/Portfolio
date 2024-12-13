import React from "react";

interface ShinyEffectProps {
	left?: number;
	right?: number;
	top: number;
	size?: number;
}

const ShinyEffect: React.FC<ShinyEffectProps> = ({
	left,
	right,
	top,
	size = 500,
}) => {
	const positionStyles: React.CSSProperties = {
		top: `${top}px`,
		width: `${size}px`,
		height: `${size}px`,
		zIndex: -1,
	};

	if (left !== undefined) {
		positionStyles.left = `${left}px`;
	}
	if (right !== undefined) {
		positionStyles.right = `${right}px`;
	}
	return (
		<div
			className="shiny-effect"
			style={positionStyles}></div>
	);
};

export default ShinyEffect;
