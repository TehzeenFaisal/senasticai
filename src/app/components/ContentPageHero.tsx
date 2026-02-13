"use client";

import React from "react";
import CTAButton, { CTAButtonProps } from "./CTAButton";

interface ContentPageHeroProps {
	badgeText?: string;
	title: React.ReactNode;
	subtitle?: string;
	ctaPrimary?: Omit<CTAButtonProps, "type"> & { type?: "link" | "button" };
	ctaSecondary?: Omit<CTAButtonProps, "type"> & { type?: "link" | "button" };
	heroImage?: {
		src: string;
		alt: string;
		className?: string;
	};
	gradientColors?: [string, string]; // optional badge gradient
	backgroundGradient?: string; // optional background gradient
}

export default function ContentPageHero({
	badgeText = "About Us",
	title,
	subtitle,
	ctaPrimary,
	ctaSecondary,
	heroImage,
	gradientColors = ["#0E76BC", "#283891"],
	backgroundGradient = "radial-gradient(50% 40% at 50% 50%, rgba(14, 118, 188, 0.2) 0%, rgba(255, 255, 255, 0) 100%)"
}: ContentPageHeroProps) {
	return (
		<section className="relative min-h-[70vh] flex flex-col justify-center">
			{/* Background gradient */}
			<div
				className="absolute inset-0 -z-50"
				style={{
					background: backgroundGradient
				}}
			></div>

			{/* Decorative grid overlay */}
			<div className="pointer-events-none absolute inset-0 -z-40">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: "url(/images/bg-grid.svg)",
						backgroundSize: "contain",
						backgroundBlendMode: "overlay",
						maskImage: "radial-gradient(800px 350px at 50% 50%, rgb(255, 255, 255), 100%, transparent)"
					}}
				></div>
			</div>

			{/* Hero content */}
			<div className="mx-auto px-4 text-center max-w-4xl">
				{badgeText && (
					<span
						className="inline-block py-2 px-6 mb-4 text-white font-medium rounded-full text-lg"
						style={{
							background: `linear-gradient(to bottom, ${gradientColors[0]} 0%, ${gradientColors[1]} 100%)`
						}}
					>
						{badgeText}
					</span>
				)}

				<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 !leading-snug">{title}</h1>

				{subtitle && <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">{subtitle}</p>}

				{(ctaPrimary || ctaSecondary) && (
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						{ctaPrimary && <CTAButton {...ctaPrimary} />}
						{ctaSecondary && <CTAButton {...ctaSecondary} />}
					</div>
				)}

				{heroImage && (
					<div className="mt-12 flex justify-center">
						<img
							src={heroImage.src}
							alt={heroImage.alt}
							className={`w-80 max-w-full rounded-2xl shadow-lg object-cover ${heroImage.className || ""}`}
						/>
					</div>
				)}
			</div>
		</section>
	);
}
