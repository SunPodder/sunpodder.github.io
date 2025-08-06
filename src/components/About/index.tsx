import Technologies from "../Technologies";

function About() {
	return (
		<div className="text-center px-4 text-app-fg" id="about">
			<div className="pt-20">
				<span className="section-title">Who I am</span>
			</div>
			<p className="text-app-fg-muted text-lg max-w-2xl mx-auto">
				Software engineer with a bias toward action. I thrive on fast iterations, clear goals, and solving real user problems through solid engineering.
			</p>

			{/* Bento grid for stats */}
			<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
				<div className="rounded-2xl bg-app-surface/80 p-8 flex flex-col items-center shadow-md">
					<span className="text-4xl font-bold text-app-accent font-space">30+</span>
					<span className="mt-2 text-app-fg-muted text-lg text-center">Projects Built Across Web, Mobile & Desktop</span>
				</div>
				<div className="rounded-2xl bg-app-surface/80 p-8 flex flex-col items-center shadow-md">
					<span className="text-4xl font-bold text-app-accent font-space">50+</span>
					<span className="mt-2 text-app-fg-muted text-lg text-center">Open Source Contributions on GitHub</span>
				</div>
				<div className="rounded-2xl bg-app-surface/80 p-8 flex flex-col items-center shadow-md">
					<span className="text-4xl font-bold text-app-accent font-space">20+</span>
					<span className="mt-2 text-app-fg-muted text-lg text-center">Technologies Used in Production Code</span>
				</div>
				<div className="rounded-2xl bg-app-surface/80 p-8 flex flex-col items-center shadow-md">
					<span className="text-4xl font-bold text-app-accent font-space">3+ Years</span>
					<span className="mt-2 text-app-fg-muted text-lg text-center">Hands-On Experience as a Self-Taught Developer</span>
				</div>
			</div>

			<Technologies />
		</div>
	);
}

export default About;
