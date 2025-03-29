import { 
	FileType, 
	Braces, 
	Crop, 
	LayoutGrid, 
	Database, 
	PenTool,
	GalleryVerticalEnd,
	ServerCog,
	ArrowRightLeft,
	Lightbulb,
	Binary
} from "lucide-react";

function About() {
	return (
		<div className="text-center px-4" id="about">
			<div className="pt-20">
				<span className="section-title">ABOUT ME</span>
			</div>
			<h2 className="text-4xl sm:text-5xl font-bold mt-4">A Glimpse Into My World</h2>
			<p className="mt-2 text-gray-400 text-lg max-w-3xl mx-auto">
				Learn more about who I am and what technologies I work with.
			</p>

			{/* Content container - side by side on larger screens, stacked on mobile */}
			<div className="flex flex-col lg:flex-row gap-10 mt-12 items-start justify-center max-w-6xl mx-auto relative">
				{/* About paragraph */}
				<div className="lg:w-[calc(50%-1px)] text-left lg:pl-8 lg:pr-12">
					<h3 className="text-2xl font-semibold mb-4 text-center lg:text-left">My Background</h3>
					<p className="text-gray-200 leading-relaxed">
						Self-taught full stack developer with a passion for creating
						elegant digital solutions. While completing high school, I've
						dedicated myself to mastering web technologies through
						real-world projects and open source contributions. I thrive on
						solving complex problems and crafting efficient, maintainable
						code. Beyond technical skills, I bring persistence, creativity,
						and attention to detail to everything I build. When not coding,
						I'm exploring new technologies and expanding my understanding of
						software architecture, eager to bring my fresh perspective to
						professional development opportunities.
					</p>
				</div>
				
				{/* Vertical divider - visible only on desktop */}
				<div className="hidden lg:block w-[2px] bg-gray-800 absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2"></div>
				
				{/* Horizontal divider - visible only on mobile */}
				<div className="lg:hidden w-full h-[2px] bg-gray-800 my-4"></div>

				{/* Technologies */}
				<div className="lg:w-[calc(50%-1px)] lg:pl-12 lg:pr-8">
					<h3 className="text-2xl font-semibold mb-5 text-center lg:text-left">My Tech Stack</h3>
					
					{/* Unified tech grid */}
					<div className="flex flex-wrap gap-3">
						<div className="tech-pill bg-blue-900/30 border border-blue-800 hover:border-blue-500 group">
							<FileType className="inline-block mr-1 tech-icon" size={16} />
							<span className="tech-name group-hover:scale-110 transition-transform">TypeScript</span>
							<div className="tech-shine"></div>
						</div>
						<div className="tech-pill bg-yellow-900/30 border border-yellow-800 hover:border-yellow-500 group">
							<FileType className="inline-block mr-1 tech-icon" size={16} />
							<span className="tech-name group-hover:scale-110 transition-transform">Python</span>
							<div className="tech-shine"></div>
						</div>
						<div className="tech-pill bg-purple-900/30 border border-purple-800 hover:border-purple-500 group">
							<Braces className="inline-block mr-1 tech-icon" size={16} />
							<span className="tech-name group-hover:scale-110 transition-transform">C++</span>
							<div className="tech-shine"></div>
						</div>
						<div className="tech-pill bg-blue-900/30 border border-blue-800 hover:border-blue-500 group">
							<Crop className="inline-block mr-1 tech-icon" size={16} />
							<span className="tech-name group-hover:scale-110 transition-transform">React</span>
							<div className="tech-shine"></div>
						</div>
						<div className="tech-pill bg-emerald-900/30 border border-emerald-800 hover:border-emerald-500 group">
							<LayoutGrid className="inline-block mr-1 tech-icon" size={16} />
							<span className="tech-name group-hover:scale-110 transition-transform">Vue</span>
							<div className="tech-shine"></div>
						</div>
						<div className="tech-pill bg-black border border-gray-800 hover:border-gray-400 group">
							<GalleryVerticalEnd className="inline-block mr-1 tech-icon" size={16} />
							<span className="tech-name group-hover:scale-110 transition-transform">Next.js</span>
							<div className="tech-shine"></div>
						</div>
						<div className="tech-pill bg-gray-800 border border-gray-700 hover:border-gray-400 group">
							<ServerCog className="inline-block mr-1 tech-icon" size={16} />
							<span className="tech-name group-hover:scale-110 transition-transform">Express.js</span>
							<div className="tech-shine"></div>
						</div>
						<div className="tech-pill bg-green-900/30 border border-green-800 hover:border-green-500 group">
							<Database className="inline-block mr-1 tech-icon" size={16} />
							<span className="tech-name group-hover:scale-110 transition-transform">MongoDB</span>
							<div className="tech-shine"></div>
						</div>
						<div className="tech-pill bg-blue-900/30 border border-blue-800 hover:border-blue-500 group">
							<Database className="inline-block mr-1 tech-icon" size={16} />
							<span className="tech-name group-hover:scale-110 transition-transform">PostgreSQL</span>
							<div className="tech-shine"></div>
						</div>
						<div className="tech-pill bg-amber-900/30 border border-amber-800 hover:border-amber-500 group">
							<ArrowRightLeft className="inline-block mr-1 tech-icon" size={16} />
							<span className="tech-name group-hover:scale-110 transition-transform">Drizzle</span>
							<div className="tech-shine"></div>
						</div>
						<div className="tech-pill bg-sky-900/30 border border-sky-800 hover:border-sky-500 group">
							<PenTool className="inline-block mr-1 tech-icon" size={16} />
							<span className="tech-name group-hover:scale-110 transition-transform">Tailwind CSS</span>
							<div className="tech-shine"></div>
						</div>
						<div className="tech-pill bg-[#FF9900]/30 border border-[#FF9900] hover:border-[#FFB84D] group">
							<ServerCog className="inline-block mr-1 tech-icon" size={16} />
							<span className="tech-name group-hover:scale-110 transition-transform">AWS</span>
							<div className="tech-shine"></div>
						</div>
						<div className="tech-pill bg-[#4285F4]/30 border border-[#4285F4] hover:border-[#7BAAF7] group">
							<ServerCog className="inline-block mr-1 tech-icon" size={16} />
							<span className="tech-name group-hover:scale-110 transition-transform">GCP</span>
							<div className="tech-shine"></div>
						</div>
						<div className="tech-pill bg-indigo-900/30 border border-indigo-800 hover:border-indigo-500 group">
							<Lightbulb className="inline-block mr-1 tech-icon" size={16} />
							<span className="tech-name group-hover:scale-110 transition-transform">Problem Solving</span>
							<div className="tech-shine"></div>
						</div>
						<div className="tech-pill bg-violet-900/30 border border-violet-800 hover:border-violet-500 group">
							<Binary className="inline-block mr-1 tech-icon" size={16} />
							<span className="tech-name group-hover:scale-110 transition-transform">System Design</span>
							<div className="tech-shine"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
