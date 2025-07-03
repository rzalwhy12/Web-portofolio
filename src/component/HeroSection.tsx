// src/components/HeroSection.tsx
"use client"
import React from 'react'; // Hapus useState karena tidak lagi mengelola navbar
import Image from 'next/image';
import Link from 'next/link';

// ==================Import Gambar (tetap diperlukan untuk HeroSection)====================
import FacebookIcon from '../assets/images/facebook.svg';
import LinkedInIcon from '../assets/images/linkedin-logo.svg';
import BehanceIcon from '../assets/images/behance.svg';
import ArrowDownIcon from '../assets/images/Scroll.svg';
import meImage from '../assets/images/me.webp';

const HeroSection: React.FC = () => {

    return (
        <div className="dark:bg bg-gray-50 text-gray-800 min-h-screen relative pb-20">

            {/* ==================Konten Utama Hero Section==================== */}
            <main id="home" className="flex flex-col lg:flex-row justify-center items-center py-20 px-4 lg:px-20 gap-12 lg:gap-24 pt-40">
                <div className="hero-content max-w-lg text-center lg:text-left">
                    <p className="text-lg text-gray-500 mb-1">— Hello</p>
                    <h1 className="text-5xl lg:text-6xl font-bold mb-5 leading-tight">I&apos;m Risal Wahyu Agustin</h1>
                    <p className="text-xl lg:text-2xl font-medium mb-5 leading-relaxed">A &quot;Full-Stack Web Developer&quot; </p>
                    <p className="text-base text-gray-600 leading-relaxed mb-10">Of course, there&apos;s so much more to me than just a few fancy titles. Scroll down and get to know me.</p>

                    {/* ==================Tombol Call-to-Action (CTA)==================== */}
                    <a
                        href="https://drive.google.com/file/d/12pUzNsMKjiJThkEx0G22i-MIEuB554jl/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gray-400 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-500 transition duration-300 ease-in-out mb-8"
                    >
                        View my-CV
                    </a>

                    {/* ==================Ikon Media Sosial==================== */}
                    <div className="flex justify-center lg:justify-start gap-5 mb-12">
                        <a href="https://www.facebook.com/risal.agosteen" target="_blank" rel="noopener noreferrer">
                            <Image src={FacebookIcon} alt="Facebook" width={24} height={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/risal-wahyu-agustin-6547b5362/" target="_blank" rel="noopener noreferrer">
                            <Image src={LinkedInIcon} alt="LinkedIn" width={24} height={24} />
                        </a>
                        <a href="https://www.behance.net/risalagustin" target="_blank" rel="noopener noreferrer">
                            <Image src={BehanceIcon} alt="Behance" width={24} height={24} />
                        </a>
                        <a href="https://x.com/RisalWahyu11493" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-6.793-8.983L5.418 21.75H1.49L9.35 12.81 1.01 2.25h8.29L12 9.313 18.244 2.25zm-2.43 14.887l.867.754h3.084l-4.24-3.665-2.478 3.298zm-9.357-11.23L4.17 3.526h-3.084l4.24 3.665L9.357 5.25z" /></svg>
                        </a>
                    </div>
                </div>
                <div className="hero-image flex justify-center">
                    <Image src={meImage} alt="Risal Wahyu Agustin" width={450} height={600} className="rounded-lg shadow-lg" />
                </div>
            </main>
            

            {/* ==================Indikator Scroll Down==================== */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-sm text-gray-500">
                <Link href="#about-me-detailed">
                    <Image src={ArrowDownIcon} alt="Scroll Down" width={70} height={70} className="mt-2.5 cursor-pointer" />
                </Link>
            </div>
        </div>
    );
};

export default HeroSection;