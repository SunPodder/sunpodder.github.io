function Footer() {
	return (
		<div
			className="pt-10"
			style={{
				background: `radial-gradient(circle at 50% 400%, rgba(16, 185, 129, 0.15) 0%, transparent 70%)`,
				backgroundSize: "200% 200%",
			}}
		>
			<footer className="flex justify-between px-3 sm:px-6 md:px-12 py-8 border-t border-gray-800">
				<div>sunpodder &copy; 2025</div>
				<div>
					<a href="" className="hover:text-green-600">View on GitHub</a>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
