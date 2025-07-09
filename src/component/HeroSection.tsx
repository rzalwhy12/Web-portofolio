"use client"
import React from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import ArrowDownIcon from '../assets/images/Scroll.svg';
import meImage from '../assets/images/me.webp';


const HeroSection: React.FC = () => {
    const pathname = usePathname();
    const router = useRouter();

    const getLinkHref = (sectionId: string) => {
        return pathname === '/' ? `#${sectionId}` : `/#${sectionId}`;
    };

    const handleScrollToSection = async (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();

        const targetPath = '/';

        if (pathname !== targetPath) {
            await router.push(targetPath);
            setTimeout(() => {
                const targetElement = document.getElementById(sectionId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            }, 100);
        } else {
            const targetElement = document.getElementById(sectionId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        }
    };

    return (
        <div className="dark:bg-gray-900 bg-gray-50 text-gray-800 dark:text-gray-200 min-h-screen relative pb-20">

            <main id="home" className="flex flex-col lg:flex-row justify-center items-center py-20 px-4 lg:px-20 gap-12 lg:gap-24 pt-40">
                <div className="hero-content max-w-lg text-center lg:text-left">
                    <p className="text-lg text-gray-500 dark:text-gray-400 mb-1">— Hello</p>
                    <h1 className="text-5xl lg:text-6xl font-bold mb-5 leading-tight text-gray-800 dark:text-white">I&apos;m Risal Wahyu Agustin</h1>
                    <p className="text-xl lg:text-2xl font-medium mb-5 leading-relaxed text-gray-800 dark:text-gray-200">A &quot;Full-Stack Web Developer&quot; </p>
                    <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-10">Of course, there&apos;s so much more to me than just a few fancy titles. Scroll down and get to know me.</p>

                    <a
                        href="https://drive.google.com/file/d/12pUzNsMKjiJThkEx0G22i-MIEuB554jl/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gray-400 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-500 transition duration-300 ease-in-out dark:bg-purple-600 dark:hover:bg-purple-700 mb-8"
                    >
                        View my-CV
                    </a>

                    <div className="flex justify-center lg:justify-start gap-5 mb-12">

                        <a href="https://www.facebook.com/risal.agosteen" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                            className="text-gray-600 hover:text-gray-800 transition-colors duration-200
                                dark:text-gray-400 dark:hover:text-white">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 13.5h2.5l1-4H14V6.5c0-1.54 0.5-2.5 2.75-2.5H19V0h-3.5C11.95 0 10 1.94 10 5.24V8.5H7v4h3v8h4v-7.5z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/risal-wahyu-agustin-6547b5362/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                            className="text-gray-700 hover:text-gray-900 transition-colors duration-200
                                dark:text-gray-400 dark:hover:text-white">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54c0 .96.79 1.73 1.77 1.73h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0zM7.34 20.47H3.59V9.49h3.75v10.98zM5.47 7.9c-1.2 0-2.17-.98-2.17-2.18 0-1.2.97-2.18 2.17-2.18s2.17.98 2.17 2.18c-.01 1.2-.97 2.18-2.17 2.18zM20.47 20.47h-3.75v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97v5.69h-3.75V9.49h3.6v1.65h.05c.5-.95 1.72-1.95 3.55-1.95 3.8 0 4.5 2.5 4.5 5.77v6.01z" />
                            </svg>
                        </a>
                        <a href="https://www.behance.net/risalagustin" target="_blank" rel="noopener noreferrer" aria-label="Behance"
                            className="text-gray-800 hover:text-gray-900 transition-colors duration-200
                                    dark:text-gray-400 dark:hover:text-white">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.5 12c0-5.25 4.25-9.5 9.5-9.5S21.5 6.75 21.5 12 17.25 21.5 12 21.5 2.5 17.25 2.5 12zM15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
                            </svg>
                        </a>
                        <a href="https://x.com/RisalWahyu11493" target="_blank" rel="noopener noreferrer" aria-label="X"
                            className="text-gray-400 hover:text-gray-600 transition-colors duration-200
                                    dark:text-gray-300 dark:hover:text-white">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-6.793-8.983L5.418 21.75H1.49L9.35 12.81 1.01 2.25h8.29L12 9.313 18.244 2.25zm-2.43 14.887l.867.754h3.084l-4.24-3.665-2.478 3.298zm-9.357-11.23L4.17 3.526h-3.084l4.24 3.665L9.357 5.25z" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/rzalwhy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                            className="text-gray-400 hover:text-gray-600 transition-colors duration-200
                                    dark:text-gray-300 dark:hover:text-white">
                            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5Z"></path>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <path d="M17.5 6.5C17.5 6.77614 17.2761 7 17 7C16.7239 7 16.5 6.77614 16.5 6.5C16.5 6.22386 16.7239 6 17 6C17.2761 6 17.5 6.22386 17.5 6.5Z" fill="currentColor" stroke="none"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="hero-image flex justify-center">
                    <Image src={meImage} alt="Risal Wahyu Agustin" width={450} height={600} className="rounded-lg shadow-lg dark:shadow-2xl dark:shadow-purple-900/50" />
                </div>
            </main>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-sm text-gray-500 dark:text-gray-400">
                <a
                    href={getLinkHref('about-video-section')}
                    onClick={(e) => handleScrollToSection(e, 'about-video-section')}
                    aria-label="Scroll to About Me section"
                >
                    <Image src={ArrowDownIcon} alt="Scroll Down" width={70} height={70} className="mt-2.5 cursor-pointer dark:filter dark:invert" />
                </a>
            </div>
        </div>
    );
};

export default HeroSection;