"use client";

import { useState, useEffect } from "react";

export interface ProcessStep {
	number: string;
	title: string;
	description: string;
}

interface ProcessStepsProps {
	steps: ProcessStep[];
	autoProgressDelay?: number; // milliseconds, default 3000
}

export default function ProcessSteps({ steps, autoProgressDelay = 3000 }: ProcessStepsProps) {
	const [activeStep, setActiveStep] = useState(0);

	// Auto-progression
	useEffect(() => {
		const timer = setInterval(() => {
			setActiveStep((prev) => (prev + 1) % steps.length);
		}, autoProgressDelay);

		return () => clearInterval(timer);
	}, [steps.length, autoProgressDelay]);

	const handleStepClick = (index: number) => {
		setActiveStep(index);
	};

	return (
		<div className="mt-16">
			{/* Desktop Timeline Navigation - Hidden on mobile */}
			<div className="hidden md:block relative mb-14 h-24 px-8">
				{/* Step Circles - Using Grid for Even Spacing */}
				<div
					className="relative z-10 grid items-start"
					style={{
						gridTemplateColumns: `repeat(${steps.length}, 1fr)`
					}}
				>
					{steps.map((step, index) => {
						const isActive = index === activeStep;
						const isPast = index < activeStep;
						const isCompleted = isPast || isActive;

						return (
							<div
								key={index}
								className="flex flex-col items-center cursor-pointer relative"
								onClick={() => handleStepClick(index)}
							>
								{/* Background Line Segment */}
								{index < steps.length - 1 && <div className="absolute left-1/2 top-8 w-full h-1 bg-gray-200 z-0"></div>}

								{/* Active Progress Line Segment */}
								{index < steps.length - 1 && (isPast || isActive) && (
									<div
										className="absolute left-1/2 top-8 h-1 bg-blue-600 z-0 transition-all duration-500 ease-in-out"
										style={{
											width: index < activeStep ? "100%" : "0%"
										}}
									></div>
								)}

								<div
									className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold shadow-lg transition-all duration-300 relative z-10 ${
										isCompleted ? "bg-blue-600 text-white" : "bg-white text-gray-400 border-2 border-gray-200"
									}`}
								>
									{step.number}
								</div>
								<p
									className={`mt-3 font-medium text-sm text-center transition-colors duration-300 ${
										isCompleted ? "text-blue-600" : "text-gray-500"
									}`}
								>
									{step.title}
								</p>
							</div>
						);
					})}
				</div>
			</div>

			{/* Mobile Vertical Stepper - Visible only on mobile */}
			<div className="md:hidden space-y-6">
				{steps.map((step, index) => {
					const isActive = index === activeStep;
					const isPast = index < activeStep;
					const isCompleted = isPast || isActive;

					return (
						<div key={index} className="relative flex gap-4 cursor-pointer" onClick={() => handleStepClick(index)}>
							{/* Vertical Line Connector */}
							{index < steps.length - 1 && (
								<div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>
							)}
							{index < steps.length - 1 && (isPast || isActive) && (
								<div
									className="absolute left-6 top-12 w-0.5 bg-blue-600 -translate-x-1/2 transition-all duration-500 ease-in-out"
									style={{
										height: index < activeStep ? "calc(100% - 2rem)" : "0%"
									}}
								></div>
							)}

							{/* Step Number */}
							<div className="relative z-10 flex-shrink-0">
								<div
									className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shadow-md transition-all duration-300 ${
										isCompleted ? "bg-blue-600 text-white" : "bg-white text-gray-400 border-2 border-gray-200"
									}`}
								>
									{step.number}
								</div>
							</div>

							{/* Step Card */}
							<div className="flex-1">
								<div
									className={`space-y-2 p-4 rounded-xl transition-all duration-300 ${
										isActive
											? "bg-white shadow-lg border-l-4 border-blue-500"
											: "bg-white shadow-md border border-gray-100"
									}`}
								>
									<h3
										className={`text-base font-medium transition-colors duration-300 ${
											isCompleted ? "text-blue-600" : "text-gray-800"
										}`}
									>
										{step.title}
									</h3>
									<p className="text-gray-700 text-sm">{step.description}</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>

			{/* Desktop Step Cards - Hidden on mobile */}
			<div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
				{steps.map((step, index) => {
					const isActive = index === activeStep;

					return (
						<div
							key={index}
							className={`space-y-4 p-6 rounded-2xl transition-all duration-300 ${
								isActive ? "bg-white shadow-lg border-t-4 border-blue-500" : "bg-white shadow-md border border-gray-100"
							}`}
						>
							<div className="flex justify-between items-center">
								<span
									className={`text-3xl font-normal transition-colors duration-300 ${
										isActive ? "text-blue-600" : "text-gray-400"
									}`}
								>
									{step.number}.
								</span>
							</div>
							<h3 className="text-xl font-medium text-gray-800 mt-2">{step.title}</h3>
							<p className="text-gray-700 text-sm mt-2">{step.description}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
