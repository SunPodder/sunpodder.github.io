import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Nav";

const Projects = React.lazy(() => import("./components/Projects"));
const Testimonials = React.lazy(() => import("./components/Testimonials"));
const Contact = React.lazy(() => import("./components/Contact"));

function App() {
	return (
		<div>
			<Navbar />
			<div
				style={{
					background: `radial-gradient(circle at 20% 20%, oklch(from var(--color-accent) l c h / 20%) 0%, transparent 30%),
			radial-gradient(circle at 80% 20%, oklch(from var(--color-accent) l c h / 20%) 0%, transparent 40%),
			radial-gradient(circle at 50% 50%, oklch(from var(--color-accent) l c h / 20%) 0%, transparent 50%)`,
				}}
			>
				<Hero />
				<About />
			</div>
			<React.Suspense fallback={<div>Loading...</div>}>
				<Projects />
				<Testimonials />
				<Contact />
			</React.Suspense>
			<Footer />
		</div>
	);
}

export default App;
