import proflepic from "../assets/profpic.png";
import cvFile from "../assets/CVIlanMaouchi.pdf";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";

const Hero = () => {
	return (
		<div className="mt-24 max-w-[1200px] mx-auto relative">
			<div className=" grid md:grid-cols-2  place-items-center gap-8">
				<motion.div
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}>
					<TypeAnimation
						sequence={[
							"Fullstack Dev",
							1000,
							"Webdesigner",
							1000,
							"UI/UX Designer",
							1000,
						]}
						speed={50}
						repeat={Infinity}
						className=" font-bold text-[var(--gray-medium)] text-xl md:text-5xl italic mb-4"
					/>
					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 1, delay: 0.5 }}
						className=" text-[var(--text)] md:text-7xl text-5xl tracking-tight mb-4">
						HEY, I AM <br />
						<span className=" text-purple-500"> ILAN MAOUCHI </span>
					</motion.p>
					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 1, delay: 0.5 }}
						className=" text-[var(--gray-light)] max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6">
						I am a passionate fullstack developer with 0 years of experience.
					</motion.p>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 1, delay: 1.5 }}
						className="flex flex-row items-center gap-6 my-4 md:mb-0">
						<motion.button
							whileHover={{
								scale: 1.05,
								boxShadow: "0px 0px 12px rgba(147, 51, 234, 0.3)",
							}}
							transition={{
								duration: 0.2,
								ease: "easeOut",
							}}
							onClick={() => {
								const link = document.createElement("a");
								link.href = cvFile;
								link.download = "CVIlanMaouchi.pdf";
								document.body.appendChild(link);
								link.click();
								document.body.removeChild(link);
								window.location.href = "/";
							}}
							className="z-10 text-[var(--text)] cursor-pointer font-bold md:w-auto p-4 border border-purple-400 rounded-xl transition-all duration-300 hover:bg-purple-600">
							Download CV
						</motion.button>
						<div className="flex gap6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
							<motion.a
								whileHover={{ scale: 1.2 }}
								href="https://www.github.com/IlanDeVinci">
								<AiOutlineGithub />
							</motion.a>
							<motion.a
								whileHover={{ scale: 1.2 }}
								href="https://www.linkedin.com/in/ilan-maouchi-b1aa1b28b/">
								<AiOutlineLinkedin />
							</motion.a>{" "}
						</div>
					</motion.div>
				</motion.div>

				<motion.img
					src={proflepic}
					className="w-[300px] md:w-[450px]"
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
				/>
			</div>

			<div className=" absolute inset-0 hidden md:block">
				<ShinyEffect
					left={0}
					top={0}
					size={1300}
				/>
			</div>
		</div>
	);
};

export default Hero;
