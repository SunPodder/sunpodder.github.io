import {
	Facebook,
	Github,
	Linkedin,
	Mail,
} from "lucide-react";

function Contact() {

	return (
		<div
			className="relative text-center px-4 py-24 text-app-bg rounded-3xl shadow-2xl max-w-3xl mx-auto mt-16"
			id="contact"
		>
			<div className="absolute inset-0 pointer-events-none rounded-3xl border-4 border-app-accent/40 animate-pulse" style={{zIndex:0}} />
			<div className="relative z-10">
				<span className="section-title text-4xl font-extrabold tracking-tight mb-4 block text-app-bg drop-shadow-lg">Let’s Build Something Exceptional</span>
				<p className="text-app-bg/80 text-xl max-w-2xl mx-auto font-medium mb-8">
					Ready to launch your next project or collaborate? I respond fast—let’s make it happen.
				</p>

				<div className="flex justify-center gap-6 mb-10">
					<a
						href="https://github.com/SunPodder"
						target="_blank"
						rel="noopener noreferrer"
						className="p-3 bg-app-bg/30 rounded-full hover:bg-app-bg/60 transition-colors text-app-accent border-2 border-app-accent"
						aria-label="Visit my GitHub profile"
					>
						<Github className="w-7 h-7" />
					</a>
					<a
						href="https://linkedin.com/in/sunpodder"
						target="_blank"
						rel="noopener noreferrer"
						className="p-3 bg-app-bg/30 rounded-full hover:bg-app-bg/60 transition-colors text-app-accent border-2 border-app-accent"
						aria-label="Connect with me on LinkedIn"
					>
						<Linkedin className="w-7 h-7" />
					</a>
					<a
						href="https://m.me/@sunpodder"
						target="_blank"
						rel="noopener noreferrer"
						className="p-3 bg-app-bg/30 rounded-full hover:bg-app-bg/60 transition-colors text-app-accent border-2 border-app-accent"
						aria-label="Message me on Facebook"
					>
						<Facebook className="w-7 h-7" />
					</a>
					<a
						href="mailto:contact.sunpodder09@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
						className="p-3 bg-app-bg/30 rounded-full hover:bg-app-bg/60 transition-colors text-app-accent border-2 border-app-accent"
						aria-label="Email me directly"
					>
						<Mail className="w-7 h-7" />
					</a>
				</div>

				<a
					href="mailto:contact.sunpodder09@gmail.com"
					className="inline-block px-8 py-5 rounded-2xl font-bold text-2xl bg-app-bg text-app-accent border-4 border-app-accent shadow-xl hover:bg-app-accent hover:text-app-bg hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-app-accent"
					style={{letterSpacing: '0.03em'}}
				>
					📬 Get in Touch
				</a>
			</div>
		</div>
	);
}

export default Contact;
