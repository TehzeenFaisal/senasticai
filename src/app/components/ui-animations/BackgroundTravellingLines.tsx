"use client";

import { useEffect, useRef } from "react";

type Line = {
	x: number;
	y: number;
	vx: number;
	vy: number;
	length: number;
	opacity: number;
	speed: number;
	pulsePhase: number;
	glowIntensity: number;
};

type TravellingLinesProps = {
	width?: number | "full";
	height?: number | "full";

	// Line settings
	count?: number;
	color?: string; // RGB values only (e.g. "14,118,188")
	minOpacity?: number;
	maxOpacity?: number;
	minLength?: number;
	maxLength?: number;

	// Movement
	minSpeed?: number;
	maxSpeed?: number;
	direction?: "up" | "down" | "left" | "right" | "diagonal" | "random";

	// Effects
	fadeEdges?: "top" | "bottom" | "both" | "none";
	glow?: boolean;
	pulse?: boolean;
	className?: string;
};

export default function TravellingLines({
	width = "full",
	height = "full",
	count = 40,
	color = "14,118,188",
	minOpacity = 0.2,
	maxOpacity = 0.5,
	minLength = 30,
	maxLength = 150,
	minSpeed = 2,
	maxSpeed = 8,
	direction = "diagonal",
	fadeEdges = "both",
	glow = true,
	pulse = true,
	className = ""
}: TravellingLinesProps) {
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

		const lines: Line[] = [];

		for (let i = 0; i < count; i++) {
			const speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
			let vx = 0;
			let vy = 0;

			switch (direction) {
				case "down":
					vy = speed;
					vx = 0;
					break;
				case "up":
					vy = -speed;
					vx = 0;
					break;
				case "right":
					vx = speed;
					vy = 0;
					break;
				case "left":
					vx = -speed;
					vy = 0;
					break;
				case "diagonal":
					// Mix of diagonal directions
					const angle =
						Math.random() < 0.5
							? Math.PI / 4 + (Math.random() - 0.5) * 0.5 // Down-right
							: -Math.PI / 4 + (Math.random() - 0.5) * 0.5; // Up-right
					vx = Math.cos(angle) * speed;
					vy = Math.sin(angle) * speed;
					break;
				case "random":
					const randomAngle = Math.random() * Math.PI * 2;
					vx = Math.cos(randomAngle) * speed;
					vy = Math.sin(randomAngle) * speed;
					break;
			}

			lines.push({
				x: Math.random() * canvasWidth,
				y: Math.random() * canvasHeight,
				vx,
				vy,
				length: Math.random() * (maxLength - minLength) + minLength,
				opacity: Math.random() * (maxOpacity - minOpacity) + minOpacity,
				speed,
				pulsePhase: Math.random() * Math.PI * 2,
				glowIntensity: Math.random() * 0.5 + 0.5
			});
		}

		let frame = 0;

		const animate = () => {
			ctx.clearRect(0, 0, canvasWidth, canvasHeight);
			frame++;

			lines.forEach((l, index) => {
				l.x += l.vx;
				l.y += l.vy;

				// Wrapping with buffer
				const buffer = l.length * 2;
				if (l.x > canvasWidth + buffer) l.x = -buffer;
				if (l.x < -buffer) l.x = canvasWidth + buffer;
				if (l.y > canvasHeight + buffer) l.y = -buffer;
				if (l.y < -buffer) l.y = canvasHeight + buffer;

				// Edge fade
				let fade = 1;
				if (fadeEdges === "bottom") {
					fade = 1 - l.y / canvasHeight;
				} else if (fadeEdges === "top") {
					fade = l.y / canvasHeight;
				} else if (fadeEdges === "both") {
					const distX = Math.min(l.x / canvasWidth, (canvasWidth - l.x) / canvasWidth);
					const distY = Math.min(l.y / canvasHeight, (canvasHeight - l.y) / canvasHeight);
					fade = Math.min(distX, distY) * 2;
				}

				// Pulsing effect
				let pulseFactor = 1;
				if (pulse) {
					l.pulsePhase += 0.05 + l.speed * 0.01;
					pulseFactor = 0.5 + 0.5 * Math.sin(l.pulsePhase);
				}

				// Speed-based opacity boost
				const speedBoost = Math.min(l.speed / maxSpeed, 1);
				const finalOpacity = l.opacity * fade * (0.3 + 0.7 * pulseFactor) * (0.5 + 0.5 * speedBoost);

				// Calculate line endpoints
				const magnitude = Math.sqrt(l.vx * l.vx + l.vy * l.vy) || 1;
				const dirX = l.vx / magnitude;
				const dirY = l.vy / magnitude;

				const startX = l.x - dirX * l.length;
				const startY = l.y - dirY * l.length;

				// Draw glow effect
				if (glow && finalOpacity > 0.3) {
					ctx.save();
					ctx.shadowBlur = 8 + l.glowIntensity * 12 * pulseFactor;
					ctx.shadowColor = `rgba(${color},${finalOpacity * 0.8})`;

					ctx.beginPath();
					ctx.moveTo(startX, startY);
					ctx.lineTo(l.x, l.y);
					ctx.strokeStyle = `rgba(${color},${finalOpacity})`;
					ctx.lineWidth = 1.5 + speedBoost * 0.5;
					ctx.lineCap = "round";
					ctx.stroke();

					ctx.restore();
				} else {
					// Draw regular line
					ctx.beginPath();
					ctx.moveTo(startX, startY);
					ctx.lineTo(l.x, l.y);
					ctx.strokeStyle = `rgba(${color},${finalOpacity})`;
					ctx.lineWidth = 1 + speedBoost * 0.5;
					ctx.lineCap = "round";
					ctx.stroke();
				}

				// Draw brighter head dot
				if (finalOpacity > 0.4) {
					ctx.beginPath();
					ctx.arc(l.x, l.y, 1 + speedBoost, 0, Math.PI * 2);
					ctx.fillStyle = `rgba(${color},${Math.min(finalOpacity * 1.5, 1)})`;
					ctx.fill();
				}
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
		minOpacity,
		maxOpacity,
		minLength,
		maxLength,
		minSpeed,
		maxSpeed,
		direction,
		fadeEdges,
		glow,
		pulse
	]);

	return <canvas ref={canvasRef} className={`pointer-events-none ${className}`} />;
}
