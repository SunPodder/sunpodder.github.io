import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Star from "../Star";

interface StarProps {
	id: number;
	top: string;
	left: string;
	size: number;
	opacity: number;
	animationDelay: string;
}

function StarField() {
	const [stars, setStars] = useState<StarProps[]>([]);

	useEffect(() => {
		const starCount = 30;
		const newStars: StarProps[] = [];

		for (let i = 0; i < starCount; i++) {
			newStars.push({
				id: i,
				top: `${Math.random() * 100}%`,
				left: `${Math.random() * 100}%`,
				size: Math.random() * 25 + 10,
				opacity: Math.random() * 0.7 + 0.3,
				animationDelay: `${Math.random() * 5}s`,
			});
		}

		setStars(newStars);
	}, []);

	return (
		<div className="fixed inset-0 pointer-events-none z-[-1] max-w-screen max-h-screen overflow-hidden">
			{stars.map((star) => (
				<motion.div
					key={star.id}
					className="absolute"
					style={{
						top: star.top,
						left: star.left,
						opacity: star.opacity,
					}}
					animate={{
						y: [0, -30, 0, 30, 0],
						x: [0, 15, 30, 15, 0],
						rotate: [0, 5, 0, -5, 0],
					}}
					transition={{
						duration: Math.random() * 10 + 20,
						repeat: Infinity,
						ease: "easeInOut",
						delay: Math.random() * 5,
					}}
				>
					<motion.div
						animate={{
							opacity: [
								star.opacity,
								star.opacity * 0.6,
								star.opacity,
							],
						}}
						transition={{
							duration: 3,
							repeat: Infinity,
							delay: Math.random() * 2,
						}}
					>
						<Star width={star.size} height={star.size} />
					</motion.div>
				</motion.div>
			))}
		</div>
	);
}

export default StarField;
