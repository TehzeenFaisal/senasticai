"use client";

import { useState } from "react";

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		mobile: "",
		message: ""
	});
	const [formMessage, setFormMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const formFilled = Object.values(formData).every((value) => value.length > 0);

	const validateForm = () => {
		const { name, email, mobile, message } = formData;

		if (!name.trim() || !email.trim() || !mobile.trim() || !message.trim()) {
			setFormMessage({ type: "error", text: "Please fill in all fields." });
			return false;
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			setFormMessage({ type: "error", text: "Please enter a valid email address." });
			return false;
		}

		const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{3,4}[-\s\.]?[0-9]{3,4}$/;
		if (!phoneRegex.test(mobile)) {
			setFormMessage({ type: "error", text: "Please enter a valid phone number." });
			return false;
		}

		return true;
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!validateForm()) return;

		setIsLoading(true);
		setFormMessage(null);

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(formData)
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.error || "Failed to send message");
			}

			setFormMessage({
				type: "success",
				text: "Thank you for your message! We'll get back to you soon."
			});

			// Reset form on success
			setFormData({
				name: "",
				email: "",
				mobile: "",
				message: ""
			});

			setTimeout(() => {
				setFormMessage(null);
			}, 5000);
		} catch (error) {
			setFormMessage({
				type: "error",
				text: error instanceof Error ? error.message : "Failed to send message. Please try again."
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<section id="contact-section" className="max-w-7xl mx-auto px-4 py-0 !mt-32 !mb-48 scroll-mt-32">
			<div>
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-8xl font-bold mb-4">Reach Out Today!</h2>
					<p className="text-xl">We're ready to assist you.</p>
				</div>
				<div className="mx-auto max-w-4xl mb-16">
					<form onSubmit={handleSubmit} className="grid gap-6">
						<div className="grid md:grid-cols-3 gap-6">
							<div className="space-y-2">
								<input
									type="text"
									className="flex h-10 w-full text-base ring-offset-background border-0 bg-transparent text-sm font-medium focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm font-light border-0 border-b-2 border-gray-300 rounded-none px-7 py-2 focus-visible:ring-0 bg-transparent"
									placeholder="Name"
									required
									name="name"
									value={formData.name}
									id="name"
									onChange={handleChange}
									disabled={isLoading}
								/>
							</div>
							<div className="space-y-2">
								<input
									type="email"
									className="flex h-10 w-full text-base ring-offset-background border-0 bg-transparent text-sm font-medium focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm font-light border-0 border-b-2 border-gray-300 rounded-none px-7 py-2 focus-visible:ring-0 bg-transparent"
									placeholder="Email"
									required
									name="email"
									value={formData.email}
									id="email"
									onChange={handleChange}
									disabled={isLoading}
								/>
							</div>
							<div className="space-y-2">
								<input
									type="text"
									className="flex h-10 w-full text-base ring-offset-background border-0 bg-transparent text-sm font-medium focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm font-light border-0 border-b-2 border-gray-300 rounded-none px-7 py-2 focus-visible:ring-0 bg-transparent"
									placeholder="Mobile Number"
									required
									name="mobile"
									value={formData.mobile}
									id="mobile"
									onChange={handleChange}
									disabled={isLoading}
								/>
							</div>
						</div>
						<div className="space-y-2">
							<textarea
								className="flex w-full text-base ring-offset-background border-0 bg-transparent text-sm font-medium focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm font-light border-0 border-b-2 border-gray-300 rounded-none px-7 py-2 focus-visible:ring-0 bg-transparent resize-none"
								placeholder="Message"
								required
								name="message"
								value={formData.message}
								id="message"
								onChange={handleChange}
								rows={4}
								disabled={isLoading}
							/>
						</div>

						{formMessage && (
							<div
								className={`${formMessage.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"} text-center text-sm p-4 rounded-lg mt-4`}
							>
								{formMessage.text}
							</div>
						)}

						<div className="flex justify-center mt-8">
							<button
								className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-80 hover:text-accent-foreground h-10 group text-sm hover:bg-[#0E76BC]/20 border b-2 border-gray-400 rounded-full w-full p-8 hover:cursor-pointer"
								type="submit"
								disabled={!formFilled || isLoading}
							>
								{isLoading ? "Sending..." : "SUBMIT"}
								{!isLoading && (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="lucide lucide-arrow-right -mt-1 ml-0 !h-5 !w-5 transition-transform group-hover:translate-x-1"
									>
										<path d="M5 12h14"></path>
										<path d="m12 5 7 7-7 7"></path>
									</svg>
								)}
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}
