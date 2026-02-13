"use client";

import { useState } from "react";

interface SubNavLink {
	label: string;
	href: string;
	description?: string;
}

interface NavItem {
	label: string;
	href: string;
	subLinks?: SubNavLink[];
}

const navLinks: NavItem[] = [
	{ label: "HOME", href: "/" },
	{ label: "PRODUCT", href: "/product" },
	{ label: "ABOUT US", href: "/about-us" },
	{ label: "OUR PROCESS", href: "/our-process" },
	{ label: "SERVICES", href: "/services" }
];

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
		if (!mobileMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	};

	const closeMobileMenu = () => {
		setMobileMenuOpen(false);
		document.body.style.overflow = "unset";
	};

	return (
		<div className="!mt-0 !mb-0">
			<nav className="items-center justify-between mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-12 px-4 py-6 mt-2 max-w-7xl">
				<a
					className="z-50 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2 flex items-center space-x-2 text-2xl font-bold text-gray-900"
					href="/"
				>
					<div className="relative w-[150px] h-[60px] flex-shrink-0">
						<img
							alt="SenasticAI Logo"
							decoding="async"
							data-nimg="fill"
							className="object-contain object-left"
							style={{
								position: "absolute",
								height: "100%",
								width: "100%",
								left: 0,
								top: 0,
								right: 0,
								bottom: 0,
								color: "transparent"
							}}
							sizes="150px"
							src="/images/logo-senasticai.webp"
						/>
					</div>
				</a>

				{/* Desktop Navigation */}
				<div className="hidden sm:hidden md:hidden lg:block col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-8">
					<div className="fixed z-50 hidden md:flex left-1/2 top-[2rem] -translate-x-1/2 w-fit items-center gap-3 ring-1 ring-zinc-200 rounded-full px-14 py-6 backdrop-blur-lg bg-white/60">
						<nav
							aria-label="Main"
							data-orientation="horizontal"
							dir="ltr"
							className="relative z-10 flex max-w-max flex-1 items-center justify-center"
						>
							<div style={{ position: "relative" }}>
								<ul
									data-orientation="horizontal"
									className="group flex flex-1 list-none items-center justify-center space-x-1"
									dir="ltr"
								>
									{navLinks.map((link, index) => (
										<li key={index}>
											<a
												className="flex px-4 text-xs font-medium text-black hover:text-gray-900"
												href={link.href}
												data-radix-collection-item=""
											>
												{link.label}
											</a>
										</li>
									))}
								</ul>
							</div>
							<div className="absolute left-0 top-full flex justify-center z-[60]"></div>
						</nav>
					</div>
				</div>

				{/* Desktop CTA Button */}
				<div className="hidden lg:flex col-span-2 justify-end">
					<button
						type="button"
						className="hidden md:flex items-center space-x-2 px-8 py-5 rounded-full font-medium text-white text-sm transition-all duration-300
                bg-[linear-gradient(180deg,_#0E76BC_0%,_#283891_100%)]
                hover:bg-[linear-gradient(180deg,_#1492E6_0%,_#0E76BC_100%)]
                shadow-lg hover:shadow-xl hover:scale-[1.02]"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="h-4 w-4"
						>
							<rect width="20" height="16" x="2" y="4" rx="2"></rect>
							<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
						</svg>
						<span>LET'S TALK</span>
					</button>
				</div>

				{/* Mobile Menu Toggle */}
				<div className="flex sm:flex md:flex lg:hidden col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2 ml-auto items-center gap-4">
					<button
						onClick={toggleMobileMenu}
						className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-all duration-200 font-medium text-gray-700"
						aria-label="Toggle mobile menu"
					>
						<div className="flex flex-col gap-1.5">
							<span className="block w-5 h-0.5 bg-gray-700 rounded-full transition-all"></span>
							<span className="block w-5 h-0.5 bg-gray-700 rounded-full transition-all"></span>
							<span className="block w-5 h-0.5 bg-gray-700 rounded-full transition-all"></span>
						</div>
					</button>
				</div>
			</nav>

			{/* Mobile Menu */}
			<div className={`fixed inset-0 z-50 lg:hidden ${mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
				<div
					className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
						mobileMenuOpen ? "opacity-100" : "opacity-0"
					}`}
					onClick={closeMobileMenu}
				></div>
				<div
					className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-out overflow-y-auto ${
						mobileMenuOpen ? "translate-x-0" : "translate-x-full"
					}`}
				>
					<div className="p-6 h-full flex flex-col">
						<div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
							<h2 className="text-xl font-bold text-gray-900">Menu</h2>
							<button
								onClick={closeMobileMenu}
								className="p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-all duration-200 text-gray-600 hover:text-gray-900"
								aria-label="Close menu"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="lucide lucide-x h-6 w-6"
								>
									<path d="M18 6 6 18"></path>
									<path d="m6 6 12 12"></path>
								</svg>
							</button>
						</div>

						{/* Mobile Navigation Links */}
						<div className="flex-1 space-y-1">
							{navLinks.map((navItem, index) => (
								<a
									key={index}
									className="block py-3.5 px-4 text-base font-semibold text-gray-900 hover:bg-gradient-to-r hover:from-amber-50 hover:to-yellow-50 rounded-lg transition-all duration-200 hover:shadow-sm border border-transparent hover:border-amber-100"
									href={navItem.href}
									onClick={closeMobileMenu}
								>
									{navItem.label}
								</a>
							))}
							;
						</div>

						{/* Mobile CTA Button */}
						<div className="mt-6 pt-6 border-t border-gray-100">
							<button className="gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 flex items-center justify-center w-full space-x-2 bg-[#FFB800] hover:bg-amber-500 hover:shadow-lg text-black text-sm px-8 py-5 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="lucide lucide-mail h-4 w-4"
								>
									<rect width="20" height="16" x="2" y="4" rx="2"></rect>
									<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
								</svg>
								<span>LET'S TALK</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
