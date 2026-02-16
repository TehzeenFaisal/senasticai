import type { Metadata } from "next";
import { Geist, Geist_Mono, Lexend } from "next/font/google";
import "@/app/styles/globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ContactForm from "../components/layout/ContactForm";
import Testimonials from "../components/sections/Testimonials";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"]
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"]
});

const lexend = Lexend({
	variable: "--font-lexend",
	subsets: ["latin"]
});

export const metadata: Metadata = {
	title: {
		template: "%s | SenasticAI",
		default: "SenasticAI"
	},
	description: "AI-powered interview and hiring platform for automated candidate screening and structured evaluations.",
	keywords: [
		"AI interview platform",
		"AI recruitment software",
		"AI candidate screening",
		"video interview software",
		"automated hiring platform",
		"talent assessment software",
		"structured interview platform",
		"AI hiring solution",
		"remote interview software",
		"data-driven recruitment"
	]
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body
				className={`${lexend.variable} ${geistSans.variable} ${geistMono.variable} font-lexend antialiased min-h-screen text-slate-800`}
			>
				<Header />
				<div className="h-full">
					<main className="overflow-x-hidden">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
