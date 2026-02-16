"use client";

import { useEffect, useRef } from "react";

type Particle = {
	x: number;
	y: number;
	vx: number;
	vy: number;
	radius: number;
	opacity: number;
};

type ParticlesProps = {
	// Canvas size
	width?: number | "full";
	height?: number | "full";

	// Particle behavior
	count?: number;
	color?: string; // CSS color or rgb values
	minRadius?: number;
	maxRadius?: number;
	minOpacity?: number;
	maxOpacity?: number;

	// Movement
	horizontalSpeed?: number; // 0 for no horizontal movement
	verticalSpeed?: number; // positive = down, negative = up
	direction?: "up" | "down" | "random";

	// Effects
	fadeEdges?: "top" | "bottom" | "both" | "none";
	className?: string;
};

export default function Particles({
	width = "full",
	height = "full",
	count = 50,
	color = "14,118,188", // RGB values
	minRadius = 1,
	maxRadius = 3,
	minOpacity = 0.3,
	maxOpacity = 0.7,
	horizontalSpeed = 0.3,
	verticalSpeed = 0.5,
	direction = "down",
	fadeEdges = "bottom",
	className = ""
}: ParticlesProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const animationRef = useRef<number | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		let canvasWidth = 0;
		let canvasHeight = 0;

		const resize = () => {
			if (width === "full" || height === "full") {
				const parent = canvas.parentElement;
				if (!parent) return;
				canvasWidth = width === "full" ? parent.offsetWidth : (width as number);
				canvasHeight = height === "full" ? parent.offsetHeight : (height as number);
			} else {
				canvasWidth = width as number;
				canvasHeight = height as number;
			}
			canvas.width = canvasWidth;
			canvas.height = canvasHeight;
		};

		resize();
		window.addEventListener("resize", resize);

		const particles: Particle[] = [];

		for (let i = 0; i < count; i++) {
			let vx, vy;

			if (direction === "random") {
				vx = (Math.random() - 0.5) * horizontalSpeed * 2;
				vy = (Math.random() - 0.5) * verticalSpeed * 2;
			} else {
				vx = (Math.random() - 0.5) * horizontalSpeed;
				vy = direction === "down" ? Math.random() * verticalSpeed + 0.1 : -(Math.random() * verticalSpeed + 0.1);
			}

			particles.push({
				x: Math.random() * canvasWidth,
				y: Math.random() * canvasHeight,
				vx,
				vy,
				radius: Math.random() * (maxRadius - minRadius) + minRadius,
				opacity: Math.random() * (maxOpacity - minOpacity) + minOpacity
			});
		}

		const animate = () => {
			ctx.clearRect(0, 0, canvasWidth, canvasHeight);

			particles.forEach((p) => {
				p.x += p.vx;
				p.y += p.vy;

				// Wrap around vertically
				if (p.y > canvasHeight) {
					p.y = 0;
					p.x = Math.random() * canvasWidth;
				}
				if (p.y < 0) {
					p.y = canvasHeight;
					p.x = Math.random() * canvasWidth;
				}

				// Wrap around horizontally
				if (p.x < 0) p.x = canvasWidth;
				if (p.x > canvasWidth) p.x = 0;

				// Calculate fade based on position
				let fade = 1;
				if (fadeEdges === "bottom") {
					fade = 1 - p.y / canvasHeight;
				} else if (fadeEdges === "top") {
					fade = p.y / canvasHeight;
				} else if (fadeEdges === "both") {
					const distFromCenter = Math.abs(p.y - canvasHeight / 2) / (canvasHeight / 2);
					fade = 1 - distFromCenter;
				}

				const finalOpacity = p.opacity * fade;

				ctx.beginPath();
				ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(${color},${finalOpacity})`;
				ctx.fill();
			});

			animationRef.current = requestAnimationFrame(animate);
		};

		animate();

		return () => {
			if (animationRef.current) cancelAnimationFrame(animationRef.current);
			window.removeEventListener("resize", resize);
		};
	}, [
		width,
		height,
		count,
		color,
		minRadius,
		maxRadius,
		minOpacity,
		maxOpacity,
		horizontalSpeed,
		verticalSpeed,
		direction,
		fadeEdges
	]);

	return <canvas ref={canvasRef} className={`pointer-events-none ${className}`} />;
}
