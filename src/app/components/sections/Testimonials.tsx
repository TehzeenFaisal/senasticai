"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
	id: number;
	stars: number;
	text: string;
	author: string;
	avatar?: string;
}

const testimonials: Testimonial[] = [
	{
		id: 1,
		stars: 5,
		text: "Senastic AI transformed our hiring process completely. We've cut our time-to-hire and the AI-generated insights help us identify top talent we might have missed before.",
		author: "Sarah Mitchell",
		avatar: "SM"
	},
	{
		id: 2,
		stars: 5,
		text: "The real-time AI interviews are game-changing. Candidates appreciate the flexibility, and we get comprehensive feedback instantly. No more scheduling nightmares or interviewer bias. It's fair, efficient, and scalable.",
		author: "Ahmed Hassan",
		avatar: "AH"
	},
	{
		id: 3,
		stars: 5,
		text: "We were skeptical about AI interviews at first, but Senastic proved us wrong. The quality of candidate assessments is remarkable, and the consistency across all interviews has eliminated our bias concerns. Best hiring decision we've made.",
		author: "Lisa Chen",
		avatar: "LC"
	},
	{
		id: 4,
		stars: 4,
		text: "Scaling our team from 50 to 200 employees would have been impossible without Senastic AI. The platform handled hundreds of interviews seamlessly while maintaining quality. The aptitude testing feature saved us countless hours.",
		author: "Rajesh Kumar",
		avatar: "RK"
	},
	{
		id: 5,
		stars: 5,
		text: "The AI-generated reports are incredibly detailed and actionable. We can now make data-driven hiring decisions with confidence. Our offer acceptance rate has increased by 40% since we started using Senastic AI.",
		author: "Emma Rodriguez",
		avatar: "ER"
	},
	{
		id: 6,
		stars: 5,
		text: "As a fast-growing startup, we needed a hiring solution that could keep up with our pace. Senastic AI delivered beyond expectations. The customization options allowed us to tailor the interview process to our unique culture and requirements.",
		author: "David Park",
		avatar: "DP"
	}
];

export default function Testimonials() {
	const [index, setIndex] = useState(0);

	const prevTestimonial = () => {
		setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
	};

	const nextTestimonial = () => {
		setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
	};

	const current = testimonials[index];

	return (
		<section className="relative px-4 py-24">
			<div className="max-w-7xl mx-auto grid lg:grid-cols-12 lg:gap-12 items-center">
				{/* Left Side */}
				<div className="lg:col-span-5">
					<p className="text-sm font-medium mb-4">TESTIMONIALS</p>
					<h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">See What Our Clients Say About Us</h2>
					<div className="flex gap-4">
						<button
							onClick={prevTestimonial}
							className="rounded-full p-4 border-2 border-black text-black hover:bg-gray-100 transition hover:cursor-pointer"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-10 w-10"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={1}
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M12 19l-7-7 7-7" />
							</svg>
						</button>
						<button
							onClick={nextTestimonial}
							className="rounded-full p-4 border-2 border-black text-black hover:bg-gray-100 transition hover:cursor-pointer"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-10 w-10"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={1}
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
								<path strokeLinecap="round" strokeLinejoin="round" d="M12 5l7 7-7 7" />
							</svg>
						</button>
					</div>
				</div>

				{/* Right Side / Testimonial Card */}
				<div className="lg:col-span-7 relative mt-24 lg:mt-14">
					{/* Layered background cards */}
					<motion.div
						animate={{ rotate: [0, 2, 0] }}
						transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
						className="absolute inset-0 bg-[#0E76BC]/10 rounded-3xl z-5"
					/>
					<motion.div
						animate={{ rotate: [0, 2, 0] }}
						transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
						className="absolute bottom-[70px] right-[60px] left-[60px] h-[270px] bg-[#283891]/15 rounded-3xl z-[5]"
					/>
					{/* <motion.div
						animate={{ rotate: [0, 2, 0] }}
						transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
						className="absolute bottom-[55px] right-10 left-10 h-[270px] bg-[#283891]/10 rounded-3xl z-[6]"
					/> */}
					<motion.div
						animate={{ rotate: [0, 2, 0] }}
						transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
						className="absolute bottom-[40px] right-5 left-5 h-[270px] bg-[#0E76BC]/10 rounded-3xl z-[7]"
					/>

					<motion.div
						key={current.id + "-bottom"}
						initial={{ y: 0, opacity: 1, scale: 1 }}
						animate={{ y: -40, opacity: 0, scale: 1.05 }}
						exit={{ y: 0, opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
						className="absolute bottom-[25px] -right-0 -left-0 h-[270px] bg-[#0E76BC]/8 rounded-3xl z-[9]"
					/>

					{/* Front card with animation */}
					<div className="relative p-2">
						<AnimatePresence mode="wait">
							<motion.div
								key={current.id}
								initial={{ opacity: 0, y: -50 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 50 }}
								transition={{ duration: 0.5 }}
								className="h-[270px] p-10 bg-white shadow-xl border border-[#283891]/10 rounded-3xl z-10 relative"
							>
								<div className="flex gap-1 mb-4">
									{Array.from({ length: 5 }).map((_, i) => (
										<svg
											key={i}
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill={i < current.stars ? "#FACC15" : "none"}
											stroke={i < current.stars ? "#FACC15" : "currentColor"}
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="w-5 h-5"
										>
											<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
										</svg>
									))}
								</div>
								<p className="mb-6 line-clamp-4 lg:line-clamp-none">{current.text}</p>
								<div className="flex items-center gap-3">
									<span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-800 font-medium">
										{current.avatar}
									</span>
									<div>
										<p className="font-semibold">{current.author}</p>
									</div>
								</div>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			</div>
		</section>
	);
}
