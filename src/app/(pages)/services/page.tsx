import AlternatingFeaturesGrid, { FeatureGridItem } from "@/app/components/AlternatingFeaturesGrid";
import ContactForm from "@/app/components/ContactForm";
import ContentPageHero from "@/app/components/ContentPageHero";
import InfoSection from "@/app/components/InfoSection";

const serviceItems: FeatureGridItem[] = [
	{
		feature: {
			title: "Candidate Screening",
			description:
				"Streamline early-stage hiring by automating candidate shortlisting through AI interviews and optional aptitude assessments, reducing manual effort and time-to-hire.",
			bullets: ["Automated shortlisting", "Reduce manual effort", "Improve time-to-hire"]
		},
		imageSrc: "/images/services/service-1.webp",
		imageAlt: "Candidate Screening",
		imageRoundedClass: "rounded-3xl",
		imageWidth: "w-[300px]",
		imageHeight: "h-[300px]",
		imagePosition: "left"
	},
	{
		feature: {
			title: "Real-Time AI Interview",
			description:
				"Enable candidates to complete secure, time-based interviews remotely, simulating real interview conditions without the need for scheduling.",
			bullets: ["Secure, remote interviews", "Simulate real interview conditions", "Flexible scheduling"]
		},
		imageSrc: "/images/services/service-2.webp",
		imageAlt: "Real-Time AI Interview",
		imageRoundedClass: "rounded-3xl",
		imageWidth: "w-[300px]",
		imageHeight: "h-[300px]",
		imagePosition: "right"
	},
	{
		feature: {
			title: "Aptitude & Pre-Assessment Testing",
			description:
				"Filter candidates effectively with optional aptitude tests before interviews, ensuring only qualified applicants move forward in the hiring process.",
			bullets: ["Optional pre-assessment", "Filter qualified candidates", "Reduce unfit applicants"]
		},
		imageSrc: "/images/services/service-3.webp",
		imageAlt: "Aptitude & Pre-Assessment Testing",
		imageRoundedClass: "rounded-3xl",
		imageWidth: "w-[300px]",
		imageHeight: "h-[300px]",
		imagePosition: "left"
	},
	{
		feature: {
			title: "AI-Based Feedback & Reporting",
			description:
				"Receive AI-generated feedback and comprehensive reporting on candidate performance, helping you make informed hiring decisions.",
			bullets: ["AI-generated feedback", "Comprehensive reporting", "Informed hiring decisions"]
		},
		imageSrc: "/images/services/service-4.webp",
		imageAlt: "AI-Based Feedback & Reporting",
		imageRoundedClass: "rounded-3xl",
		imageWidth: "w-[300px]",
		imageHeight: "h-[300px]",
		imagePosition: "right"
	},
	{
		feature: {
			title: "Platform Customization & Support",
			description:
				"Tailor the platform to your specific needs with customizable features and dedicated support to ensure seamless integration and optimal performance.",
			bullets: ["Customizable features", "Dedicated support", "Seamless integration"]
		},
		imageSrc: "/images/services/service-5.webp",
		imageAlt: "Platform Customization & Support",
		imageRoundedClass: "rounded-3xl",
		imageWidth: "w-[300px]",
		imageHeight: "h-[300px]",
		imagePosition: "left"
	}
];

export default function Services() {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
			<div className="space-y-32 lg:space-y-48 mb-48">
				<ContentPageHero
					badgeText="Services"
					title={
						<span>
							Transform Your Hiring with <span className="text-blue-600">AI-Powered Solutions</span>
						</span>
					}
					subtitle="We help companies design job-specific, AI-driven interviews based on role requirements, skills, and experience levels—ensuring structured and consistent candidate evaluation."
					ctaPrimary={{
						label: "Explore Our Services",
						type: "link",
						variant: "primary",
						href: "#services-section"
					}}
					ctaSecondary={{
						label: "Contact Us",
						type: "link",
						variant: "secondary",
						href: "#contact-section"
					}}
					heroImage={{
						src: "/images/our-services.jpg",
						alt: "AI Services",
						className: "w-80 max-w-full rounded-2xl shadow-lg object-cover"
					}}
				/>

				{/* Services Section - ALTERNATING IMAGE-TEXT GRID LIST */}
				<section id="services-section" className="px-5 space-y-32 scroll-mt-32">
					{/* Section Header */}
					<InfoSection
						tag="What We Offer"
						heading="Why Intelligent, Scalable Hiring Should Be Your Priority"
						description="Great hiring today isn't just about filling roles — it's about building a system that scales with your organization. Senastic AI ensures your recruitment process isn't a short-term fix, but a future-ready solution that adapts to growing teams, evolving job roles, and increasing hiring demands — all while maintaining fairness, consistency, and data-driven decision-making."
					/>

					{/* Service Section */}
					<AlternatingFeaturesGrid items={serviceItems} gapClass="gap-8" containerPadding="" />
				</section>

				<ContactForm />
			</div>
		</div>
	);
}
