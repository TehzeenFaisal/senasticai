import ContactForm from "@/app/components/layout/ContactForm";
import ContentPageHero from "@/app/components/sections/ContentPageHero";
import ProcessSteps, { ProcessStep } from "@/app/components/sections/ProcessSteps";

export const metadata = {
	title: "Our Process",
	description:
		"Learn more how SenasticAI works from hiring need to AI interview generation, candidate assessment, and insightful reports for smarter hiring decisions.",
	keywords: []
};

export default function OurProcess() {
	const processSteps: ProcessStep[] = [
		{
			number: "01",
			title: "Discovery & Rubric Alignment",
			description:
				"We collaborate to define your 'Ideal Candidate' profile, translating job roles into high-fidelity evaluation rubrics that guide the AI’s logic."
		},
		{
			number: "02",
			title: "Multi-Agent Configuration",
			description:
				"Our team configures a bespoke ecosystem of Interviewer and Evaluation agents tailored to your specific technical depth and hiring volume."
		},
		{
			number: "03",
			title: "Dynamic Interview Generation",
			description:
				"The system automatically generates unique, role-specific sessions to eliminate question leakage and ensure a rigorous, standardized assessment."
		},
		{
			number: "04",
			title: "Top-of-Funnel Filtering",
			description:
				"Deploy an optional aptitude and logic assessment to filter for high-potential applicants before they engage with the conversational AI."
		},
		{
			number: "05",
			title: "Agentic Conversational Interview",
			description:
				"Shortlisted candidates complete a low-latency, adaptive interview where the AI probes for deep technical, soft-skill, and cultural alignment."
		},
		{
			number: "06",
			title: "Multimodal Evidence Synthesis",
			description:
				"The system synthesizes session data into objective scores, backed by real-time sentiment analysis and recorded video evidence for every insight."
		},
		{
			number: "07",
			title: "Strategic Talent Insights",
			description:
				"Access stack-ranked leaderboards and comprehensive candidate performance reports through a centralized, intelligence-driven dashboard."
		}
	];

	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
			<div className="space-y-32 lg:space-y-48 mb-48">
				{/* Hero Section */}
				<ContentPageHero
					badgeText="Our Process"
					title={
						<span>
							Transforming Hiring Intent into <span className="text-blue-600">Data-Driven Outcomes</span>
						</span>
					}
					subtitle="Deploy a structured, agentic methodology that ensures consistent, role-specific evaluation across thousands of candidates while surfacing actionable intelligence for smarter talent acquisition."
					ctaPrimary={{
						label: "Explore Our Process",
						type: "link",
						variant: "primary",
						href: "#process-section"
					}}
					ctaSecondary={{
						label: "Contact Us",
						type: "link",
						variant: "secondary",
						href: "#contact-section"
					}}
					heroImage={{
						src: "/images/our-process.jpg",
						alt: "Our Process",
						className: "w-80 max-w-full rounded-2xl shadow-lg object-cover"
					}}
				/>

				{/* Process / Methodology Section */}
				<section id="process-section" className="max-w-7xl mx-auto px-4 mt-16 scroll-mt-32">
					<div className="text-center mb-12">
						<span
							className="inline-block py-2 px-6 mb-4 text-white font-medium rounded-full text-lg"
							style={{ background: "linear-gradient(to bottom, #0E76BC 0%, #283891 100%)" }}
						>
							Our Methodology
						</span>
						<h2 className="text-4xl md:text-5xl font-bold mt-3 relative mb-4">From Concept to Completion</h2>
						<p className="max-w-4xl mx-auto leading-snug text-lg">
							We engineer every stage of the hiring journey, from rubric alignment to multimodal evidence, ensuring
							high-fidelity assessments and data-driven talent acquisition.
						</p>
					</div>

					{/* Interactive Process Steps */}
					<ProcessSteps steps={processSteps} autoProgressDelay={3000} />
				</section>

				<ContactForm />
			</div>
		</div>
	);
}
