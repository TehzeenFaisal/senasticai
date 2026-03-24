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
			{/* Background Particles */}
			<div className="absolute top-0 left-0 h-full w-full -z-50">
				<Particles
					count={75}
					color="200,200,255"
					direction="random"
					fadeEdges="none"
					className="w-full h-full"
					minRadius={3}
					maxRadius={5}
					minOpacity={0.3}
					maxOpacity={0.6}
				/>
			</div>
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
											src="/images/our-vision.webp"
											className="w-[80%] rounded-3xl object-cover mx-auto"
											width={500}
											height={500}
											loading="lazy"
										/>
									</div>
								</div>
								<div className="order-2 lg:order-1 space-y-4 text-justify">
									<p className="max-w-4xl mx-auto leading-snug text-lg">
										We envision a global hiring landscape that is inherently transparent, strictly meritocratic, and
										entirely data-driven. By moving beyond the limitations of "static" screening tools that rely on
										outdated question banks, we provide Agentic Intelligence that proactively listens, reasons, and
										probes in real-time. This dynamic, non-linear approach allows organizations to bypass the
										traditional manual bottleneck and identify their Optimal Hire in days, not weeks, ensuring that
										every selection is backed by highfidelity conversational data.
									</p>
									<p className="max-w-4xl mx-auto leading-snug text-lg">
										We believe that elite, world-class teams are built on verifiable evidence and deep-dive
										interactions, rather than static resumes or super ficial impressions. We empower hiring managers
										with autonomous systems that e ffectively bridge the Expertise Gap, allowing them to uncover a
										candidate's true technical capabilities and cultural fit through a consistent, highfidelity
										experience. By standardizing the interview process, we ensure that every applicant is evaluated
										through a sophisticated lens that remains rigorous, fair, and objective across every department and
										role.
									</p>
								</div>
							</div>

							{/* Values */}
							<div className="grid lg:grid-cols-2 gap-12 items-start">
								<div className="order-1">
									<div className="w-full mb-6 lg:mb-0">
										<Image
											alt="Our Values"
											src="/images/our-values.webp"
											className="w-[80%] rounded-3xl object-cover mx-auto"
											width={500}
											height={500}
											loading="lazy"
										/>
									</div>
								</div>
								<div className="order-2 space-y-4 text-justify">
									<p className="max-w-4xl mx-auto leading-snug text-lg">
										Our ultimate vision is to serve as the primary engine for global talent acquisition and evaluation,
										setting a new benchmark for how companies interact with talent. We help businesses scale their
										excellence by ensuring that every interview is transformed from a manual resource drain into an
										objective, sophisticated, and highperformance conversation. Through our Multi-Agent Architecture, we
										are committed to building a future where organizations can grow with con fidence, knowing their
										hiring outcomes are optimized for long-term success and professional integrity.
									</p>
								</div>
							</div>
						</div>
					</section>

					<ContactForm />
				</div>
			</div>
		</div>
	);
}
