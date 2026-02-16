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
			title: "Discovery & Research",
			description:
				"We begin by discussing your hiring goals, job roles, and skill requirements to understand what success looks like for your business."
		},
		{
			number: "02",
			title: "Tailored Hiring Solution",
			description:
				"Based on your needs, we configure a customized AI interview solution aligned with your roles, team size, and hiring volume."
		},
		{
			number: "03",
			title: "AI Interview Generation",
			description:
				"Job-specific interviews are automatically generated using AI, ensuring role-based, structured, and consistent assessments."
		},
		{
			number: "04",
			title: "Aptitude Test",
			description:
				"An optional aptitude test helps filter candidates early, ensuring only qualified applicants proceed to the AI interview stage."
		},
		{
			number: "05",
			title: "Real-Time AI Interview",
			description:
				"Shortlisted candidates complete a structured, time-based AI interview designed to assess real skills and job readiness."
		},
		{
			number: "06",
			title: "Automated Feedback",
			description:
				"After each interview, AI generates detailed feedback covering performance, skill alignment, and response quality."
		},
		{
			number: "07",
			title: "Reports & Insights",
			description:
				"Access overall hiring statistics, detailed candidate attempt reports, and comparison insights—all from a centralized dashboard."
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
							Transforming ideas into <span className="text-blue-600">impactful strategies</span> with precision and
							creativity
						</span>
					}
					subtitle="Our structured AI-powered methodology ensures consistent, role-specific assessments while delivering actionable insights for smarter hiring decisions."
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
						<h2 className="text-4xl md:text-5xl font-bold mt-3 relative mb-4">
							From Concept to Completion — A Proven{" "}
							<span
								className="relative inline-block pb-2"
								style={{
									backgroundImage: "url(/underline.svg)",
									backgroundRepeat: "no-repeat",
									backgroundPosition: "center bottom",
									backgroundSize: "100% auto"
								}}
							>
								Process
							</span>
						</h2>
						<p className="max-w-4xl mx-auto leading-snug text-lg">
							We guide every step of the hiring journey, from discovery to insightful reports, ensuring efficiency and
							quality in every candidate assessment.
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
