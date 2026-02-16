import CTAButton, { CTAButtonProps } from "../CTAButton";

interface HeroProps {
	preTitle?: string;
	title: string;
	underlinedText?: string;
	description?: string;
	ctaButtons?: CTAButtonProps[];
	bgGradient?: string;
	bgGrid?: string;
	svgPath?: string;
}

export default function Hero({
	preTitle,
	title,
	underlinedText,
	description,
	ctaButtons = [],
	bgGradient = "radial-gradient(50% 40% at 50% 50%, #0E76BC 0%, #FFFFFF 100%)",
	bgGrid = "/images/bg-grid.svg",
	// Default: Blue painted underline
	svgPath = "M761.572 6.5729C762.49 6.64177 764.514 7.35023 764.808 7.62574C766.797 9.44607 748.213 9.07217 743.128 9.12136C744.117 9.72158 744.187 12.6243 744.752 12.7522C745.67 12.9687 763.678 12.7227 768.869 14.7398C772.894 16.3141 771.812 18.9905 772 20.7617C765.161 20.6239 756.864 20.1418 750.178 20.0729C743.964 20.004 733.006 20.004 726.344 20.0139C715.927 20.0335 705.581 20.6928 695.023 20.3976L704.64 19.3152C688.679 19.0496 673.084 19.8072 657.312 20.0335C616.305 20.6239 574.486 20.9978 533.891 21.1454C455.902 21.4308 378.255 20.4763 300.443 21.1356C301.043 21.7948 303.598 21.8145 305.999 21.8736C330.445 22.4935 361.189 22.0113 386.318 22.2081C420.357 22.4836 454.784 22.9854 488.835 23.3298C564.117 22.1097 648.991 24.9042 723.142 23.3298C732.476 23.133 745.776 20.9388 749.189 24.3039C753.886 28.9286 734.324 26.2817 724.508 25.9078C698.001 24.9042 649.026 25.7504 620.484 25.8881C586.609 26.0456 546.45 27.1574 514.67 26.6458C501.747 26.4391 487.552 26.5769 472.922 26.5769C454.561 26.5769 386.694 26.9213 373.747 25.8488C371.923 25.7012 373.076 25.0026 371.817 25.1305C370.558 25.2584 369.863 25.7897 366.956 25.8586C362.695 25.957 352.867 25.4945 347.771 25.465C318.016 25.3076 286.931 25.1502 256.341 25.1305C184.531 25.0813 117.03 22.9756 46.1858 22.2278C34.2627 22.0999 11.1227 23.6742 11.6405 19.5022C11.8877 17.5539 17.5844 17.613 25.3645 17.4949C42.4311 17.2391 62.5932 18.3411 79.8129 18.5969L183.331 18.9413L180.965 18.2132L137.698 17.4654C100.728 16.5995 65.0061 13.8542 28.5306 12.7522C22.6809 12.5751 15.7483 13.0572 10.1811 12.5456C8.83927 12.4176 1.18871 11.0007 0.741447 10.6662C-5.35546 6.12027 28.4835 8.81633 30.8611 8.34403C31.5555 8.20628 30.9082 6.8976 33.6271 6.51386C36.346 6.13011 41.0422 6.35642 43.7729 5.99236C45.4442 5.76604 46.0563 5.02807 47.7747 4.7132C64.4176 1.70227 70.9971 2.83383 91.1122 2.53864C178.505 1.25948 268.158 1.24964 355.715 1.07253C487.905 0.80686 620.177 1.78099 752.014 -0.0295105C758.5 0.147603 754.168 2.53864 751.955 2.53864H725.484C725.849 3.34549 728.627 4.33929 726.367 5.10679C723.825 5.96284 711.878 5.46101 709.442 6.54338H761.572V6.5729ZM451.206 3.66036C450.594 3.01094 448.04 2.94206 445.58 2.91254C438.942 2.82399 428.855 3.28645 421.628 3.30613C390.614 3.39469 359.341 3.58164 328.574 3.6702C297.807 3.75875 266.945 3.42421 236.261 3.83747C236.284 4.6148 294.052 4.41801 299.713 4.39833C334.682 4.29994 370.487 3.85715 405.432 3.64068C420.663 3.54228 435.999 3.74892 451.206 3.65052V3.66036ZM701.415 4.03427C680.334 4.15234 659.089 3.87683 637.997 4.01459C605.43 4.23106 572.709 5.07727 540.2 5.48069C532.008 5.57909 522.298 5.25438 514.529 5.48069C512.187 5.54957 509.551 5.7562 512.164 6.20883C574.192 5.74636 637.727 7.35023 699.002 4.74272C701.615 4.63448 701.78 4.97887 701.415 4.02443V4.03427ZM685.384 8.039C661.349 7.69461 637.786 8.31451 613.987 8.7573C608.678 8.85569 603.299 8.66874 597.991 8.7573C595.813 8.79666 588.281 8.93441 587.551 9.47559L679.828 8.76714L685.384 8.02916V8.039ZM667.729 13.5C632.395 13.5295 597.885 13.6082 562.61 13.8444C438.259 14.6808 321.323 14.7595 196.902 13.5098C193.63 13.4803 146.49 12.3783 146.432 12.949C158.131 13.8542 173.079 13.6181 185.732 13.8641C340.767 16.7963 493.896 17.9574 649.273 14.2183L667.729 13.5Z"
}: HeroProps) {
	return (
		<section className="h-[calc(100vh-10rem)] flex flex-col mb-0 relative">
			{/* Background Gradient */}
			<div
				className="absolute left-0 top-2 -z-50 w-full h-screen flex items-center justify-center opacity-[0.18]"
				style={{ background: bgGradient }}
			></div>

			{/* Grid Overlay */}
			<div className="pointer-events-none">
				<div
					className="absolute md:left-40 inset-0 -z-10"
					style={{
						backgroundImage: `url(${bgGrid})`,
						backgroundSize: "contain",
						backgroundBlendMode: "overlay",
						maskImage: "radial-gradient(800px 350px at 583px 380px, rgb(255,255,255), 100%, transparent)"
					}}
				></div>
			</div>

			{/* Content */}
			<div className="w-full flex-1 flex items-center">
				<div className="mx-auto px-4 -mt-40 text-center max-w-6xl">
					{preTitle && <p className="text-sm font-medium mb-2">{preTitle}</p>}
					<h1 className="text-4xl md:text-[4rem] font-bold text-gray-900 !leading-[1.2] mb-4">
						{title}
						{underlinedText && (
							<span className="relative">
								{underlinedText}
								{svgPath && (
									<svg
										className="mx-auto mt-4 max-w-[15rem] sm:max-w-[15rem] md:max-w-[38rem] lg:max-w-[40rem]"
										height="27"
										viewBox="0 0 772 27"
										fill="none"
										strokeWidth={2}
									>
										<path d={svgPath} fill="#0B80FF" />
									</svg>
								)}
							</span>
						)}
					</h1>

					{description && (
						<div className="max-w-[30rem] mb-12 mt-4 lg:mt-10 mx-auto">
							<p className="text-xl">{description}</p>
						</div>
					)}

					{/* CTA Buttons */}
					{ctaButtons.length > 0 && (
						<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
							{ctaButtons.map((btn, index) => (
								<CTAButton
									key={index}
									label={btn.label}
									href={btn.href}
									onClick={btn.onClick}
									type={btn.type}
									variant={btn.variant}
								/>
							))}
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
