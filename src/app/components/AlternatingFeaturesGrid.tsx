export interface FeatureItem {
	title: string;
	description: string;
	bullets?: string[];
}

export interface FeatureGridItem {
	feature: FeatureItem;
	imageSrc: string;
	imageAlt?: string;
	imageRoundedClass?: string; // e.g., "rounded-3xl" or "rounded-lg"
	imageWidth?: string; // e.g., "w-80", "w-full"
	imageHeight?: string; // optional
	imagePosition?: "left" | "right"; // image on left or right
	overlayGradient?: string; // optional gradient overlay behind image
}

interface FeatureGridProps {
	items: FeatureGridItem[];
	gapClass?: string; // e.g., "gap-12"
	containerPadding?: string; // e.g., "px-5 py-12"
}

export default function AlternatingFeaturesGrid({
	items,
	gapClass = "gap-12",
	containerPadding = "px-5 py-12"
}: FeatureGridProps) {
	return (
		<section className={containerPadding}>
			<div className={`space-y-32`}>
				{items.map((item, index) => {
					const isImageLeft = item.imagePosition === "left";
					return (
						<div key={index} className={`grid lg:grid-cols-2 ${gapClass} items-start`}>
							{/* Feature Text */}
							<div className={`space-y-2 my-auto mt-20 lg:mt-0 ${isImageLeft ? "order-2" : "order-1"}`}>
								<div className="text-left mb-6 lg:mb-9">
									<h2 className="text-4xl md:text-5xl font-bold mb-3">{item.feature.title}</h2>
									<p className="max-w-4xl mx-auto leading-snug text-lg">{item.feature.description}</p>
								</div>

								{item.feature.bullets && item.feature.bullets.length > 0 && (
									<ul className="space-y-3 !-mt-4">
										{item.feature.bullets.map((bullet, i) => (
											<li key={i} className="flex items-center leading-5 text-lg">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth={2}
													strokeLinecap="round"
													strokeLinejoin="round"
													className="w-4 h-4 text-blue-500 flex-shrink-0 mr-2"
												>
													<path d="M7 7h10v10"></path>
													<path d="M7 17 17 7"></path>
												</svg>
												{bullet}
											</li>
										))}
									</ul>
								)}
							</div>

							{/* Feature Image */}
							<div className={`relative ${isImageLeft ? "order-1" : "order-2"} flex justify-center`}>
								{item.overlayGradient && (
									<div
										className="absolute -z-50 hidden lg:flex w-full h-[800px] items-center justify-center opacity-20"
										style={{ background: item.overlayGradient }}
									></div>
								)}
								<div className={`overflow-hidden ${item.imageRoundedClass}`}>
									<img
										src={item.imageSrc}
										alt={item.imageAlt || item.feature.title}
										className={`${item.imageWidth || "w-[80%]"} ${item.imageHeight || "h-auto"} object-cover`}
										style={{ color: "transparent" }}
									/>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
