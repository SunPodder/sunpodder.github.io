import { ArrowDown } from "lucide-react";
import TypewriterEffect from "./TypeWriterEffect";
import StarField from "./StarField";
import { useActiveSection } from "../../hooks/active-section";

function Avatar({ className }: { className?: string }) {
	return (
		<div className={`flex flex-col items-center ${className}`}>
			<img
				src="/sun.jpeg"
				alt=""
				className="w-32 h-32 rounded-full border-2 border-app-surface"
			/>
			<div className="flex items-center gap-2 bg-app-surface px-4 py-2 rounded-xl transform -translate-y-3 border-2 border-app-accent">
				<div className="w-2 h-2 bg-green-500 rounded-full"></div>
				<TypewriterEffect />
			</div>
		</div>
	);
}

function Hero() {
	const { navigateTo } = useActiveSection();

	return (
		<div
			className="overflow-auto h-screen backdrop-blur-2xl px-8 text-app-fg"
			id="home"
		>
			<Avatar className="mt-32 sm:mt-44 md:mt-56" />
			<h2 className="text-2xl md:text-3xl font-bold text-center mt-4 text-app-fg">
				Full-Stack & Systems Developer
			</h2>
			<p className="text-center mt-2 text-lg text-app-fg-muted">
				Cross-platform tools and systems built for real-world impact.
			</p>
			<div className="mt-5 flex justify-center gap-4 flex-col sm:flex-row max-w-50 sm:max-w-full mx-auto">
				<button
					className="border border-app-surface rounded-xl px-4 py-2 md:text-lg font-medium flex items-center gap-1 cursor-pointer bg-app-surface text-app-fg hover:bg-app-accent-hover hover:text-app-bg"
					onClick={() => navigateTo("projects")}
				>
					Explore My Work
					<ArrowDown className="w-6 h-6" />
				</button>
				<button
					className="bg-app-accent text-app-bg px-4 py-2 rounded-xl md:text-lg font-medium cursor-pointer hover:bg-app-accent-hover hover:text-app-bg"
					onClick={() => navigateTo("contact")}
				>
					&#128075; Get in Touch
				</button>
			</div>
			<StarField />
		</div>
	);
}

export default Hero;
