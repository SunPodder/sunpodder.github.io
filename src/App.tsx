import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Nav";
import Projects from "./components/Projects";
// import Testimonials from "./components/Testimonials";

function App() {
	return (
		<div>
			<Navbar />
			<div
				style={{
					background: `radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.15) 0%, transparent 30%),
			radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 40%),
			radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.2) 0%, transparent 50%)`,
				}}
			>
				<Hero />
				<About />
			</div>
			<Projects />
			{/* <Testimonials /> */}
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
