import Card from "./Card";

const projects = [
	{
		title: "Dokanzo",
		href: "",
		image: "/dokanzo.png",
		points: [
			"Full-featured Shopify-style multi-tenant e-commerce platform with support for local Bangladeshi payment methods like bKash.",
			"Architected for scalability—each tenant can onboard hundreds of users with isolated store data and product catalogs.",
			"Prioritized security (auth, validation, tenant isolation) and performance for large concurrent user bases.",
		],
	},
	{
		title: "Relay",
		image: "/relay.png",
		href: "https://github.com/SunPodder/Relay",
		points: [
			"Syncs Android notifications to a Linux desktop in real-time using a custom TCP-based protocol.",
			"Built the Android client in Kotlin, with a Qt6 C++ desktop app for a native, fast UX.",
			"Designed to solve the distraction of checking phones mid-work by mirroring only important notifications directly to the desktop.",
		],
	},
	{
		title: "Real-time Chat Application",
		image: "/chat.png",
		href: "https://github.com/SunPodder/chat-app",
		points: [
			"One-to-one messaging with real-time updates, typing indicators, and image sharing.",
			"Built with React, Express, Socket.IO, PostgreSQL, and Redis.",
			"Solo-developed to master real-time communication and performance optimization.",
		],
	},
	{
		title: "URL Shortening Service",
		image: "/short.png",
		href: "https://github.com/SunPodder/shorty",
		points: [
			"A serverless URL shortener with dashboards and analytics for authenticated users.",
			"Technologies: React, Go, AWS (API Gateway, Lambda, DynamoDB), Terraform.",
			"Solo project exploring serverless architecture and cloud services.",
		],
	},
	{
		title: "Social Media Application",
		image: "/social.png",
		href: "https://github.com/SunPodder/chirper",
		points: [
			"A lightweight platform for posts and interactions, featuring a custom content discovery algorithm.",
			"Developed with SvelteKit and SurrealDB for its hybrid data model.",
			"Solo-built to enhance social feature skills.",
		],
	},
];

function Projects() {
	return (
		<div className="text-center px-4 bg-app-bg text-app-fg" id="projects">
			<div className="pt-20">
				<span className="section-title">Featured Projects</span>
			</div>
			<p className="text-app-fg-muted text-lg">
				See how I transform concepts into engaging digital experiences.
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
