import React from 'react';
import FacebookIcon from '../assets/images/facebook.svg';
import LinkedInIcon from '../assets/images/linkedin-logo.svg';
import BehanceIcon from '../assets/images/behance.svg';
import TwitterIcon from '../assets/images/twitter.svg';
import Link from 'next/link';

const ContactMe: React.FC = () => {
    return (
        // ==================Bagian Utama Contact Me====================
        <section id="contact-me" className="relative py-24 md:py-32 bg-gray-800 text-white overflow-hidden">
            {/* ==================Teks Latar Belakang "Hello"==================== */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <span className="text-[15rem] md:text-[25rem] lg:text-[30rem] font-extrabold text-gray-700 opacity-20 select-none leading-none">
                    Hello
                </span>
            </div>

            {/* ==================Konten Utama Bagian Kontak==================== */}
            <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center h-full text-center">
                <p className="text-lg mb-4 text-gray-300">Get in touch</p>
                <h2 className="text-5xl md:text-6xl font-bold mb-8">Just Say Hello!</h2>

                {/* ==================Tombol Navigasi ke Halaman ConnectMe==================== */}
                <Link href="ConnectMe" passHref>
                    <button
                        className="bg-white text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg
                        hover:bg-gray-200 transition-colors duration-300 transform hover:-translate-y-1"
                    >
                        Contact
                    </button>
                </Link>

                {/* ==================Ikon Media Sosial==================== */}
                <div className="flex space-x-8 mt-16 text-white bg-gray-50 p-4 rounded-2xl">
                    <a href="https://www.facebook.com/risal.agosteen" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-75 transition-opacity duration-200">
                        <img src={FacebookIcon.src} alt="Facebook" width={24} height={24} className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/risal-wahyu-agustin-6547b5362/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-75 transition-opacity duration-200">
                        <img src={LinkedInIcon.src} alt="LinkedIn" width={24} height={24} className="w-6 h-6" />
                    </a>
                    <a href="https://www.behance.net/risalagustin" target="_blank" rel="noopener noreferrer" aria-label="Behance" className="hover:opacity-75 transition-opacity duration-200">
                        <img src={BehanceIcon.src} alt="Behance" width={24} height={24} className="w-6 h-6" />
                    </a>
                    <a href="https://x.com/RisalWahyu11493" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:opacity-75 transition-opacity duration-200">
                        <img src={TwitterIcon.src} alt="Twitter" width={24} height={24} className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;