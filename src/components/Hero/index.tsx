import { ArrowDown } from "lucide-react";
import TypewriterEffect from "./TypeWriterEffect";
import StarField from "./StarField";
import { useActiveSection } from "../../hooks/active-section";

function Avatar({ className }: { className?: string }) {
	return (
		<div className={`flex flex-col items-center ${className}`}>
			<img src="/sun.jpeg" alt="" className="w-32 h-32 rounded-full" />
			<div
				className="flex items-center gap-2 bg-black px-4 py-2 rounded-xl transform -translate-y-3
			border-2 border-gray-800"
			>
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
			className="overflow-auto h-screen backdrop-blur-2xl px-8"
			id="home"
		>
			<Avatar className="mt-36 sm:mt-44 md:mt-56" />
			<h2 className="text-4xl font-bold text-center mt-5">
				Building Exceptional User Experiences
			</h2>
			<p className="text-center mt-5 text-lg text-gray-400">
				I specialize in transformimg designs into functional, high
				performing applications. <br />
				Let's discuss your next project.
			</p>
			<div className="mt-5 flex justify-center gap-4 flex-col sm:flex-row max-w-50 sm:max-w-full mx-auto">
				<button
					className="border border-gray-400 rounded-xl px-4 py-2 text-lg font-medium flex
				items-center gap-1 cursor-pointer hover:bg-gray-100/10"
					onClick={() => navigateTo("projects")}
				>
					Explore My Work
					<ArrowDown className="w-6 h-6" />
				</button>
				<button
					className="bg-white text-black px-4 py-2 rounded-xl text-lg font-medium cursor-pointer
				hover:bg-white/90"
					onClick={() => navigateTo("contact")}
				>
					&#128075; Let's Connect
				</button>
			</div>
			<StarField />
		</div>
	);
}

export default Hero;
