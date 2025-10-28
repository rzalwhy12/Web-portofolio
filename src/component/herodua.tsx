"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const HeroduaSection = () => {
	const [face1Width, setFace1Width] = useState(0);
	const [face2Width, setFace2Width] = useState(0);
	const [containerTransform, setContainerTransform] = useState("translate(-50%, -50%)");
	const [text1Opacity, setText1Opacity] = useState(1);
	const [text2Opacity, setText2Opacity] = useState(1);
	const [isMobile, setIsMobile] = useState(false);

	const defaultWidthRef = useRef(0);
	const currentXRef = useRef(0);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);
	const sectionRef = useRef<HTMLElement>(null);

	// Initialize default widths
	useEffect(() => {
		if (typeof window !== "undefined") {
			const updateWidths = () => {
				const width = window.innerWidth;
				let defaultWidth;
				
				if (width < 640) {
					// Mobile - static mode (lebih kecil)
					setIsMobile(true);
					defaultWidth = width / 5.3;
				} else if (width < 1024) {
					// Tablet - static mode (lebih kecil)
					setIsMobile(true);
					defaultWidth = width / 5;
				} else {
					// Desktop - interactive mode
					setIsMobile(false);
					defaultWidth = window.screen.width / 4.4;
				}
				
				defaultWidthRef.current = defaultWidth;
				setFace1Width(defaultWidth);
				setFace2Width(defaultWidth);
			};

			updateWidths();
			window.addEventListener('resize', updateWidths);
			
			return () => window.removeEventListener('resize', updateWidths);
		}
	}, []);

	const getMousePosition = (e: MouseEvent) => {
		const screenCenter = window.innerWidth / 3;
		const xPos = e.clientX;
		return xPos < screenCenter ? "left" : "right";
	};

	const moveLeft = useCallback((w1: number, w2: number) => {
		if (typeof window === "undefined") return;
		const screenWidth = window.screen.width - 100;
		const maxRevealWidth = screenWidth / 2.5;
		if (w1 < maxRevealWidth) {
			setFace1Width(w1 + 50);
			setFace2Width(Math.max(w2 - 50, 50));
		}
	}, []);

	const moveRight = useCallback((w1: number, w2: number) => {
		if (typeof window === "undefined") return;
		const screenWidth = window.screen.width - 100;
		const maxRevealWidth = screenWidth / 2.5;
		if (w2 < maxRevealWidth) {
			setFace2Width(w2 + 50);
			setFace1Width(Math.max(w1 - 50, 50));
		}
	}, []);

	const changeImagePosition = (direction: "left" | "right") => {
		if (direction === "left") {
			setContainerTransform("translate(-58%, -50%)");
		} else if (direction === "right") {
			setContainerTransform("translate(-42%, -50%)");
		}
	};

	const showText = (side: "left" | "right") => {
		if (side === "left") {
			setText1Opacity(1);
			setText2Opacity(0);
		} else {
			setText1Opacity(0);
			setText2Opacity(1);
		}
	};

	const showAllText = () => {
		setText1Opacity(1);
		setText2Opacity(1);
	};

	const resetToDefault = useCallback(() => {
		setFace1Width(defaultWidthRef.current);
		setFace2Width(defaultWidthRef.current);
		setContainerTransform("translate(-50%, -50%)");
		showAllText();
		currentXRef.current = 0;
	}, []);

	const changeFace = useCallback(
		(e: MouseEvent) => {
			const mousePosition = getMousePosition(e);
			const w1 = face1Width;
			const w2 = face2Width;
			currentXRef.current = e.clientX;

			if (mousePosition === "left") {
				moveLeft(w1, w2);
				changeImagePosition("right");
				showText("left");
			} else if (mousePosition === "right") {
				moveRight(w1, w2);
				changeImagePosition("left");
				showText("right");
			}
		},
		[face1Width, face2Width, moveLeft, moveRight]
	);

	// Event listeners for mouse interactions (only on desktop)
	useEffect(() => {
		// Skip event listeners on mobile/tablet
		if (isMobile || !sectionRef.current) return;

		const section = sectionRef.current;

		const handleMouseMove = (e: MouseEvent) => changeFace(e);
		const handleMouseEnter = (e: MouseEvent) => {
			changeFace(e);
			intervalRef.current = setInterval(() => {
				if (currentXRef.current > 0) {
					const fakeEvent = { clientX: currentXRef.current } as MouseEvent;
					changeFace(fakeEvent);
				}
			}, 100);
		};

		const handleMouseLeave = () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
				intervalRef.current = null;
			}
			resetToDefault();
		};

		section.addEventListener("mousemove", handleMouseMove);
		section.addEventListener("mouseenter", handleMouseEnter);
		section.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			section.removeEventListener("mousemove", handleMouseMove);
			section.removeEventListener("mouseenter", handleMouseEnter);
			section.removeEventListener("mouseleave", handleMouseLeave);
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, [changeFace, resetToDefault, isMobile]);

	return (
		<section
			ref={sectionRef}
			className="relative w-full h-40 sm:h-70 overflow-hidden mt-[30px] pb-5 lg:pb-0 font-[family-name:var(--font-poppins)] dark:bg-gray-900 dark:text-gray-200"
			style={{ minHeight: isMobile ? "auto" : "100vh" }}
		>
			{/* TEXT 1 (Musician) - Left Side */}
			<div
				id="text1"
				className="absolute left-[10px] sm:left-[50px] lg:left-[40px] top-[30%] sm:top-[35%] lg:top-[38%] z-20 w-auto lg:w-1/4 -translate-y-1/2 p-0 lg:p-5 text-left lg:text-right transition-opacity duration-500 ease-out"
				style={{ opacity: text1Opacity }}
			>
				<h1 className="mb-0 lg:mb-4 text-xl sm:text-3xl lg:text-6xl font-bold leading-tight lowercase">musician</h1>
				<p className="hidden lg:block text-base leading-relaxed text-gray-600">
					I am a musician dedicated to the art of sound. I specialize in
					Keyboard, channeling my passion into composing, performing, and
					recording music.
				</p>
			</div>

		{/* Faces Container (Center) */}
		<div
			id="faces"
			className="absolute left-1/2 top-[30%] sm:top-[35%] lg:top-[48%] transition-transform duration-500 ease-out"
			style={{ transform: isMobile ? 'translate(-50%, -50%)' : containerTransform }}
		>
			{/* Mobile/Tablet: Single image (keduanya.png) centered */}
			{isMobile ? (
				<div
					className="h-[140px] w-[140px] sm:h-[260px] sm:w-[260px] bg-cover bg-center bg-[url('/keduanya.png')]"
				/>
			) : (
				/* Desktop: Two separate images */
				<div className="flex whitespace-nowrap">
					{/* FACE 1 (Musician - Left) */}
					<div 
						id="face1"
						className="float-left h-[778px] bg-cover bg-[0%_50%] bg-[url('/musisi.png')] transition-[width] duration-1000 ease-out"
						style={{ width: `${face1Width}px` }}
					/>
					{/* FACE 2 (Developer - Right) */}
					<div
						id="face2"
						className="float-left h-[778px] bg-cover bg-[100%_50%] bg-[url('/programer.png')] transition-[width] duration-1000 ease-out"
						style={{ width: `${face2Width}px` }}
					/>
				</div>
			)}
		</div>			{/* TEXT 2 (Developer) - Right Side */}
			<div
				id="text2"
				className="absolute right-[15px] sm:right-[50px] lg:right-[40px] top-[30%] sm:top-[35%] lg:top-[38%] z-20 w-auto lg:w-1/4 -translate-y-1/2 p-0 lg:p-5 text-right lg:text-left transition-opacity duration-500 ease-out"
				style={{ opacity: text2Opacity }}
			>
				<h1 className="mb-0 lg:mb-4 text-xl sm:text-3xl lg:text-6xl font-bold leading-tight">&lt;coder&gt;</h1>
				<p className="hidden lg:block text-base leading-relaxed text-gray-600">
					I am a developer with a passion for creating innovative solutions. I
					specialize in JavaScript, crafting dynamic and interactive web
					applications.
				</p>
			</div>
		</section>
	);
};

export default HeroduaSection;
