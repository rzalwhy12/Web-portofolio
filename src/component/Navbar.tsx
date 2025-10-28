// src/components/Navbar.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'; // Import useRouter
import ThemeToggleButton from './ThemeToggleButton';
import { X, Menu, ChevronDown } from 'lucide-react'; // Import Menu dan ChevronDown

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isNavbarHovered, setIsNavbarHovered] = useState(false);
    const [isAboutSubMenuOpen, setIsAboutSubMenuOpen] = useState(false); // State untuk sub-menu About Me
    const [isContactSubMenuOpen, setIsContactSubMenuOpen] = useState(false); // State untuk sub-menu Contact
    const pathname = usePathname();
    const router = useRouter(); // Inisialisasi useRouter

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        // Tutup semua sub-menu saat menu utama dibuka/tutup
        setIsAboutSubMenuOpen(false);
        setIsContactSubMenuOpen(false);
    };

    const toggleAboutSubMenu = () => {
        setIsAboutSubMenuOpen(!isAboutSubMenuOpen);
        setIsContactSubMenuOpen(false); // Tutup sub-menu lain
    };

    const toggleContactSubMenu = () => {
        setIsContactSubMenuOpen(!isContactSubMenuOpen);
        setIsAboutSubMenuOpen(false); // Tutup sub-menu lain
    };


    const getLinkHref = (sectionId: string) => {
        return pathname === '/' ? `#${sectionId}` : `/#${sectionId}`;
    };

    const handleScrollToSection = async (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string, path: string = '/') => {
        e.preventDefault();

        // Jika tidak di halaman utama, navigasi dulu ke halaman utama
        if (pathname !== path) {
            await router.push(path);
            // Beri sedikit waktu untuk halaman dimuat sebelum mencoba scroll
            setTimeout(() => {
                const targetElement = document.getElementById(sectionId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            }, 100); // Penundaan kecil, bisa disesuaikan
        } else {
            // Jika sudah di halaman utama, langsung scroll
            const targetElement = document.getElementById(sectionId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        }
        // Tutup menu mobile dan sub-menu setelah klik (jika terbuka)
        setIsMenuOpen(false);
        setIsAboutSubMenuOpen(false);
        setIsContactSubMenuOpen(false);
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
                onMouseLeave={() => {
                    setIsNavbarHovered(false);
                    // Opsional: Tutup sub-menu saat navbar tidak di-hover juga
                    setIsAboutSubMenuOpen(false);
                    setIsContactSubMenuOpen(false);
                }}
            >
                {!isNavbarHovered && (
                    <Link
                        href={getLinkHref('home')}
                        onClick={(e) => handleScrollToSection(e, 'home')}
                        className="flex-shrink-0 text-2xl lg:text-3xl font-bold text-white whitespace-nowrap"
                    >
                        Rzal.
                    </Link>
                )}

                <div
                    className={`flex-grow flex items-center justify-between
                                transition-all duration-500 ease-in-out
                                ${isNavbarHovered ? 'opacity-100 translate-x-0 delay-200' : 'opacity-0 -translate-x-4 pointer-events-none absolute left-1/2 '}
                                `}
                >
                    {isNavbarHovered && (
                        <Link
                            href={getLinkHref('home')}
                            onClick={(e) => handleScrollToSection(e, 'home')}
                            className="text-2xl lg:text-3xl font-bold text-white whitespace-nowrap"
                        >
                            Rzal.
                        </Link>
                    )}

                    <div className="flex items-center space-x-6 lg:space-x-10">
                        {/* Navigasi Utama (Desktop) */}
                        <nav className="hidden md:flex space-x-6 lg:space-x-10 text-base lg:text-lg font-medium">
                            <Link href={getLinkHref('home')} onClick={(e) => handleScrollToSection(e, 'home')} className="hover:text-purple-700 dark:hover:text-yellow-400 whitespace-nowrap">Home</Link>

                            {/* About Me with Sub-menu */}
                            <div className="relative group">
                                <button
                                    onClick={toggleAboutSubMenu}
                                    className="flex items-center hover:text-purple-700 dark:hover:text-yellow-400 focus:outline-none whitespace-nowrap"
                                >
                                    About Me <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${isAboutSubMenuOpen ? 'rotate-180' : 'rotate-0'}`} />
                                </button>
                                {isAboutSubMenuOpen && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50">
                                        <Link
                                            href={getLinkHref('about-me-detailed')}
                                            onClick={(e) => handleScrollToSection(e, 'about-me-detailed')}
                                            className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 whitespace-nowrap"
                                        >
                                            About Me
                                        </Link>
                                    </div>
                                )}
                            </div>
                            <Link href={getLinkHref('my-work-experience')} onClick={(e) => handleScrollToSection(e, 'my-work-experience')} className="hover:text-purple-700 dark:hover:text-yellow-400 whitespace-nowrap">Experience</Link>
                            <Link href={getLinkHref('portfolio')} onClick={(e) => handleScrollToSection(e, 'portfolio')} className="hover:text-purple-700 dark:hover:text-yellow-400 whitespace-nowrap">Portfolio</Link>
                            <Link href={getLinkHref('client-testimonial')} onClick={(e) => handleScrollToSection(e, 'client-testimonial')} className="hover:text-purple-700 dark:hover:text-yellow-400 whitespace-nowrap">Testimonial</Link>

                            {/* Contact with Sub-menu */}
                            <div className="relative group">
                                <button
                                    onClick={toggleContactSubMenu}
                                    className="flex items-center hover:text-purple-700 dark:hover:text-yellow-400 focus:outline-none whitespace-nowrap"
                                >
                                    Contact <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${isContactSubMenuOpen ? 'rotate-180' : 'rotate-0'}`} />
                                </button>
                                {isContactSubMenuOpen && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50">
                                        <Link
                                            href={getLinkHref('contact-me')}
                                            onClick={(e) => handleScrollToSection(e, 'contact-me')}
                                            className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 whitespace-nowrap"
                                        >
                                            Connect Me
                                        </Link>
                                        <Link
                                            href={getLinkHref('make-project')} // Asumsi ID yang berbeda, sesuaikan jika sama
                                            onClick={(e) => handleScrollToSection(e, 'make-project')}
                                            className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 whitespace-nowrap"
                                        >
                                            Make Project With Me
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </nav>

                        <div className="hidden md:block">
                            <ThemeToggleButton/>
                        </div>

                        {/* Tombol Toggle Menu untuk Mobile - Ganti dengan ikon Menu dari Lucide */}
                        <button
                            className="p-2 relative md:hidden text-white"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>

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

            {isMenuOpen && (
                <div
                    className="fixed inset-0 z-40 md:hidden"
                    onClick={toggleMenu}
                    aria-hidden="true"
                />
            )}

            {/* Mobile Menu Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-64 shadow-xl z-50 transform transition-transform duration-300 ease-in-out
                ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                bg-white dark:bg-gray-900`}
                role="dialog"
                aria-modal="true"
                onClick={(e) => e.stopPropagation()} // Prevent clicks inside sidebar from closing the overlay
                onKeyDown={(e) => {
                    if (e.key === 'Escape') toggleMenu();
                }}
            >
                <div className="flex justify-end p-6">
                    <button className="p-2 text-gray-700 dark:text-gray-200 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200" onClick={toggleMenu} aria-label="Close menu">
                        <X className="w-7 h-7" />
                    </button>
                </div>
                <nav className="flex flex-col px-6 pb-6 space-y-2">
                    <Link
                        href={getLinkHref('home')}
                        className="py-3 px-4 text-xl font-semibold text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-150 ease-in-out"
                        onClick={(e) => handleScrollToSection(e, 'home')}
                    >
                        Home
                    </Link>

                    {/* About Me Section in Mobile */}
                    <div className="relative">
                        <button
                            onClick={toggleAboutSubMenu}
                            className="flex items-center w-full justify-between py-3 px-4 text-xl font-semibold text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-150 ease-in-out"
                        >
                            About Me <ChevronDown className={`ml-1 w-5 h-5 transition-transform duration-200 ${isAboutSubMenuOpen ? 'rotate-180' : 'rotate-0'}`} />
                        </button>
                        {isAboutSubMenuOpen && (
                            <div className="flex flex-col pl-6 mt-1 space-y-1">
                                <Link
                                    href={getLinkHref('about-me-detailed')}
                                    onClick={(e) => handleScrollToSection(e, 'about-me-detailed')}
                                    className="py-2 px-4 text-lg text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-150 ease-in-out"
                                >
                                    About Me
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link
                        href={getLinkHref('my-work-experience')}
                        className="py-3 px-4 text-xl font-semibold text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-150 ease-in-out"
                        onClick={(e) => handleScrollToSection(e, 'my-work-experience')}
                    >
                        Experience
                    </Link>
                    <Link
                        href={getLinkHref('portfolio')}
                        className="py-3 px-4 text-xl font-semibold text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-150 ease-in-out"
                        onClick={(e) => handleScrollToSection(e, 'portfolio')}
                    >
                        Portfolio
                    </Link>
                    <Link
                        href={getLinkHref('client-testimonial')}
                        className="py-3 px-4 text-xl font-semibold text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-150 ease-in-out"
                        onClick={(e) => handleScrollToSection(e, 'client-testimonial')}
                    >
                        Testimonial
                    </Link>

                    {/* Contact Section in Mobile */}
                    <div className="relative">
                        <button
                            onClick={toggleContactSubMenu}
                            className="flex items-center w-full justify-between py-3 px-4 text-xl font-semibold text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-150 ease-in-out"
                        >
                            Contact <ChevronDown className={`ml-1 w-5 h-5 transition-transform duration-200 ${isContactSubMenuOpen ? 'rotate-180' : 'rotate-0'}`} />
                        </button>
                        {isContactSubMenuOpen && (
                            <div className="flex flex-col pl-6 mt-1 space-y-1">
                                <Link
                                    href={getLinkHref('contact-me')}
                                    onClick={(e) => handleScrollToSection(e, 'contact-me')}
                                    className="py-2 px-4 text-lg text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-150 ease-in-out"
                                >
                                    Connect Me
                                </Link>
                                <Link
                                    href={getLinkHref('make-project')} // Asumsi ID yang berbeda, sesuaikan jika sama
                                    onClick={(e) => handleScrollToSection(e, 'make-project')}
                                    className="py-2 px-4 text-lg text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-150 ease-in-out"
                                >
                                    Make Project With Me
                                </Link>
                            </div>
                        )}
                    </div>

                    <a
                        href="https://drive.google.com/file/d/1eEm_EsG_BBnaOchQG6JFCeGvMtYz6SfI/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 px-4 text-xl font-semibold text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-150 ease-in-out"
                        onClick={toggleMenu}
                    >
                        My CV
                    </a>
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 flex justify-center">
                        <ThemeToggleButton />
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;