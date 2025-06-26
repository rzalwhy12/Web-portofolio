"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// ==================Import Gambar====================
import FacebookIcon from '../assets/images/facebook.svg';
import LinkedInIcon from '../assets/images/linkedin-logo.svg';
import BehanceIcon from '../assets/images/behance.svg';
import TwitterIcon from '../assets/images/twitter.svg';
import ArrowDownIcon from '../assets/images/Scroll.svg';
import meImage from '../assets/images/me.jpg';

const HeroSection: React.FC = () => {
    // ==================State untuk Menu Navigasi====================
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // ==================State untuk Visibilitas Navbar====================
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);

    // ==================Fungsi Toggle Menu====================
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-gray-50 text-gray-800 min-h-screen relative pb-20">
            {/* ==================Header / Navbar Utama==================== */}
            <header
                className={`fixed top-0 left-0 w-full flex justify-between items-center px-20 py-5 bg-white shadow-sm z-40 transition-opacity duration-300 ease-in-out
                ${isNavbarVisible ? 'opacity-100' : 'opacity-0'}`}
                onMouseEnter={() => setIsNavbarVisible(true)}
                onMouseLeave={() => setIsNavbarVisible(false)}
            >
                <div className="navbar-left">
                    <Link href="#home" className="text-4xl font-bold text-black tracking-custom-tight">Rzal.</Link>
                </div>
                <div className="flex items-center">
                    <button
                        className="flex items-center p-2 z-50 relative"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span className="text-base mr-2 text-gray-700">Menu</span>
                        <div className="flex flex-col justify-between w-6 h-4">
                            <span className="block w-full h-0.5 bg-gray-700 rounded-sm"></span>
                            <span className="block w-full h-0.5 bg-gray-700 rounded-sm"></span>
                            <span className="block w-full h-0.5 bg-gray-700 rounded-sm"></span>
                        </div>
                    </button>
                </div>
            </header>

            {/* ==================Konten Utama Hero Section==================== */}
            <main id="home" className="flex flex-col lg:flex-row justify-center items-center py-20 px-20 gap-24 pt-40">
                <div className="hero-content max-w-lg">
                    <p className="text-lg text-gray-500 mb-1">— Hello</p>
                    <h1 className="text-6xl font-bold mb-5 leading-tight">I'm Risal Wahyu Agustin</h1>
                    <p className="text-2xl font-medium mb-5 leading-relaxed">A "Full-Stack Web Developer" </p>
                    <p className="text-base text-gray-600 leading-relaxed mb-10">Of course, there's so much more to me than just a few fancy titles. Scroll down and get to know me.</p>

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
                    <div className="flex gap-5 mb-12">
                        <a href="https://www.facebook.com/risal.agosteen" target="_blank" rel="noopener noreferrer">
                            <Image src={FacebookIcon} alt="Facebook" width={24} height={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/risal-wahyu-agustin-6547b5362/" target="_blank" rel="noopener noreferrer">
                            <Image src={LinkedInIcon} alt="LinkedIn" width={24} height={24} />
                        </a>
                        <a href="https://www.behance.net/risalagustin" target="_blank" rel="noopener noreferrer">
                            <Image src={BehanceIcon} alt="Behance" width={24} height={24} />
                        </a>
                        <a href="https://x.com/RisalWahyu11493" target="_blank" rel="noopener noreferrer">
                            <Image src={TwitterIcon} alt="Twitter" width={24} height={24} />
                        </a>
                    </div>
                </div>
                <div className="hero-image">
                    <Image src={meImage} alt="Risal Wahyu Agustin" width={450} height={600} className="rounded-lg" />
                </div>
            </main>

            {/* ==================Indikator Scroll Down==================== */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-sm text-gray-500">
                <Link href="#about-me-detailed">
                    <Image src={ArrowDownIcon} alt="Scroll Down" width={70} height={70} className="mt-2.5 cursor-pointer" />
                </Link>
            </div>

            {/* ==================Overlay Menu Samping==================== */}
            <div
                className={`fixed top-0 right-0 h-full bg-white w-64 shadow-lg z-50 transform transition-transform duration-300 ease-in-out
                ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <button className="absolute top-5 right-5 p-2" onClick={toggleMenu} aria-label="Close menu">
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                <nav className="flex flex-col p-8 pt-20">
                    <Link href="#home" className="py-3 text-lg font-medium text-gray-800 hover:text-gray-900 transition duration-150 ease-in-out" onClick={toggleMenu}>Home</Link>
                    <Link href="#about-me-detailed" className="py-3 text-lg font-medium text-gray-800 hover:text-gray-900 transition duration-150 ease-in-out" onClick={toggleMenu}>About Me</Link>
                    <Link href="#portfolio" className="py-3 text-lg font-medium text-gray-800 hover:text-gray-900 transition duration-150 ease-in-out" onClick={toggleMenu}>Portofolio</Link>
                    <Link href="#client-testimonial" className="py-3 text-lg font-medium text-gray-800 hover:text-gray-900 transition duration-150 ease-in-out" onClick={toggleMenu}>Testimoni</Link>
                    <Link href="#contact-me" className="py-3 text-lg font-medium text-gray-800 hover:text-gray-900 transition duration-150 ease-in-out" onClick={toggleMenu}>Contact Me</Link>
                    <a
                        href="https://drive.google.com/file/d/12pUzNsMKjiJThkEx0G22i-MIEuB554jl/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 text-lg font-medium text-gray-800 hover:text-gray-900 transition duration-150 ease-in-out"
                        onClick={toggleMenu}
                    >
                        My CV
                    </a>
                </nav>
            </div>
        </div>
    );
};

export default HeroSection;