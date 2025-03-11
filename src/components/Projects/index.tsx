import Card from "./Card";

const projects = [
	{
		title: "Real-time Chat Application",
		image: "/chat.png",
		href: "https://github.com/SunPodder/chat-app",
		points: [
			"Real-time messaging platform with intuitive interface and comprehensive functionality",
			"Built with React, Express, PostgreSQL for data persistence, and Socket.IO for real-time communication",
			"Integrated Redis for optimized caching, significantly improving response times",
		],
	},
	{
		title: "Social Media Application",
		image: "/social.png",
		href: "https://github.com/SunPodder/chirper",
		points: [
			"Full-featured social platform with content creation, user interactions, and discovery features",
			"Utilized SvelteKit for lightning-fast page transitions and optimized client-side rendering",
			"Implemented SurrealDB for flexible document storage with powerful relation capabilities",
		],
	},
	{
		title: "URL Shortening Service",
		image: "/short.png",
		href: "https://github.com/SunPodder/shorty",
		points: [
			"Minimalist yet powerful URL shortening service with custom alias support",
			"Developed detailed click analytics system tracking geographic data and referral sources",
			"Built with React for the frontend and PocketBase for rapid backend development",
		],
	},
];

function Projects() {
	return (
		<div className="text-center px-4" id="projects">
			<div className="pt-20">
				<span className="section-title">REAL-WORLD RESULTS</span>
			</div>
			<h2 className="text-5xl font-bold mt-5">Featured Projects</h2>
			<p className="mt-3 text-gray-400 text-lg">
				See how I transformed concepts into enganging digital
				experiences.
			</p>

			<div className="w-full flex items-center flex-col">
				{projects.map((project, index) => (
					<Card key={index} {...project} />
				))}
			</div>
		</div>
	);
}

export default Projects;
