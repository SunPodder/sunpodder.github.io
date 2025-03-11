import { twMerge } from "tailwind-merge";

function Star({
	className,
	width,
	height,
}: {
	className?: string;
	width?: number;
	height?: number;
}) {
	return (
		<svg
			width={width || 24}
			height={height || 24}
			viewBox="0 0 24 24"
			fill="white"
			xmlns="http://www.w3.org/2000/svg"
			className={twMerge(className)}
		>
			<path
				d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"
				fill="currentColor"
			/>
		</svg>
	);
}

export default Star;
