"use client"
import React, { useState } from 'react';
import Image from 'next/image';

// Import images as modules. Adjust paths based on your actual file structure.
import SearchIcon from '../assets/images/search.svg';
import FacebookIcon from '../assets/images/facebook.svg';
import LinkedInIcon from '../assets/images/linkedin-logo.svg';
import BehanceIcon from '../assets/images/behance.svg';
import TwitterIcon from '../assets/images/twitter.svg';
import ArrowDownIcon from '../assets/images/Scroll.svg';
import meImage from '../assets/images/me.jpg';

const HeroSection: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isSearchOpen) setIsSearchOpen(false);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        if (isSearchOpen) setSearchQuery('');
        if (isMenuOpen) setIsMenuOpen(false);
    };

    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = () => {
        if (searchQuery.trim()) {
            console.log('Searching for:', searchQuery);
            // Anda bisa menambahkan logika pencarian di sini,
            // seperti redirect ke halaman hasil pencarian atau filter data.
            // Contoh: router.push(`/search?q=${searchQuery}`);
            setIsSearchOpen(false);
            setSearchQuery('');
        }
    };

    return (
        <div className="bg-gray-50 text-gray-800 min-h-screen relative pb-20">
            <header className="flex justify-between items-center px-20 py-5 bg-white shadow-sm">
                <div className="navbar-left">
                    <span className="text-4xl font-bold text-black tracking-custom-tight">Rzal.</span>
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

            <div className="absolute top-5 left-1/2 -translate-x-1/2 z-30">
                {!isSearchOpen ? (
                    <button className="p-2" onClick={toggleSearch}>
                        <Image src={SearchIcon} alt="Search" width={30} height={30} />
                    </button>
                ) : (
                    <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg py-4 px-8 transition-all duration-300 ease-in-out">
                        <div className="flex items-center justify-center">
                            <input
                                type="text"
                                placeholder="Cari halaman berdasarkan judul..."
                                className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                value={searchQuery}
                                onChange={handleSearchInputChange}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        handleSearchSubmit();
                                    }
                                }}
                            />
                            <button
                                className="ml-4 p-3 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition duration-150 ease-in-out"
                                onClick={handleSearchSubmit}
                            >
                                Cari
                            </button>
                            <button className="ml-4 p-2 text-gray-700 hover:text-gray-900" onClick={toggleSearch}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <main className="flex flex-col lg:flex-row justify-center items-center py-20 px-20 gap-24">
                <div className="hero-content max-w-lg">
                    <p className="text-lg text-gray-500 mb-1">— Hello</p>
                    <h1 className="text-6xl font-bold mb-5 leading-tight">I'm Risal Wahyu Agustin</h1>
                    <p className="text-2xl font-medium mb-5 leading-relaxed">A "Full-Stack Web Developer" </p>
                    <p className="text-base text-gray-600 leading-relaxed mb-10">Of course, there's so much more to me than just a few fancy titles. Scroll down and get to know me.</p>

                    {/* Tombol Call-to-Action (CTA) baru */}
                    <button className="bg-gray-400 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-500 transition duration-300 ease-in-out mb-8 ">
                        View Portfolio
                    </button>

                    <div className="flex gap-5 mb-12">
                        <a href="#"><Image src={FacebookIcon} alt="Facebook" width={24} height={24} /></a>
                        <a href="#"><Image src={LinkedInIcon} alt="LinkedIn" width={24} height={24} /></a>
                        <a href="#"><Image src={BehanceIcon} alt="Behance" width={24} height={24} /></a>
                        <a href="#"><Image src={TwitterIcon} alt="Twitter" width={24} height={24} /></a>
                    </div>
                </div>
                <div className="hero-image">
                    <Image src={meImage} alt="Risal Wahyu Agustin" width={450} height={600} className="rounded-lg" />
                </div>
            </main>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-sm text-gray-500">
                <Image src={ArrowDownIcon} alt="Scroll Down" width={70} height={70} className="mt-2.5" />
            </div>

            <div
                className={`fixed top-0 right-0 h-full bg-white w-64 shadow-lg z-50 transform transition-transform duration-300 ease-in-out
                ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <button className="absolute top-5 right-5 p-2" onClick={toggleMenu} aria-label="Close menu">
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                <nav className="flex flex-col p-8 pt-20">
                    <a href="#" className="py-3 text-lg font-medium text-gray-800 hover:text-gray-900 transition duration-150 ease-in-out">Home</a>
                    <a href="#" className="py-3 text-lg font-medium text-gray-800 hover:text-gray-900 transition duration-150 ease-in-out">About Me</a>
                    <a href="#" className="py-3 text-lg font-medium text-gray-800 hover:text-gray-900 transition duration-150 ease-in-out">Portofolio</a>
                    <a href="#" className="py-3 text-lg font-medium text-gray-800 hover:text-gray-900 transition duration-150 ease-in-out">Testimoni</a>
                    <a href="#" className="py-3 text-lg font-medium text-gray-800 hover:text-gray-900 transition duration-150 ease-in-out">Contact Me</a>
                    <a href="#" className="py-3 text-lg font-medium text-gray-800 hover:text-gray-900 transition duration-150 ease-in-out">My CV</a>
                </nav>
            </div>
        </div>
    );
};

export default HeroSection;