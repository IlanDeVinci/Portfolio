import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
	const { isDark, toggleTheme } = useTheme();

	return (
		<motion.button
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			onClick={toggleTheme}
			className="fixed top-24 right-6 p-3 rounded-full bg-purple-500/20 backdrop-blur-sm z-50">
			{isDark ? (
				<FiSun className="text-yellow-400 text-xl" />
			) : (
				<FiMoon className="text-purple-400 text-xl" />
			)}
		</motion.button>
	);
};

export default ThemeToggle;
