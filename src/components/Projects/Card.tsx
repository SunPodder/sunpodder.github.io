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
		<div className="border-2 border-gray-800 rounded-xl max-w-6xl w-full flex flex-col md:flex-row gap-4 text-left p-6 bg-gray-800/50 overflow-hidden mt-15">
			<div className="w-full md:min-w-2/5 md:my-10 md:ml-5">
				<h3 className="text-3xl font-bold w-4/5">{title}</h3>
				<ul className="mt-6 text-lg text-gray-400">
					{points.map((point, index) => (
						<li key={index} className="mt-2.5">
							<CircleCheck className="w-5 h-5 inline-block mr-2" />{" "}
							{point}
						</li>
					))}
				</ul>
				<div className="mt-6">
					<a
						className="bg-white text-black px-4 py-2 rounded-lg cursor-pointer"
						href={href}
						target="_blank"
						rel="noopener noreferrer"
					>
						View Project
					</a>
				</div>
			</div>

			<div className="mt-4 md:my-auto w-full md:max-w-3/5 h-fit border-4 border-gray-600 bg-black rounded-lg p-3 min-w-4xl">
				<div>
					<img src={image} alt={title} height="auto" width={720} />
				</div>
			</div>
		</div>
	);
}

export default Card;
