import ContactForm from "@/app/components/ContactForm";
import ContentPageHero from "@/app/components/ContentPageHero";

export default function AboutUs() {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
			<div className="space-y-32 lg:space-y-48 mb-48">
				<ContentPageHero
					badgeText="About Us"
					title={
						<span>
							Empowering Businesses with <span className="text-blue-600">AI-Driven Hiring</span>
						</span>
					}
					subtitle="We provide a structured, intelligent platform for AI-powered interviews, helping companies hire the right talent efficiently while ensuring fairness, consistency, and data-driven insights."
					ctaPrimary={{
						label: "Learn Our Vision",
						type: "link",
						variant: "primary",
						href: "#vision-section"
					}}
					ctaSecondary={{
						label: "Contact Us",
						type: "link",
						variant: "secondary",
						href: "#contact-section"
					}}
					heroImage={{
						src: "/images/our-vision.webp",
						alt: "Our Vision",
						className: "w-80 max-w-full rounded-2xl shadow-lg object-cover"
					}}
				/>

				{/* Vision Section */}
				<section id="vision-section" className="scroll-mt-32">
					<div className="px-5 space-y-16">
						<div className="text-center justify-center flex mb-6">
							<span
								className="py-2 px-8 text-white rounded-full text-lg font-medium"
								style={{
									background: "linear-gradient(to bottom, #0E76BC 0%, #283891 100%)"
								}}
							>
								Our Vision and Values
							</span>
						</div>

						<div className="text-center justify-center">
							<h2 className="undefined text-4xl md:text-5xl font-bold mb-3 relative">
								To Become the Most Trusted AI Interview Platform for Companies Worldwide
							</h2>
						</div>

						{/* Vision */}
						<div className="grid lg:grid-cols-2 gap-12 items-start">
							<div className="order-2 space-y-2 my-auto mt-20 lg:mt-0">
								<div>
									<div className="text-justify space-y-3 mb-9">
										{/* <h2 className="text-4xl md:text-5xl font-bold mb-3">AI-Powered Interview Creation</h2> */}
										<p className="max-w-4xl mx-auto leading-snug text-lg">
											We envision a future where every hiring decision is based on skills, performance, and potential,
											not bias or guesswork. By combining real-time interviews with AI-driven insights, we aim to help
											organizations build stronger teams faster and with confidence.
										</p>
										<p className="max-w-4xl mx-auto leading-snug text-lg">
											We believe the right talent can transform organizations and aim to empower hiring teams with
											intelligent tools that uncover true potential and create equal opportunities for every candidate.
										</p>
										<p className="max-w-4xl mx-auto leading-snug text-lg">
											Our vision is to become the most trusted AI-powered interview platform globally, enabling
											companies to scale hiring while maintaining consistency, fairness, and quality in every interview.
										</p>
									</div>
								</div>
							</div>
							<div className="order-1 relative">
								<div
									className="left-0 top-5 absolute -z-50 w-full h-[800px] hidden lg:flex items-center justify-center bg-[radial-gradient(35%_35%_at_45%_35%,_#0E76BC_0%,_#F7F9FC_100%)] opacity-[0.18]"
									style={{ border: "red", width: "60rem", height: "50rem", margin: "-83px -181px" }}
								></div>
								<div className="overflow-hidden rounded-tl-3xl rounded-bl-3xl">
									<img
										alt="Architectural blueprint sketch"
										loading="lazy"
										width="800"
										height="600"
										decoding="async"
										className="w-[80%] h-auto object-fit"
										style={{ color: "transparent" }}
										src="/images/our-vision.webp"
									/>
								</div>
							</div>
						</div>

						{/* Values */}
						<div className="grid lg:grid-cols-2 gap-12 items-start">
							<div className="order-1 space-y-2 my-auto mt-20 lg:mt-0">
								<div>
									<div className="text-justify space-y-3 mb-9">
										{/* <h2 className="text-4xl md:text-5xl font-bold mb-3">AI-Powered Interview Creation</h2> */}
										<p className="max-w-4xl mx-auto leading-snug text-lg">
											We envision a future where every hiring decision is based on skills, performance, and potential,
											not bias or guesswork. By combining real-time interviews with AI-driven insights, we aim to help
											organizations build stronger teams faster and with confidence.
										</p>
										<p className="max-w-4xl mx-auto leading-snug text-lg">
											We believe the right talent can transform organizations and aim to empower hiring teams with
											intelligent tools that uncover true potential and create equal opportunities for every candidate.
										</p>
										<p className="max-w-4xl mx-auto leading-snug text-lg">
											Our vision is to become the most trusted AI-powered interview platform globally, enabling
											companies to scale hiring while maintaining consistency, fairness, and quality in every interview.
										</p>
									</div>
								</div>
							</div>
							<div className="order-2 relative mt-20 lg:mt-0">
								{/* Image */}
								<div className="overflow-hidden rounded-tr-3xl rounded-br-3xl w-[90%] lg:w-full flex justify-end">
									<img
										alt="Architectural blueprint sketch"
										loading="lazy"
										width="800"
										height="600"
										decoding="async"
										className="w-[80%] h-full object-cover"
										src="/images/our-values.webp"
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				<ContactForm />
			</div>
		</div>
	);
}
