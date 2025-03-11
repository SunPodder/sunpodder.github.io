import {
	Facebook,
	Github,
	Linkedin,
	Mail,
	MessageSquare,
	Send,
} from "lucide-react";
import { FormEvent, useState } from "react";

function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		const subject = encodeURIComponent(`Contact from ${name}`);
		const body = encodeURIComponent(
			`Message from ${name} (${email}):\n\n${message}`
		);
		window.location.href = `mailto:contact.sunpodder09@gmail.com?subject=${subject}&body=${body}`;
	};

	return (
		<div className="text-center px-4 pb-20" id="contact">
			<div className="pt-20">
				<span className="section-title">
					CONTACT ME
				</span>
			</div>
			<h2 className="text-5xl font-bold mt-5">Let's Connect</h2>
			<p className="mt-3 text-gray-400 text-lg max-w-2xl mx-auto">
				Have a project in mind? Let's work together to bring it to life.
			</p>

			{/* Social Icons */}
			<div className="flex justify-center gap-6 mt-8">
				<a
					href="https://github.com/SunPodder"
					target="_blank"
					rel="noopener noreferrer"
					className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
				>
					<Github className="w-6 h-6" />
				</a>
				<a
					href="https://linkedin.com/in/sunpodder"
					target="_blank"
					rel="noopener noreferrer"
					className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
				>
					<Linkedin className="w-6 h-6" />
				</a>
				<a
					href="https://m.me/@sunpodder"
					target="_blank"
					rel="noopener noreferrer"
					className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
				>
					<Facebook className="w-6 h-6" />
				</a>
				<a
					href="mailto:contact.sunpodder09@gmail.com"
					target="_blank"
					rel="noopener noreferrer"
					className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
				>
					<Mail className="w-6 h-6" />
				</a>
			</div>

			{/* Contact Form */}
			<div className="mt-12 max-w-lg mx-auto bg-gray-800/50 p-8 rounded-xl border border-gray-700">
				<h3 className="text-2xl font-semibold flex items-center justify-center gap-2 mb-6">
					<MessageSquare className="w-5 h-5" /> Send Me a Message
				</h3>

				<form onSubmit={handleSubmit} className="text-left">
					<div className="mb-4">
						<label
							htmlFor="name"
							className="block text-sm font-medium mb-1"
						>
							Name
						</label>
						<input
							type="text"
							id="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
							className="w-full bg-gray-700/50 rounded-lg px-4 py-2 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
						/>
					</div>

					<div className="mb-4">
						<label
							htmlFor="email"
							className="block text-sm font-medium mb-1"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							className="w-full bg-gray-700/50 rounded-lg px-4 py-2 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
						/>
					</div>

					<div className="mb-6">
						<label
							htmlFor="message"
							className="block text-sm font-medium mb-1"
						>
							Message
						</label>
						<textarea
							id="message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							required
							rows={5}
							className="w-full bg-gray-700/50 rounded-lg px-4 py-2 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
						/>
					</div>

					<button
						type="submit"
						className="w-full bg-gradient-to-r from-green-400 to-blue-400 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-pointer"
					>
						Send Message <Send className="w-4 h-4" />
					</button>
				</form>
			</div>
		</div>
	);
}

export default Contact;
