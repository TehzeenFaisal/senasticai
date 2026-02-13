import ArrowListItem from "@/app/components/ArrowListItem";
import ContactForm from "@/app/components/ContactForm";
import CTAButton from "@/app/components/CTAButton";
import InfoSection from "@/app/components/InfoSection";
import ScatteringDotsCanvas from "@/app/components/ScatteringDotsCanvas";

const modules = [
	{
		title: "Interview Setup Module",
		description: "Built for recruiters, hiring managers, talent acquisition teams, and HR professionals.",
		iconImage: "/images/icons/settings.png"
	},
	{
		title: "Dashboard Module",
		description: "Real-time insights and actionable analytics for smarter decision-making.",
		iconImage: "/images/icons/dashboard.png"
	},
	{
		title: "Candidate Module",
		description: "Manage your candidate pipeline with streamlined tools and insights.",
		iconImage: "/images/icons/candidate-approved.png"
	},
	{
		title: "Evaluation Module",
		description: "Align and monitor assessments with comprehensive evaluation tools.",
		iconImage: "/images/icons/evaluation-analysis.png"
	},
	{
		title: "AI Interview Module",
		description: "Smart interview conversations that adapt to candidate responses in real-time.",
		iconImage: "/images/icons/online-interview.png"
	},
	{
		title: "Hiring Module",
		description: "Comprehensive visibility into your recruitment performance.",
		iconImage: "/images/icons/hiring.png"
	},
	{
		title: "Recording Module",
		description: "Empowering hiring teams with video-recorded interview sessions for review.",
		iconImage: "/images/icons/video-recording.png"
	},
	{
		title: "Reports Module",
		description:
			"Generate detailed candidate evaluations and performance reports with benchmarks tailored to your organization's unique needs.",
		iconImage: "/images/icons/report.png"
	}
];

const featuresCardsItems = [
	{
		topIcon: "/images/animated-icons/interview-scheduling.gif",
		topIconAlt: "Interview scheduling",
		title: "Effortless Interview Creation and Scheduling",
		description:
			"Create intelligent interviews in minutes by simply defining the role title and let our multi-agent AI dynamically generate relevant questions, adapt follow-ups in real-time, and evaluate candidates based on their actual responses.",
		cardImage: "/images/product-ui/interview-create.png",
		cardImageAlt: "Interview creation and scheduling"
	},
	{
		topIcon: "/images/animated-icons/online-interview.gif",
		topIconAlt: "Natural Interviews",
		title: "Natural Interviews That Candidates Actually Enjoy",
		description:
			"Senastic's advanced multi-agent AI creates authentic conversations that feel natural and engaging, not just a script being followed.",
		cardImage: "/images/product-ui/interview-start-screen.png",
		cardImageAlt: "Online interview"
	},
	{
		topIcon: "/images/animated-icons/clipboard-check-list.gif",
		topIconAlt: "Keep track of candidates",
		title: "Keep Track of Candidates' Status",
		description:
			"Our intuitive platform allows you to monitor the progress of candidates and track their performance accurately. Choose who proceeds to the next stage based on data-driven insights.",
		cardImage: "/images/product-ui/candidates-listing.png",
		cardImageAlt: "Keep track of candidates"
	}
];

export default function Product() {
	return (
		<div>
			{/* Background gradient behind hero*/}
			<div
				className="absolute left-0 top-2 -z-50 w-full h-screen flex items-center justify-center opacity-[0.18]"
				style={{
					background: "radial-gradient(60% 45% at 50% 50%, #0E76BC 0%, #FFFFFF 100%)"
				}}
			></div>

			{/* Background grid overlay */}
			<div className="pointer-events-none">
				<div
					className="absolute -left-32 inset-0 -z-10"
					style={{
						backgroundImage: "url(/images/bg-grid.svg)",
						backgroundSize: "contain",
						backgroundBlendMode: "overlay",
						maskImage: "radial-gradient(400px 350px at 583px 380px, rgb(255, 255, 255), 100%, transparent)"
					}}
				></div>
			</div>

			{/* Hero Section */}
			<section className="w-full">
				<div className="relative py-12 sm:py-16 lg:py-20 xl:pt-20 xl:pb-44">
					{/* Full screen image */}
					<div className="absolute inset-0 r-0 hidden lg:block translate-y-[5rem]">
						<img
							alt="Hero Background"
							width="1920"
							height="1080"
							decoding="async"
							data-nimg="1"
							className="object-cover object-right-bottom w-full h-full"
							style={{ color: "transparent" }}
							src="/images/hero-background-transparent.webp"
						/>
					</div>

					<div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
						<div className="max-w-6xl mx-auto text-center lg:max-w-md xl:max-w-xl lg:text-left lg:mx-0">
							<h1
								id="hero-heading"
								className="text-6xl md:text-[4rem] font-bold text-gray-900 max-w-4xl mx-auto mb-4 mt-0 !leading-[1.2]"
							>
								<span className="relative">
									SenasticAI
									{/* Blue Underline */}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className=" relative -top-3 left-[5.5rem] max-w-[10.5rem] sm:max-w-[4rem] md:max-w-[8rem] lg:max-w-[10.5rem] lg:left-0 "
										height="27"
										viewBox="0 0 772 27"
										fill="none"
									>
										<path
											d="M761.572 6.5729C762.49 6.64177 764.514 7.35023 764.808 7.62574C766.797 9.44607 748.213 9.07217 743.128 9.12136C744.117 9.72158 744.187 12.6243 744.752 12.7522C745.67 12.9687 763.678 12.7227 768.869 14.7398C772.894 16.3141 771.812 18.9905 772 20.7617C765.161 20.6239 756.864 20.1418 750.178 20.0729C743.964 20.004 733.006 20.004 726.344 20.0139C715.927 20.0335 705.581 20.6928 695.023 20.3976L704.64 19.3152C688.679 19.0496 673.084 19.8072 657.312 20.0335C616.305 20.6239 574.486 20.9978 533.891 21.1454C455.902 21.4308 378.255 20.4763 300.443 21.1356C301.043 21.7948 303.598 21.8145 305.999 21.8736C330.445 22.4935 361.189 22.0113 386.318 22.2081C420.357 22.4836 454.784 22.9854 488.835 23.3298C564.117 22.1097 648.991 24.9042 723.142 23.3298C732.476 23.133 745.776 20.9388 749.189 24.3039C753.886 28.9286 734.324 26.2817 724.508 25.9078C698.001 24.9042 649.026 25.7504 620.484 25.8881C586.609 26.0456 546.45 27.1574 514.67 26.6458C501.747 26.4391 487.552 26.5769 472.922 26.5769C454.561 26.5769 386.694 26.9213 373.747 25.8488C371.923 25.7012 373.076 25.0026 371.817 25.1305C370.558 25.2584 369.863 25.7897 366.956 25.8586C362.695 25.957 352.867 25.4945 347.771 25.465C318.016 25.3076 286.931 25.1502 256.341 25.1305C184.531 25.0813 117.03 22.9756 46.1858 22.2278C34.2627 22.0999 11.1227 23.6742 11.6405 19.5022C11.8877 17.5539 17.5844 17.613 25.3645 17.4949C42.4311 17.2391 62.5932 18.3411 79.8129 18.5969L183.331 18.9413L180.965 18.2132L137.698 17.4654C100.728 16.5995 65.0061 13.8542 28.5306 12.7522C22.6809 12.5751 15.7483 13.0572 10.1811 12.5456C8.83927 12.4176 1.18871 11.0007 0.741447 10.6662C-5.35546 6.12027 28.4835 8.81633 30.8611 8.34403C31.5555 8.20628 30.9082 6.8976 33.6271 6.51386C36.346 6.13011 41.0422 6.35642 43.7729 5.99236C45.4442 5.76604 46.0563 5.02807 47.7747 4.7132C64.4176 1.70227 70.9971 2.83383 91.1122 2.53864C178.505 1.25948 268.158 1.24964 355.715 1.07253C487.905 0.80686 620.177 1.78099 752.014 -0.0295105C758.5 0.147603 754.168 2.53864 751.955 2.53864H725.484C725.849 3.34549 728.627 4.33929 726.367 5.10679C723.825 5.96284 711.878 5.46101 709.442 6.54338H761.572V6.5729ZM451.206 3.66036C450.594 3.01094 448.04 2.94206 445.58 2.91254C438.942 2.82399 428.855 3.28645 421.628 3.30613C390.614 3.39469 359.341 3.58164 328.574 3.6702C297.807 3.75875 266.945 3.42421 236.261 3.83747C236.284 4.6148 294.052 4.41801 299.713 4.39833C334.682 4.29994 370.487 3.85715 405.432 3.64068C420.663 3.54228 435.999 3.74892 451.206 3.65052V3.66036ZM701.415 4.03427C680.334 4.15234 659.089 3.87683 637.997 4.01459C605.43 4.23106 572.709 5.07727 540.2 5.48069C532.008 5.57909 522.298 5.25438 514.529 5.48069C512.187 5.54957 509.551 5.7562 512.164 6.20883C574.192 5.74636 637.727 7.35023 699.002 4.74272C701.615 4.63448 701.78 4.97887 701.415 4.02443V4.03427ZM685.384 8.039C661.349 7.69461 637.786 8.31451 613.987 8.7573C608.678 8.85569 603.299 8.66874 597.991 8.7573C595.813 8.79666 588.281 8.93441 587.551 9.47559L679.828 8.76714L685.384 8.02916V8.039ZM667.729 13.5C632.395 13.5295 597.885 13.6082 562.61 13.8444C438.259 14.6808 321.323 14.7595 196.902 13.5098C193.63 13.4803 146.49 12.3783 146.432 12.949C158.131 13.8542 173.079 13.6181 185.732 13.8641C340.767 16.7963 493.896 17.9574 649.273 14.2183L667.729 13.5Z"
											fill="#0B80FF"
										></path>
									</svg>
									{/* Scattering Dots animation */}
									<div className="w-32 h-6 relative -top-4">
										<div className="opacity-0 ml-24 lg:ml-0 h-10 w-40" style={{ opacity: 1 }}>
											<div className="h-full w-full">
												<ScatteringDotsCanvas />
											</div>
										</div>
									</div>
								</span>
							</h1>
							<h6 className="text-xl font-bold text-black sm:text-4xl xl:text-2xl xl:leading-tight">
								Transform Your Hiring with Intelligent, Scalable AI Interviews
							</h6>
							<p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:max-w-md xl:pr-0 lg:pr-16">
								Senastic AI is your all-in-one AI Interview & Assessment platform designed to streamline recruitment,
								reduce bias, and deliver data-driven hiring decisions at scale.
							</p>
							<div className="grid grid-cols-1 justify-center lg:justify-start w-fit mx-auto lg:mx-0">
								<ArrowListItem text="AI-Powered Interview Creation" />
								<ArrowListItem text="Automated Candidate Interview Experience" />
								<ArrowListItem text="Smart Evaluation & Reporting" />
								<ArrowListItem text="Integrated Aptitude Testing" />
							</div>

							{/* CTA Button */}
							<div className="flex items-center justify-center mt-8 space-x-5 xl:mt-16 lg:justify-start">
								<CTAButton label="Book a Demo" type="button" variant="primary" />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="relative py-12 sm:py-16 lg:py-20 my-12 lg:my-36">
				<div className="text-center justify-center mb-9">
					<h2 className="md:text-6xl !-mt-20 !mb-16 text-4xl md:text-5xl font-bold mb-3 relative">
						Say hello to{" "}
						<span
							className="relative inline-block pb-2"
							style={{
								backgroundImage: "url(/images/underline.svg)",
								backgroundRepeat: "no-repeat",
								backgroundPosition: "center bottom",
								backgroundSize: "100% auto"
							}}
						>
							SenasticAI
						</span>
					</h2>
				</div>
				<div className="hidden lg:left-72 lg:-top-28 absolute -z-50 w-full h-screen lg:flex items-center justify-center bg-[radial-gradient(40.21%_50%_at_50%_50%,_#0E76BC_0%,_#FFF_100%)] opacity-[0.20]"></div>
				<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:items-center gap-y-8 lg:grid-cols-2 md:gap-y-16 lg:gap-x-16">
						<div>
							<div className="text-left">
								<h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl mb-4">
									Role-Based Interview Mapping and Flexible Assessment Control
								</h2>
								<ArrowListItem text="Seamlessly assign interviews, aptitude tests, and candidates to the right roles with precision." />
								<ArrowListItem text="Manage role-based and contextual interview data with intuitive tools." />
							</div>

							{/* Lines divider svg */}
							<svg
								className="w-auto h-4 mx-auto mt-4 text-gray-300 sm:mt-6 lg:mx-0"
								viewBox="0 0 172 16"
								fill="none"
								stroke="currentColor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"></line>
								<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"></line>
								<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)"></line>
								<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)"></line>
								<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)"></line>
								<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)"></line>
								<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)"></line>
								<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)"></line>
								<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)"></line>
								<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)"></line>
								<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)"></line>
								<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)"></line>
								<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)"></line>
								<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)"></line>
								<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)"></line>
								<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)"></line>
								<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)"></line>
								<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)"></line>
								<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)"></line>
								<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)"></line>
								<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)"></line>
								<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)"></line>
								<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)"></line>
								<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)"></line>
							</svg>

							<div className="relative mt-8 sm:mt-12">
								<div className="absolute inset-0">
									<div
										className="w-full h-full max-w-md mx-auto lg:mx-0 opacity-30 blur-lg filter"
										style={{
											background:
												"linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #0E76BC 99.34%)"
										}}
									></div>
								</div>
								<div className="relative flex flex-col items-center sm:space-x-8 lg:justify-start sm:justify-center sm:flex-row">
									<div className="flex items-center">
										<p className="text-5xl font-bold text-gray-900">1000+</p>
										<p className="ml-5 text-sm text-gray-900">
											Interviews <br /> Conducted
										</p>
									</div>
									<div className="flex items-center mt-5 sm:mt-0 ">
										<p className="text-5xl font-bold text-gray-900">2000+</p>
										<p className="ml-5 text-sm text-gray-900">
											Candidates <br /> Assessed
										</p>
									</div>
								</div>
							</div>
						</div>
						<div>
							<img
								alt="Interviews UI Screen"
								loading="lazy"
								width="1920"
								height="1080"
								decoding="async"
								data-nimg="1"
								style={{ color: "transparent" }}
								src="/images/product-ui/interviews.png"
							/>
						</div>
					</div>
				</div>
				<div className="xl:px-32 my-32">
					<div className="relative w-full h-48 sm:h-80 md:h-96 lg:h-[32rem]">
						<img
							alt="UI Screens Mockups"
							width="1920"
							height="1080"
							decoding="async"
							data-nimg="1"
							style={{ color: "transparent" }}
							src="/images/mockups.webp"
						/>
					</div>
				</div>
				<div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl lg:mt-64 mb-24 lg:mb-0">
					<div className="max-w-5xl mx-auto text-center">
						<h2 className="mt-6 text-2xl font-semibold tracking-tight text-gray-900 lg:mt-8 sm:text-3xl lg:text-4xl">
							Highly efficient AI Interview Management platform that helps organizations streamline recruitment and
							evaluate candidates accurately.
						</h2>
						<div className="flex justify-center mt-12 sm:mt-16">
							<div className="flex flex-col items-center justify-center flex-1 pt-8 space-y-6 border-t border-gray-200 lg:inline-flex md:flex-row md:space-y-0 lg:space-x-12 md:space-x-10">
								<div className="flex items-center">
									<svg
										className="w-6 h-6 text-black"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="2"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
										></path>
									</svg>
									<h3 className="ml-2 text-base font-medium text-gray-900 lg:text-lg">Seamless Interview Management</h3>
								</div>
								<div className="flex items-center">
									<svg
										className="w-6 h-6 text-black"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="2"
									>
										<path
											stroke="currentColor"
											strokeLinecap="square"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M7 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h1m4-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm7.441 1.559a1.907 1.907 0 0 1 0 2.698l-6.069 6.069L10 19l.674-3.372 6.07-6.07a1.907 1.907 0 0 1 2.697 0Z"
										/>
									</svg>
									<h3 className="ml-2 text-base font-medium text-gray-900 lg:text-lg">Simple Candidate Interaction</h3>
								</div>
								<div className="flex items-center">
									<svg
										className="w-6 h-6 text-black"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="2"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
										></path>
									</svg>
									<h3 className="ml-2 text-base font-medium text-gray-900 lg:text-lg">Smart Evaluation & Reporting</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features cards */}
			<section className="relative my-12 lg:my-36 !-mt-32">
				<div className="left-0 -top-24 absolute -z-50 w-full h-screen flex items-center justify-center bg-[radial-gradient(50%_55%_at_50%_50%,_#0E76BC_0%,_#FFF_100%)] opacity-[0.16]"></div>
				<div className="flex flex-col md:flex-row gap-4 max-w-6xl mx-auto">
					{featuresCardsItems.map((item, index) => (
						<div
							key={index}
							className="bg-white rounded-3xl p-6 flex-1 flex flex-col relative mt-8 mx-4 lg:mx-0 ring ring-zinc-100 lg:ring-0"
						>
							<div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
								<div className="h-20 w-20 flex items-center justify-center">
									<img
										alt={item.topIconAlt}
										width="1000"
										height="1000"
										decoding="async"
										data-nimg="1"
										className="object-cover object-right-bottom w-full h-full"
										style={{ color: "transparent" }}
										src={item.topIcon}
									/>
								</div>
							</div>
							<div className="mt-8 mb-4">
								<h2 className="text-2xl font-bold text-center mb-2">{item.title}</h2>
								<p className="text-justify text-gray-700 mb-6">{item.description}</p>
							</div>
							<div className="rounded-3xl overflow-hidden mt-auto">
								<img
									alt={item.cardImageAlt}
									loading="lazy"
									width="1920"
									height="1080"
									decoding="async"
									data-nimg="1"
									className="w-full h-full object-cover"
									style={{ color: "transparent" }}
									src={item.cardImage}
								/>
							</div>
						</div>
					))}
				</div>
			</section>
			<section className="relative py-8 lg:py-8 my-0 lg:my-36">
				<div className="-left-96 -top-20 absolute -z-50 w-full h-screen flex items-center justify-center bg-[radial-gradient(40.21%_50%_at_50%_50%,_#0E76BC_0%,_#FFF_100%)] opacity-[0.20]"></div>
				<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:items-center gap-y-8 md:grid-cols-2 md:gap-x-16">
						<div className="md:order-2">
							<h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl mb-6">
								Comprehensive Dashboard Insights
							</h2>
							<ArrowListItem text="See the key interview and candidate data, and important metrics at just a glance." />
							<ArrowListItem text="Find the top performing candidates in the Leaderboard." />
							<hr className="mt-8 mb-6 border-gray-300" />
							<div className="flex items-center justify-start">
								<CTAButton label="Book a Demo" type="button" variant="primary" />
							</div>
						</div>
						<div className="relative w-full max-w-md mx-auto md:order-1 h-[500px]">
							{/* Three Transitioning Images */}
							<img
								alt=""
								loading="lazy"
								width="1920"
								height="1080"
								decoding="async"
								data-nimg="1"
								className="absolute transition-opacity duration-1000 ease-in-out top-0 left-0 w-full h-full object-contain opacity-100"
								style={{ color: "transparent" }}
								src="/images/product-ui/dashboard.png"
							/>
							<img
								alt=""
								loading="lazy"
								width="1920"
								height="1080"
								decoding="async"
								data-nimg="1"
								className="absolute transition-opacity duration-1000 ease-in-out top-0 left-0 w-full h-full object-contain opacity-0"
								style={{ color: "transparent" }}
								src="/images/product-ui/interviews.png"
							/>
							<img
								alt=""
								loading="lazy"
								width="1920"
								height="1080"
								decoding="async"
								data-nimg="1"
								className="absolute transition-opacity duration-1000 ease-in-out top-0 left-0 w-full h-full object-contain opacity-0"
								style={{ color: "transparent" }}
								src="/images/product-ui/interviews.png"
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="my-8 lg:my-28">
				<div className="max-w-4xl mx-auto">
					<InfoSection
						tag="The Crusts of SenasticAI"
						heading="Tailored to your needs, Senastic AI provides a variety of modules to enhance your experience"
						description=""
					/>
				</div>
				<div className="-mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
					{modules.slice(0, 4).map((module, index) => (
						<div
							key={index}
							className={`flex flex-col py-10 relative group/feature lg:border-l lg:border-b border-gray-400 dark:border-gray-800 ${index === 3 ? "lg:border-r" : ""}`}
						>
							<div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-100 dark:from-gray-800 to-transparent pointer-events-none"></div>
							<div className="mb-2 relative z-10 px-10 text-gray-600 dark:text-gray-400">
								{/* <svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="tabler-icon tabler-icon-terminal-2 "
								>
									{module.svgPaths.map((svgPath, index) => (
										<path key={index} d={svgPath}></path>
									))}
								</svg> */}
								<img
									alt=""
									loading="lazy"
									width="28"
									height="28"
									decoding="async"
									data-nimg="fill"
									className="object-contain object-left"
									style={{ color: "transparent" }}
									src={module.iconImage}
								/>
							</div>
							<div className="text-lg font-bold mb-2 relative z-10 px-10">
								<div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-300 dark:bg-gray-700 group-hover/feature:bg-indigo-500 transition-all duration-200 origin-center"></div>
								<span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-gray-800 dark:text-gray-100">
									{module.title}
								</span>
							</div>
							<p className="text-sm text-gray-600 dark:text-gray-300 max-w-xs relative z-10 px-10">
								{module.description}
							</p>
						</div>
					))}
					{modules.slice(4, 8).map((module, index) => (
						<div
							key={index}
							className={`flex flex-col py-10 relative group/feature lg:border-l border-gray-400 dark:border-gray-800 ${index === 3 ? "lg:border-r" : ""}`}
						>
							<div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-100 dark:from-gray-800 to-transparent pointer-events-none"></div>
							<div className="mb-2 relative z-10 px-10 text-gray-600 dark:text-gray-400">
								{/* <svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="tabler-icon tabler-icon-terminal-2 "
								>
									{module.svgPaths.map((svgPath, index) => (
										<path key={index} d={svgPath}></path>
									))}
								</svg> */}
								<img
									alt=""
									loading="lazy"
									width="28"
									height="28"
									decoding="async"
									data-nimg="fill"
									className="object-contain object-left"
									style={{ color: "transparent" }}
									src={module.iconImage}
								/>
							</div>
							<div className="text-lg font-bold mb-2 relative z-10 px-10">
								<div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-300 dark:bg-gray-700 group-hover/feature:bg-indigo-500 transition-all duration-200 origin-center"></div>
								<span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-gray-800 dark:text-gray-100">
									{module.title}
								</span>
							</div>
							<p className="text-sm text-gray-600 dark:text-gray-300 max-w-xs relative z-10 px-10">
								{module.description}
							</p>
						</div>
					))}
				</div>
				<div className="w-full xl:w-full overflow-hidden relative z-10 xl:px-12 -mt-8">
					<video className="w-full h-auto" autoPlay={true} loop={true} muted={true} playsInline={true}>
						<source src="/images/products/SenasticAI/mine/SenasticAI-web.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
			</section>

			<ContactForm />
		</div>
	);
}
