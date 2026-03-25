import Particles from "@/app/components/ui-animations/BackgroundParticles";
import ContactForm from "@/app/components/layout/ContactForm";
import ContentPageHero from "@/app/components/sections/ContentPageHero";
import Image from "next/image";

export const metadata = {
	title: "About Us",
	description:
		"Learn more about us and our mission for the future of talent with SenasticAI - Your AI-Powered Interview Platform",
	keywords: []
};

export default function AboutUs() {
	return (
		<div>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative">
				<div className="space-y-32 lg:space-y-48 mb-48">
					{/* Hero Section */}
					<ContentPageHero
						badgeText="About Us"
						title={
							<span>
								Reimagining the <span className="text-blue-600">Interview.</span>
							</span>
						}
						subtitle="Recruitment shouldn't be a resource drain. We founded Senastic to close the 'Expertise Gap' that stops great companies from finding elite talent. By replacing static, scripted questions with Agentic Intelligence, we've built a system that thinks and adapts in real-time. Our mission is simple: 100% objectivity, zero bias, and the Optimal Hire every single time."
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
							className: "w-80 max-w-full rounded-2xl shadow-lg object-cover mx-auto"
						}}
					/>

					{/* Vision Section */}
					<section id="vision-section" className="scroll-mt-32">
						<div className="px-5 space-y-16">
							<div className="text-center mb-6">
								<span
									className="py-2 px-8 text-white rounded-full text-lg font-medium inline-block"
									style={{
										background: "linear-gradient(to bottom, #0E76BC 0%, #283891 100%)"
									}}
								>
									Our Vision and Values
								</span>
							</div>

							<div className="text-center">
								<h2 className="text-4xl md:text-5xl font-bold mb-3">
									To Architect the Future of Autonomous Recruitment
								</h2>
							</div>

							{/* Vision */}
							<div className="grid lg:grid-cols-2 gap-12 items-start">
								<div className="order-1 lg:order-2">
									<div className="w-full mb-6 lg:mb-0">
										<Image
											alt="Our Vision"
											src="/images/our-values.webp"
											className="w-[70%] rounded-3xl object-cover mx-auto"
											width={500}
											height={500}
											loading="lazy"
										/>
									</div>
								</div>
								<div className="order-2 lg:order-1 space-y-4 text-justify">
									<div className="mx-auto max-w-[500px]">
										<p className="leading-snug text-lg">
											We are engineering a global hiring landscape that is inherently meritocratic, transparent, and
											entirely data-driven. By replacing static, outdated screening with our Multi-Agent Architecture,
											we empower organizations to bridge the expertise gap through real-time, autonomous probing. We
											transform the manual resource drain into a high-fidelity conversational experience, ensuring every
											selection is backed by verifiable evidence and optimized for long-term strategic success.
										</p>
									</div>
								</div>
							</div>

							{/* Values */}
							{/* <div className="grid lg:grid-cols-2 gap-12 items-start">
								<div className="order-1">
									<div className="w-full mb-6 lg:mb-0">
										<Image
											alt="Our Values"
											src="/images/our-values.webp"
											className="w-[60%] rounded-3xl object-cover mx-auto"
											width={500}
											height={500}
											loading="lazy"
										/>
									</div>
								</div>
								<div className="order-2 space-y-4 text-justify">
									<p className="max-w-4xl mx-auto leading-snug text-lg">
										We are engineering a global hiring landscape that is inherently meritocratic, transparent, and
										entirely data-driven. By replacing static, outdated screening with our Multi-Agent Architecture, we
										empower organizations to bridge the expertise gap through real-time, autonomous probing. We
										transform the manual resource drain into a high-fidelity conversational experience, ensuring every
										selection is backed by verifiable evidence and optimized for long-term strategic success.
									</p>
								</div>
							</div> */}
						</div>
					</section>

					<ContactForm />
				</div>
			</div>
		</div>
	);
}
