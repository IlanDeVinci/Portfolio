import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experiences = [
	{
		title: "Job #1",
		date: "2020 - 2021",
		description: "This is a job description",
	},
	{
		title: "Job #2",
		date: "2019 - 2020",
		description: "This is a job description",
	},
	{
		title: "Job #3",
		date: "2018 - 2019",
		description: "This is a job description",
	},
	{
		title: "Job #4",
		date: "2017 - 2018",
		description: "This is a job description",
	},
	{
		title: "Job #5",
		date: "2016 - 2017",
		description: "This is a job description",
	},
];

const Experience = () => {
	return (
		<div className=" p-8 justify-center grid grid-cols-1">
			<h1 className=" text-4xl text-gray-200 font-bold  text-center mb-12">
				Experience
			</h1>
			<motion.div
				className=" scroll-y-8 flex-col justify-items-center   gap-8"
				initial="hidden"
				animate="visible">
				{experiences.map((experience, index) => (
					<Reveal key={index}>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: false, amount: 0.3 }}
							transition={{ duration: 1 }}
							className="max-w-[700px] mx-auto border border-purple-600  mb-8 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-purple-700/10">
							<h2 className=" text-2xl font-semibold text-gray-100">
								{experience.title}
							</h2>
							<p className=" text-gray-300 mb-4">{experience.date}</p>
							<p className=" text-gray-400">{experience.description}</p>
						</motion.div>
					</Reveal>
				))}
			</motion.div>
		</div>
	);
};

export default Experience;
