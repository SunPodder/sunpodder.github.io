import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const messages = [
	"Available for projects",
	"Software Engineer",
	"Systems Engineer",
	"DevOps Enthusiast",
];

function TypewriterEffect() {
	const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
	const [displayText, setDisplayText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);
	const [isWaiting, setIsWaiting] = useState(false);

	useEffect(() => {
		let timeout: NodeJS.Timeout;
		const currentMessage = messages[currentMessageIndex];

		if (isWaiting) {
			timeout = setTimeout(() => setIsWaiting(false), 1500);
			// return () => clearTimeout(timeout);
		}

		if (isDeleting) {
			// Deleting text
			if (displayText === "") {
				// Once deleted, move to next message
				setIsDeleting(false);
				setCurrentMessageIndex(
					(currentMessageIndex + 1) % messages.length
				);
			} else {
				// Continue deleting character by character
				timeout = setTimeout(() => {
					setDisplayText(displayText.slice(0, -1));
				}, 50);
			}
		} else {
			// Typing text
			if (displayText === currentMessage) {
				// Once typed fully, wait before deleting
				setIsWaiting(true);
				timeout = setTimeout(() => setIsDeleting(true), 1500);
			} else {
				// Continue typing character by character
				timeout = setTimeout(() => {
					setDisplayText(
						currentMessage.slice(0, displayText.length + 1)
					);
				}, 100);
			}
		}

		return () => clearTimeout(timeout);
	}, [displayText, isDeleting, isWaiting, currentMessageIndex]);

	return (
		<div className="text-lg flex items-center h-7">
			{displayText}
			<motion.span
				animate={{ opacity: [1, 0] }}
				transition={{
					duration: 0.8,
					repeat: Infinity,
					repeatType: "reverse",
				}}
				className="inline-block w-1 h-5 bg-white ml-1"
			/>
		</div>
	);
}

export default TypewriterEffect;
