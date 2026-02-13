interface ArrowListItemProps {
	text: string;
}

export default function ArrowListItem({ text }: ArrowListItemProps) {
	return (
		<div className="font-medium flex items-center gap-1 mt-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="lucide lucide-arrow-up-right w-4 h-4 text-blue-500 flex-shrink-0"
			>
				<path d="M7 7h10v10"></path>
				<path d="M7 17 17 7"></path>
			</svg>
			<span className="text-base leading-5 text-gray-700">{text}</span>
		</div>
	);
}
