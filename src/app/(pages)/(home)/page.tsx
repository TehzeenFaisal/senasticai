import AlternatingFeaturesGrid, { FeatureGridItem } from "@/app/components/sections/AlternatingFeaturesGrid";
import Particles from "@/app/components/ui-animations/BackgroundParticles";
import ContactForm from "@/app/components/layout/ContactForm";
import Hero from "@/app/components/sections/MainHero";
import Testimonials from "@/app/components/sections/Testimonials";
import HeadingWithTag from "@/app/components/sections/HeadingWithTag";

const features: FeatureGridItem[] = [
	{
		feature: {
			title: "AI-Powered Interview Creation",
			description:
				"Designed with intelligent automation at its core, Senastic enables hiring managers to create complete, role-specific interviews in minutes. The platform dynamically generates adaptive questions, integrates custom inputs effortlessly, and ensures every interview is structured, consistent, and scalable across roles and departments.",
			bullets: [
				"Create interviews directly from job titles",
				"AI-generated dynamic questions tailored to the role",
				"Dynamic follow-ups based on candidate responses",
				"Skill-based and competency-focused assessment"
			]
		},
		imageSrc: "/images/animated-icons/brain-gears.gif",
		imageAlt: "AI Powered Interview Creation",
		imageRoundedClass: "rounded-3xl",
		imageWidth: "w-[50%]",
		imagePosition: "right",
		overlayGradient: "radial-gradient(35% 35% at 45% 35%, #0E76BC 0%, #F7F9FC 100%)"
	},
	{
		feature: {
			title: "Automated Candidate Interview Experience",
			description:
				"Built for seamless scalability, Senastic delivers real-time, human-like AI interviews accessible from anywhere. The platform ensures secure, high-performance video sessions while dynamically adapting question flow based on candidate responses — creating a fair and engaging experience at scale.",
			bullets: [
				"Instantly send interview invitations",
				"Remotely attempt interviews anytime",
				"Real-time, monitored interview sessions",
				"Candidate-friendly interface with clear instructions",
				"Scalable for high-volume hiring"
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
			title: "Smart Evaluation & Reporting",
			description:
				"Engineered for data-driven hiring, Senastic transforms interview conversations into structured, actionable insights. From competency analysis to communication and sentiment evaluation, the platform provides reliable, evidence-backed reports that help reduce bias, optimize decision-making, and improve long-term hiring outcomes.",
			bullets: [
				"Detailed AI-generated interview reports with recorded video evidence",
				"Objective, unbiased candidate scoring",
				"Data-driven insights to support hiring decisions"
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
					preTitle="Hire the Right Talent"
					title="AI-Powered Human-Like Interviews, "
					underlinedText="Delivered by Agentic Intelligence"
					description="We Deliver Cutting-Edge Products and Services to Achieve 10X Better Results for Your Business."
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
							heading="Why Intelligent, Scalable Hiring Should Be Your "
							underlinedText="Priority"
							description="Great hiring today isn't just about filling roles — it's about building a system that scales with your organization. Senastic AI ensures your recruitment process isn't a short-term fix, but a future-ready solution that adapts to growing teams, evolving job roles, and increasing hiring demands — all while maintaining fairness, consistency, and data-driven decision-making."
						/>

						<AlternatingFeaturesGrid items={features} />
					</div>
				</section>

				{/* Impact Numbers Section */}
				<section className="">
					<div className="px-4">
						<HeadingWithTag
							tag="Our Impact"
							heading="Simplifying  Hiring by Delivering Seamless, Real-Time AI Interviews "
							description="Senastic AI helps organizations hire smarter with intelligent technology. Our platform streamlines the
									entire recruitment process through adaptive, real-time AI interviews. We empower hiring teams with
									automated interview creation, dynamic multi-agent conversations, and detailed performance reports;
									making hiring faster, fairer, and more data-driven."
							underlinedText="Anywhere."
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
