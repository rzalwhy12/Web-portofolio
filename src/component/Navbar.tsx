// src/components/Navbar.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggleButton from './ThemeToggleButton'; 
import { Menu, X } from 'lucide-react';



const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isNavbarHovered, setIsNavbarHovered] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const getLinkHref = (sectionId: string) => {
        return pathname === '/' ? `#${sectionId}` : `/#${sectionId}`;
    };

    return (
        <>
            <header
                className={`fixed top-5 left-1/2 -translate-x-1/2 flex items-center
                            bg-gray-800/30 text-white rounded-full p-2 shadow-lg z-40
                            backdrop-filter backdrop-blur-lg border border-white border-opacity-20
                            transition-all duration-500 ease-in-out
                            ${isNavbarHovered ? 'w-[calc(100%-80px)] px-8 py-3 justify-between' : 'w-24 px-4 py-2 justify-center'}
                            lg:${isNavbarHovered ? 'w-[calc(100%-200px)] px-8 py-3' : 'w-28 px-4 py-2'}
                            dark:bg-gray-900/30 dark:border-gray-700 dark:border-opacity-20
                            `}
                onMouseEnter={() => setIsNavbarHovered(true)}
                onMouseLeave={() => setIsNavbarHovered(false)}
            >
                {/* Logo / Title saat tidak di-hover */}
                {!isNavbarHovered && (
                    <Link href={getLinkHref('home')} className="flex-shrink-0 text-2xl lg:text-3xl font-bold text-white whitespace-nowrap">
                        Rzal.
                    </Link>
                )}

                {/* Konten yang muncul saat di-hover */}
                <div
                    className={`flex-grow flex items-center justify-between
                                transition-all duration-500 ease-in-out
                                ${isNavbarHovered ? 'opacity-100 translate-x-0 delay-200' : 'opacity-0 -translate-x-4 pointer-events-none absolute left-1/2 '}
                                `}
                >
                    {/* Logo / Title saat di-hover */}
                    {isNavbarHovered && (
                        <Link href={getLinkHref('home')} className="text-2xl lg:text-3xl font-bold text-white whitespace-nowrap">
                            Rzal.
                        </Link>
                    )}

                    {/* Konten Menu dan Tombol */}
                    <div className="flex items-center space-x-6 lg:space-x-10">
                        {/* Navigasi Utama (Desktop) */}
                        <nav className="hidden md:flex space-x-6 lg:space-x-10 text-base lg:text-lg font-medium">
                            <Link href={getLinkHref('home')} className="hover:text-yellow-900 dark:hover:text-yellow-400 whitespace-nowrap">Home</Link>
                            <Link href={getLinkHref('about-me-detailed')} className="hover:text-yellow-900 dark:hover:text-yellow-400 whitespace-nowrap">About Me</Link>
                            <Link href={getLinkHref('portfolio')} className="hover:text-yellow-900 dark:hover:text-yellow-400 whitespace-nowrap">Portfolio</Link>
                            <Link href={getLinkHref('client-testimonial')} className="hover:text-yellow-900 dark:hover:text-yellow-400 whitespace-nowrap">Testimonial</Link>
                            <Link href={getLinkHref('contact-me')} className="hover:text-yellow-900 dark:hover:text-yellow-400 whitespace-nowrap">Contact</Link>
                        </nav>

                        {/* Tombol Dark Mode (Desktop) - hanya terlihat saat navbar di-hover */}
                        <div className="hidden md:block">
                            <ThemeToggleButton />
                        </div>

                        {/* Tombol Toggle Menu untuk Mobile */}
                        <button
                            className="flex justify-between p-1 relative md:hidden"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            <div className="flex flex-col justify-between w-6 h-4">
                                <span className="block w-full h-0.5 bg-white rounded-sm dark:bg-gray-200"></span>
                                <span className="block w-full h-0.5 bg-white rounded-sm dark:bg-gray-200"></span>
                                <span className="block w-full h-0.5 bg-white rounded-sm dark:bg-gray-200"></span>
                            </div>
                        </button>

                        {/* Tombol View CV (Desktop) - hanya terlihat saat navbar di-hover */}
                        <a
                            href="https://drive.google.com/file/d/12pUzNsMKjiJThkEx0G22i-MIEuB554jl/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:inline-block bg-white text-gray-800 px-4 py-2 rounded-full text-base font-medium
                                    hover:bg-gray-200 transition duration-300 ease-in-out
                                    dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 whitespace-nowrap"
                        >
                            View CV
                        </a>
                    </div>
                </div>
            </header>

            {/* Overlay untuk mobile menu */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={toggleMenu}
                ></div>
            )}

            {/* Mobile Menu Sidebar */}
                        <div
                className={`fixed top-0 right-0 h-full w-64 shadow-xl z-50 transform transition-transform duration-300 ease-in-out
                ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                bg-white dark:bg-gray-900`}
            >
                <div className="flex justify-end p-6"> {/* Kontainer untuk tombol close */}
                    <button className="p-2 text-gray-700 dark:text-gray-200 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200" onClick={toggleMenu} aria-label="Close menu">
                        <X className="w-7 h-7" /> {/* Ikon X lebih besar sedikit */}
                    </button>
                </div>
                <nav className="flex flex-col px-6 pb-6 space-y-2"> {/* Kurangi padding atas, gunakan space-y untuk jarak antar link */}
                    <Link
                        href={getLinkHref('home')}
                        className="py-3 px-4 text-xl font-semibold text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-150 ease-in-out"
                        onClick={toggleMenu}
                    >
                        Home
                    </Link>
                    <Link
                        href={getLinkHref('about-me-detailed')}
                        className="py-3 px-4 text-xl font-semibold text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-150 ease-in-out"
                        onClick={toggleMenu}
                    >
                        About Me
                    </Link>
                    <Link
                        href={getLinkHref('portfolio')}
                        className="py-3 px-4 text-xl font-semibold text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-150 ease-in-out"
                        onClick={toggleMenu}
                    >
                        Portfolio
                    </Link>
                    <Link
                        href={getLinkHref('client-testimonial')}
                        className="py-3 px-4 text-xl font-semibold text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-150 ease-in-out"
                        onClick={toggleMenu}
                    >
                        Testimonial
                    </Link>
                    <Link
                        href={getLinkHref('contact-me')}
                        className="py-3 px-4 text-xl font-semibold text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-150 ease-in-out"
                        onClick={toggleMenu}
                    >
                        Contact Me
                    </Link>
                    <a
                        href="https://drive.google.com/file/d/12pUzNsMKjiJThkEx0G22i-MIEuB554jl/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 px-4 text-xl font-semibold text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-150 ease-in-out"
                        onClick={toggleMenu}
                    >
                        My CV
                    </a>
                    {/* Tombol Dark Mode (Mobile) - di dalam sidebar */}
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 flex justify-center"> {/* Posisikan di tengah */}
                        <ThemeToggleButton />
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;