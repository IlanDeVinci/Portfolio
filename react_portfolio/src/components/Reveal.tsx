import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

import { ReactNode } from "react";

interface RevealProps {
	children: ReactNode;
	width?: string;
}
const Reveal = ({ children, width = "fit-content" }: RevealProps) => {
	const ref = useRef(null);

	const isInView = useInView(ref, { once: true });
	const controls = useAnimation();

	useEffect(() => {
		if (isInView) {
			controls.start("visible");
		}
	}, [isInView, controls]);

	return (
		<div
			ref={ref}
			style={{ position: "relative", width, overflow: "hidden" }}>
			{React.Children.map(children, (child, index) => (
				<motion.div
					key={index}
					variants={{
						hidden: { opacity: 0, y: 75 },
						visible: { opacity: 1, y: 0 },
					}}
					initial="hidden"
					animate={controls}
					transition={{ duration: 0.5, delay: 0.25 }}>
					{React.isValidElement(child)
						? React.cloneElement(child, { key: index })
						: child}
				</motion.div>
			))}
		</div>
	);
};

export default Reveal;
