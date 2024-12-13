import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import ParticlesBackground from "./components/ParticlesBackground";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
	return (
		<ThemeProvider>
			<ThemeToggle />
			<Navbar />
			<Hero />
			<Portfolio />
			<Skills />
			<Contact />
			<Footer />
			<ParticlesBackground />
		</ThemeProvider>
	);
}
