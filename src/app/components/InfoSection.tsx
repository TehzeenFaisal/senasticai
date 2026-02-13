interface InfoSectionProps {
	tag?: string; // pill at the start, e.g., "What We Do"
	tagBgGradient?: string;
	heading: string;
	underlinedText?: string;
	description: string;
	maxWidth?: string; // optional max width for description
	headingClassName?: string; // optional for custom styling
	descriptionClassName?: string; // optional for custom styling
}

export default function InfoSection({
	tag,
	tagBgGradient = "linear-gradient(to bottom, #0E76BC 0%, #283891 100%)",
	heading,
	underlinedText,
	description,
	maxWidth = "max-w-4xl",
	headingClassName = "text-4xl md:text-5xl font-bold mb-3 relative",
	descriptionClassName = "leading-snug text-lg"
}: InfoSectionProps) {
	return (
		<div className="py-12 px-4">
			{/* Tag */}
			{tag && (
				<div className="text-center flex justify-center mb-6">
					<span className="py-2 px-8 text-white rounded-full text-lg font-medium" style={{ background: tagBgGradient }}>
						{tag}
					</span>
				</div>
			)}

			{/* Heading & Highlight */}
			<div className="text-center flex flex-col items-center">
				<h2 className={`${headingClassName} text-center`}>
					{heading.split("{highlight}")[0]}
					{underlinedText && (
						<span
							className="relative inline-block pb-2"
							style={{
								backgroundImage: `url(/images/underline.svg)`,
								backgroundRepeat: "no-repeat",
								backgroundPosition: "center bottom",
								backgroundSize: "100% auto"
							}}
						>
							{underlinedText}
						</span>
					)}
				</h2>

				{/* Description */}
				<p className={`${descriptionClassName} ${maxWidth} mx-auto text-center`}>{description}</p>
			</div>
		</div>
	);
}
