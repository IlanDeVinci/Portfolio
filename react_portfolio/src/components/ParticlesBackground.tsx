import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
	const particlesInit = useCallback(async (engine: Engine) => {
		await loadSlim(engine);
	}, []);

	return (
		<Particles
			id="tsparticles"
			init={particlesInit}
			options={{
				fpsLimit: 120,
				interactivity: {
					events: {
						onClick: { enable: true, mode: "push" },
						onHover: { enable: true, mode: "repulse" },
						resize: true,
					},
					modes: {
						push: { quantity: 4 },
						repulse: { distance: 200, duration: 0.5, speed: 0.01 },
					},
				},
				particles: {
					color: { value: "#a855f7" },
					links: {
						color: "#a855f7",
						distance: 150,
						enable: true,
						opacity: 0.5,
						width: 1,
					},
					move: {
						direction: "none",
						enable: true,
						gravity: {
							enable: true,
							acceleration: 0,
						},
						outModes: {
							default: "out",
						},
						random: false,
						speed: 2,
						straight: false,
					},
					number: {
						density: { enable: true, area: 800 },
						value: 80,
					},
					opacity: { value: 0.5 },
					shape: { type: "circle" },
					size: { value: { min: 1, max: 5 } },
				},
				detectRetina: true,
			}}
			className="fixed inset-0 -z-10"
		/>
	);
};

export default ParticlesBackground;
