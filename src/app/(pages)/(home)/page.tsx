import AlternatingFeaturesGrid, { FeatureGridItem } from "@/app/components/sections/AlternatingFeaturesGrid";
import Particles from "@/app/components/ui-animations/BackgroundParticles";
import ContactForm from "@/app/components/layout/ContactForm";
import Hero from "@/app/components/sections/MainHero";
import Testimonials from "@/app/components/sections/Testimonials";
import HeadingWithTag from "@/app/components/sections/HeadingWithTag";

const features: FeatureGridItem[] = [
	{
		feature: {
			title: "Intelligent Interview Design From Job Title to Deep-Dive Assessment",
			description:
				"Stop wasting hours on manual prep. Senastic AI uses Agentic Intelligence to build structured, consistent, and scalable interviews that evolve with your candidate's responses.",
			bullets: [
				<>
					<span className="font-semibold">Agent-Generated Personas:</span> Interviews built directly from job titles and
					internal JDs
				</>,
				<>
					<span className="font-semibold">Non-Linear Questioning:</span> AI-generated dynamic flows tailored to specific
					seniority
				</>,
				<>
					<span className="font-semibold">Adaptive Probing:</span> Real-time follow-ups that deep-dive into candidate
					technical claims
				</>,
				<>
					<span className="font-semibold">Competency Mapping:</span> Scientific assessment of both hard skills and
					cultural fit
				</>
			]
		},
		imageSrc: "/images/animated-icons/brain-gears.gif",
		imageAlt: "AI Powered Interview Creation",
		imageRoundedClass: "rounded-3xl",
		imageWidth: "w-[50%]",
		imagePosition: "right",
		overlayGradient: "radial-gradient(35% 35% at 50% 50%, #0E76BC 0%, #F7F9FC 100%)"
	},
	{
		feature: {
			title: "Next-Gen Candidate Experience Human-Like Interaction. Machine-Like Precision.",
			description:
				"Build a seamless bridge between talent and opportunity. Senastic delivers a secure, professional video environment where Agentic Intelligence simulates your best interviewers, creating a fair, engaging, and deeply technical experience at scale.",
			bullets: [
				<>
					<span className="font-semibold">Automated Invites:</span> Go from application to interview in seconds
				</>,
				<>
					<span className="font-semibold">24/7 Remote Access:</span> Candidates interview on their schedule, anywhere in
					the world
				</>,
				<>
					<span className="font-semibold">Real-Time Probing:</span> Dynamic follow-ups that catch inconsistencies and
					verify skills
				</>,
				<>
					<span className="font-semibold">Frictionless Interface:</span> A candidate-first journey with clear,
					intelligent guidance
				</>
			]
		},
		imageSrc: "/images/animated-icons/chat-bubbles.gif",
		imageAlt: "Automated Candidate Interview Experience",
		imageRoundedClass: "rounded-3xl",
		imageWidth: "w-[40%]",
		imagePosition: "left",
		overlayGradient: "radial-gradient(35% 35% at 45% 35%, #0E76BC 0%, #F7F9FC 100%)"
	},
	{
		feature: {
			title: "Smart Evaluation and Insights Eliminate Bias. Optimize Decisions",
			description:
				"Senastic's Autonomous Agents analyze sentiment, communication, and technical expertise to deliver the industry's most detailed candidate insights. We replace guesswork with a centralized dashboard of evidence, ensuring your next hire is the right one.",
			bullets: [
				<>
					<span className="font-semibold">Detailed Agent-Generated Reports:</span> Integrated with video evidence for
					every answer{" "}
				</>,
				<>
					<span className="font-semibold">Standardized Benchmarking:</span> Fair, consistent scoring for every
					applicant{" "}
				</>,
				<>
					<span className="font-semibold">Precision Insights:</span> High-fidelity data designed to accelerate your
					hiring workflow{" "}
				</>
			]
		},
		imageSrc: "/images/animated-icons/reports.gif",
		imageAlt: "Smart Evaluation and Reporting",
		imageRoundedClass: "rounded-3xl",
		imageWidth: "w-[50%]",
		imagePosition: "right",
		overlayGradient: "radial-gradient(35% 35% at 45% 35%, #0E76BC 0%, #F7F9FC 100%)"
	}
];

export default function Home() {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
			{/* Spacing for mobile header */}
			<div className="h-[175px] lg:hidden"></div>

			<div className="absolute top-0 left-0 h-full w-full -z-999">
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

			<div className="space-y-32 mb-48">
				<Hero
					preTitle="Secure the Optimal Hire"
					title="Autonomous Multi-Agent Systems for "
					underlinedText="Precise, Human-Like Interviewing."
					description="Stop the resource drain. Deploy dynamic AI agents that adapt in real-time to secure your optimal hire in days, not weeks."
					ctaButtons={[
						{
							label: "Explore our Product",
							href: "/product",
							type: "link",
							variant: "primary"
						},
						{
							label: "Get in Touch",
							href: "#contact-section",
							variant: "secondary"
						}
					]}
				/>

				<section className="px-4 py-16 mb-0">
					<div className="space-y-16">
						<HeadingWithTag
							tag="What We Do"
							heading="Scaling Intelligence Across Your Recruitment "
							underlinedText="Pipeline"
							description="We replace the manual resource drain with a Dynamic Multi-Agent Conversational System that listens, reasons, and probes like your top experts. Senastic AI delivers a future-ready infrastructure that adapts to evolving roles, ensuring 100% consistency and data-driven precision. Secure your Optimal Hire in days, not weeks."
						/>

						<AlternatingFeaturesGrid items={features} />
					</div>
				</section>

				{/* Impact Numbers Section */}
				<section className="">
					<div className="px-4">
						<HeadingWithTag
							tag="Our Impact"
							heading="Eliminating the Resource Drain."
							description="Senastic AI streamlines the path to the Optimal Hire through real-time, adaptive intelligence. Our Multi-Agent architecture bridges the expertise gap, automating deep-dive interviews and generating actionable insights that eliminate subjective bias. We don't just fill roles; we build your strongest team through precision-engineered technology."
						/>
						<div className="relative pt-20 overflow-hidden">
							{/* Metrics Content */}
							<div className="relative grid gap-16 md:grid-cols-3 text-center max-w-6xl mx-auto px-6">
								{/* 70% */}
								<div className="space-y-4">
									<h3 className="text-5xl md:text-6xl font-bold text-[#283891]">70%</h3>
									<p className="text-xl font-semibold text-[#0E76BC]">Faster Hiring</p>
									<p className="text-gray-600 leading-relaxed text-sm max-w-xs mx-auto">
										Reduce screening and interview time with AI-powered, real-time interviews — so your team focuses
										only on the best candidates.
									</p>
								</div>

								{/* 5X */}
								<div className="space-y-4">
									<h3 className="text-5xl md:text-6xl font-bold text-[#283891]">5X</h3>
									<p className="text-xl font-semibold text-[#0E76BC]">Deeper Insights</p>
									<p className="text-gray-600 leading-relaxed text-sm max-w-xs mx-auto">
										Gain structured, role-specific evaluations that uncover strengths, communication skills, and real
										competency beyond resumes.
									</p>
								</div>

								{/* 100% */}
								<div className="space-y-4">
									<h3 className="text-5xl md:text-6xl font-bold text-[#283891]">100%</h3>
									<p className="text-xl font-semibold text-[#0E76BC]">Unbiased Evaluation</p>
									<p className="text-gray-600 leading-relaxed text-sm max-w-xs mx-auto">
										Every candidate is assessed using the same role-specific criteria, helping reduce bias and ensure
										consistent hiring decisions.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* <section className="px-4 py-16"> */}
				<Testimonials />
				{/* </section> */}

				<ContactForm />
			</div>
		</div>
	);
}
