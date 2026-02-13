"use client";

import { useEffect, useRef } from "react";

type Particle = {
	x: number;
	y: number;
	vx: number;
	vy: number;
	radius: number;
};

export default function ScatteringDotsCanvas() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const animationRef = useRef<number | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const resize = () => {
			const parent = canvas.parentElement;
			if (!parent) return;

			canvas.width = parent.offsetWidth;
			canvas.height = parent.offsetHeight;
		};

		resize();
		window.addEventListener("resize", resize);

		const particles: Particle[] = [];
		const count = 30;

		// Create particles
		for (let i = 0; i < count; i++) {
			particles.push({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				vx: (Math.random() - 0.5) * 0.8,
				vy: (Math.random() - 0.5) * 0.8,
				radius: Math.random() * 2 + 1
			});
		}

		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			particles.forEach((p) => {
				p.x += p.vx;
				p.y += p.vy;

				// Bounce edges
				if (p.x <= 0 || p.x >= canvas.width) p.vx *= -1;
				if (p.y <= 0 || p.y >= canvas.height) p.vy *= -1;

				// Draw glow
				const brandColors = ["#283891", "#0E76BC"];
				const color = brandColors[Math.floor(Math.random() * brandColors.length)];

				ctx.beginPath();
				ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

				ctx.fillStyle = color;
				ctx.shadowBlur = 10;
				ctx.shadowColor = color;
				ctx.globalAlpha = 0.85;

				ctx.fill();
				ctx.globalAlpha = 1;
			});

			animationRef.current = requestAnimationFrame(animate);
		};

		animate();

		return () => {
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}
			window.removeEventListener("resize", resize);
		};
	}, []);

	return <canvas ref={canvasRef} className="w-full h-full" />;
}
