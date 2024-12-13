import { Swiper, SwiperSlide } from "swiper/react";
import {
	EffectCoverflow,
	Pagination,
	Navigation,
	Mousewheel,
} from "swiper/modules";
import "swiper/swiper-bundle.css";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import Reveal from "./Reveal";

const projects = [
	{
		img: project1,
		title: "Project #1",
		description: "This is a project description",
		links: {
			github: "https://github.com",
			site: "https://github.com",
		},
	},
	{
		img: project2,
		title: "Project #2",
		description: "This is a project description",
		links: {
			github: "https://github.com",
			site: "https://github.com",
		},
	},
	{
		img: project3,
		title: "Project #3",
		description: "This is a project description",
		links: {
			github: "https://github.com",
			site: "https://github.com",
		},
	},
];

const Portfolio = () => {
	return (
		<div
			className="max-w-[1200px] mx-auto p-6 md:my-20"
			id="portfolio">
			<Reveal>
				<h2 className="text-3xl font-bold text-[var(--text)] mb-12 text-center">
					Portfolio
				</h2>
				<Swiper
					effect={"coverflow"}
					grabCursor={true}
					centeredSlides={true}
					loop={true}
					slidesPerView={"auto"}
					coverflowEffect={{
						rotate: 0,
						stretch: 0,
						depth: 100,
						modifier: 2.5,
						slideShadows: true,
					}}
					pagination={{ clickable: true }}
					navigation={true}
					mousewheel={{ forceToAxis: true }}
					modules={[EffectCoverflow, Pagination, Navigation, Mousewheel]}
					className="portfolio-swiper">
					{projects.map((project, index) => (
						<SwiperSlide key={index}>
							<div className="relative group overflow-hidden rounded-xl">
								<img
									src={project.img}
									alt={project.title}
									className="w-full h-[600px] object-cover transition-transform duration-500 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<div className="absolute bottom-0 left-0 right-0 p-6 text-white">
										<h3 className="text-2xl font-bold mb-2">{project.title}</h3>
										<p className="mb-4">{project.description}</p>
										<div className="flex gap-4">
											<a
												href={project.links.github}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors">
												<AiFillGithub size={20} />
												Code
											</a>
											<a
												href={project.links.site}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors">
												<BiLinkExternal size={20} />
												Live Demo
											</a>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</Reveal>
		</div>
	);
};

export default Portfolio;
