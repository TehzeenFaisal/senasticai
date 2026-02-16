"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const defaultImages = [
	"/images/product-ui/feedback-dashboard-mockup.svg",
	"/images/product-ui/leaderboard-tablet.svg",
	"/images/product-ui/dashboard-mobile.svg"
];

export default function CyclingImages({ images = defaultImages }: { images?: string[] }) {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % images.length);
		}, 2000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative w-full max-w-md mx-auto h-[500px] overflow-hidden">
			{images.map((src, i) => (
				<motion.img
					key={i}
					src={src}
					alt=""
					className="absolute top-0 left-0 w-full h-full object-contain"
					initial={false}
					animate={{ opacity: i === index ? 1 : 0 }}
					transition={{ duration: 1.2, ease: "easeInOut" }}
				/>
			))}
		</div>
	);
}
