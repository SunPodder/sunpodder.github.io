import { CircleCheck } from "lucide-react";

function Card({
	title,
	points,
	image,
	href,
}: {
	title: string;
	points: string[];
	image: string;
	href: string;
}) {
	return (
		<div className="border-2 border-app-surface rounded-xl max-w-6xl w-full flex flex-col md:flex-row gap-4 text-left p-6 bg-app-surface/50 overflow-hidden mt-15 text-app-fg">
			<div className="w-full md:min-w-2/5 md:my-10 md:ml-5">
				<h3 className="text-2xl sm:text-3xl font-bold w-4/5 text-app-fg">
					{title}
				</h3>
				<ul className="mt-6 sm:text-lg text-app-fg-muted">
					{points.map((point, index) => (
						<li key={index} className="mt-2 leading-tight">
							<CircleCheck className="w-5 h-5 inline-block mr-2 text-app-accent" />{" "}
							{point}
						</li>
					))}
				</ul>
				<div className="mt-6">
					<a
						className="bg-app-accent text-app-bg px-4 py-2 rounded-lg cursor-pointer hover:bg-app-accent-hover hover:text-app-bg"
						href={href}
						target="_blank"
						rel="noopener noreferrer"
					>
						View Project
					</a>
				</div>
			</div>

			<div className="mt-4 md:my-auto w-full md:max-w-4/5 h-fit border-4 border-app-surface bg-app-bg rounded-lg p-3 md:min-w-4xl max-w-full">
				<div>
					<img src={image} alt={title} height="auto" width={720} />
				</div>
			</div>
		</div>
	);
}

export default Card;
