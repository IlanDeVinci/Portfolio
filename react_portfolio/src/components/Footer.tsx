import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
	const { isDark } = useTheme();

	return (
		<div className="max-w-[1300px] mx-auto flex justify-between p-6 md:text-lg mt-12">
			<div className="space-y-4">
				<h3
					className={`text-2xl ${isDark ? "text-gray-200" : "text-gray-800"}`}>
					Ilan Maouchi
				</h3>
				<div className="flex flex-row gap-6 text-4xl">
					<a
						href="#"
						className={`${
							isDark
								? "text-gray-400 hover:text-gray-200"
								: "text-gray-600 hover:text-gray-800"
						}`}>
						<FaGithubSquare />
					</a>
					<a
						href="#"
						className={`${
							isDark
								? "text-gray-400 hover:text-gray-200"
								: "text-gray-600 hover:text-gray-800"
						}`}>
						<FaLinkedin />
					</a>
				</div>
			</div>
			<p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
				@2024 I.Maouchi
			</p>
		</div>
	);
};

export default Footer;
