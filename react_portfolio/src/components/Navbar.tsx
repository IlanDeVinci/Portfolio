import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const { isDark } = useTheme(); // Add this line to use theme context

	const toggleNav = () => {
		setNav(!nav);
	};

	const closeNav = () => {
		setNav(false);
	};
	const menuVariants = {
		open: {
			x: 0,
			transition: {
				stiffness: 20,
				damping: 15,
			},
		},
		closed: {
			x: "-100%",
			transition: {
				stiffness: 20,
				damping: 15,
			},
		},
	};

	return (
		<nav
			className={`fixed top-0 left-0 w-full backdrop-blur-md z-[100] ${
				isDark ? "bg-gray-900/50" : "bg-white/50"
			}`}>
			<div
				className="max-w-[1300px] mx-auto flex justify-between
			text-[var(--text)] text-xl items-center px-12 h-20">
				<a href="#">I.Maouchi</a>
				<ul className="hidden md:flex gap-12 z-10 cursor-pointer">
					<li>
						<Link
							to="skills"
							smooth={true}
							offset={50}
							duration={500}
							rel="stylesheet">
							About
						</Link>
					</li>
					<li>
						<Link
							to="portfolio"
							smooth={true}
							offset={50}
							duration={500}
							rel="stylesheet">
							Portfolio
						</Link>
					</li>
					<li>
						<Link
							to="contact"
							smooth={true}
							offset={50}
							duration={500}
							rel="stylesheet">
							Contact
						</Link>
					</li>
				</ul>
				<div
					onClick={toggleNav}
					className="md:hidden z-50 text-[var(--text)]">
					{nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
				</div>

				<motion.div
					initial={false}
					animate={nav ? "open" : "closed"}
					variants={menuVariants}
					className={`fixed left-0 top-0 w-full min-h-screen z-40 ${
						isDark ? "bg-gray-900" : "bg-white"
					}`}>
					<ul className="font-semibold text-4xl space-y-8 mt-24 text-center">
						<li>
							<Link
								to="skills"
								smooth={true}
								onClick={closeNav}
								offset={50}
								duration={500}
								rel="stylesheet">
								About
							</Link>
						</li>
						<li>
							<Link
								to="portfolio"
								smooth={true}
								onClick={closeNav}
								offset={50}
								duration={500}
								rel="stylesheet">
								Portfolio
							</Link>
						</li>
						<li>
							<Link
								to="contact"
								smooth={true}
								onClick={closeNav}
								offset={50}
								duration={500}
								rel="stylesheet">
								Contact
							</Link>
						</li>
					</ul>
				</motion.div>
			</div>
		</nav>
	);
};

export default Navbar;
