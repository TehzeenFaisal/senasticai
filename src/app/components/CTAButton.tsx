export interface CTAButtonProps {
	label: string;
	href?: string;
	onClick?: () => void;
	type?: "link" | "button";
	variant?: "primary" | "secondary";
}

export default function CTAButton({ label, href, onClick, type, variant }: CTAButtonProps) {
	if (type === "link") {
		return (
			<a
				href={href}
				className={`inline-flex items-center justify-center gap-2 whitespace-nowrap h-11 rounded-full px-12 py-5 text-sm font-normal transition-colors hover:cursor-pointer ${
					variant === "primary"
						? "bg-blue-500 text-white hover:bg-blue-600"
						: "bg-transparent border border-gray-600 text-black hover:text-accent-foreground hover:bg-white/60"
				}`}
				style={variant === "primary" ? { background: "linear-gradient(to bottom, #00ABFF 0%, #007CFF 100%)" } : {}}
			>
				{label}
			</a>
		);
	} else {
		return (
			<button
				onClick={onClick}
				className={`inline-flex items-center justify-center gap-2 whitespace-nowrap h-11 rounded-full px-12 py-5 text-sm font-normal transition-colors hover:cursor-pointer ${
					variant === "primary"
						? "bg-blue-500 hover:bg-blue-600 text-white"
						: "bg-transparent border border-gray-600 text-black hover:text-accent-foreground"
				}`}
			>
				{label}
			</button>
		);
	}
}
