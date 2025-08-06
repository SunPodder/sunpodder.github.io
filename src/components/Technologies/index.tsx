import {
	siPython,
	siTypescript,
	siReact,
	siTailwindcss,
	siHono,
	siPostgresql,
	siMysql,
	siRedis,
	siGooglecloud,
	siGithubactions,
	siCloudflare,
	siDocker,
} from "simple-icons";
const techs = [
	"Python",
	"TypeScript",
	"React",
	"Tailwind CSS",
	"Hono",
	"PostgreSQL",
	"MySQL",
	"Redis",
	"Google Cloud",
	"Cloudflare",
	"Github Actions",
	"Docker",
];

const iconMap = [
	siPython,
	siTypescript,
	siReact,
	siTailwindcss,
	siHono,
	siPostgresql,
	siMysql,
	siRedis,
	siGooglecloud,
	siCloudflare,
	siGithubactions,
	siDocker,
];

function Technologies() {

	return (
		<div className="text-center px-4 pb-20 text-app-fg">
			<div className="pt-12">
				<span className="section-title">Technologies I Work With</span>
			</div>
			{/* <p className="text-app-fg-muted text-lg max-w-2xl mx-auto">
				I leverage a range of modern tools and frameworks to build
				robust, scalable applications.
			</p> */}

			<div className="mt-8 w-full flex justify-center">
				<div className="relative w-full max-w-6xl overflow-hidden">
					<div className="flex gap-8 animate-tech-scroll">
						{[...iconMap, ...iconMap].map((icon, idx) => (
							<div
								key={techs[idx % techs.length] + idx}
								className="flex flex-col items-center justify-center"
							>
								<span className="w-36 h-36 p-4 flex items-center justify-center rounded-xl bg-app-surface shadow-md">
									<svg
										width="84"
										height="84"
										viewBox="0 0 24 24"
										fill="var(--color-app-accent)"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d={icon.path} />
									</svg>
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Technologies;
