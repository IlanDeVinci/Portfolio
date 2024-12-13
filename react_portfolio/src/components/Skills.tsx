import {
	DiHtml5,
	DiCss3,
	DiJavascript1,
	DiReact,
	DiNodejsSmall,
	DiPython,
	DiSass,
	DiBootstrap,
	DiGithubBadge,
	DiMysql,
	DiJava,
	DiPhp,
} from "react-icons/di";
import {
	SiTypescript,
	SiFigma,
	SiAdobephotoshop,
	SiTailwindcss,
	SiVisualstudiocode,
	SiPostman,
} from "react-icons/si";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

const skills = [
	{
		category: "Frontend",
		technologies: [
			{
				name: "HTML5",
				icon: <DiHtml5 className="text-red-400" />,
			},
			{
				name: "CSS3",
				icon: <DiCss3 className="text-blue-400" />,
			},
			{
				name: "Javascript",
				icon: <DiJavascript1 className="text-yellow-400" />,
			},
			{
				name: "TypeScript",
				icon: <SiTypescript className="text-blue-500" />,
			},
			{
				name: "React",
				icon: <DiReact className="text-blue-400" />,
			},
			{
				name: "Sass",
				icon: <DiSass className="text-pink-400" />,
			},
			{
				name: "Bootstrap",
				icon: <DiBootstrap className="text-purple-400" />,
			},
			{
				name: "TailwindCSS",
				icon: <SiTailwindcss className="text-cyan-400" />,
			},
		],
	},
	{
		category: "Backend & Tools",
		technologies: [
			{
				name: "Node.js",
				icon: <DiNodejsSmall className="text-green-400" />,
			},
			{
				name: "Python",
				icon: <DiPython className="text-blue-400" />,
			},
			{
				name: "Java",
				icon: <DiJava className="text-red-500" />,
			},
			{
				name: "PHP",
				icon: <DiPhp className="text-purple-500" />,
			},
			{
				name: "MySQL",
				icon: <DiMysql className="text-blue-400" />,
			},
			{
				name: "Github",
				icon: <DiGithubBadge className="text-gray-400" />,
			},
		],
	},
	{
		category: "Design & Development Tools",
		technologies: [
			{
				name: "Figma",
				icon: <SiFigma className="text-purple-400" />,
			},
			{
				name: "Photoshop",
				icon: <SiAdobephotoshop className="text-blue-600" />,
			},
			{
				name: "VS Code",
				icon: <SiVisualstudiocode className="text-blue-500" />,
			},
			{
				name: "Postman",
				icon: <SiPostman className="text-orange-500" />,
			},
		],
	},
];
const Skills = () => {
	return (
		<div
			className="flex justify-center px-4 text-[var(--text)] pb-8 md:py-12"
			id="skills">
			<Reveal>
				<h2 className="text-3xl font-bold text-center">Skills</h2>
				<p className="text-center mb-8">
					I worked on various frontend and fullstack projects. Check them out{" "}
					<a
						href="#"
						className="underline">
						here
					</a>
					.
				</p>
				<div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 max-w-[1000px] mx-auto">
					{skills.map((skill, index) => (
						<div
							key={index}
							className="border border-purple-900 p-6 rounded-lg bg-purple-900/10 shadow-lg w-full md:w-1/2 backdrop-blur-sm">
							<h3 className="text-xl font-bold mb-4 text-center">
								{skill.category}
							</h3>
							<div className="grid grid-cols-2 gap-4">
								{skill.technologies.map((tech, idx) => (
									<motion.div
										key={idx}
										className="flex flex-col items-center p-4 rounded-lg hover:bg-purple-900/30 transition-colors"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.3, delay: idx * 0.1 }}>
										<motion.div
											className="text-4xl mb-2"
											whileHover={{ scale: 1.1 }}
											transition={{ type: "spring", stiffness: 300 }}>
											{tech.icon}
										</motion.div>
										<span className="text-center">{tech.name}</span>
									</motion.div>
								))}
							</div>
						</div>
					))}
				</div>
			</Reveal>
		</div>
	);
};

export default Skills;
