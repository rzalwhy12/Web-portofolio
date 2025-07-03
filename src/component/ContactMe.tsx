// src/components/ContactMe.tsx
"use client"; // Tambahkan ini karena Link dan interaksi lainnya menjadikan ini Client Component

import React from 'react';
import Image from 'next/image'; // Gunakan Image dari next/image untuk optimasi

// Import SVG images
import FacebookIcon from '../assets/images/facebook.svg';
import LinkedInIcon from '../assets/images/linkedin-logo.svg';
import BehanceIcon from '../assets/images/behance.svg';
import TwitterIcon from '../assets/images/twitter.svg'; // Pastikan ini juga SVG jika ingin dikontrol dengan fill-current/dark:invert
import Link from 'next/link';

const ContactMe: React.FC = () => {
    return (
        // ==================Bagian Utama Contact Me====================
        <section
            id="contact-me"
            className="
                relative py-24 md:py-32 overflow-hidden
                bg-gray-800 text-white // Gaya default (mode terang jika tidak ada kelas 'dark')
                dark:bg-gray-950 dark:text-gray-100 // Gaya untuk mode gelap
            "
        >
            {/* ==================Teks Latar Belakang "Hello"==================== */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <span className="
                    text-[15rem] md:text-[25rem] lg:text-[30rem] font-extrabold select-none leading-none
                    text-gray-700 opacity-20 // Gaya default
                    dark:text-gray-800 dark:opacity-10 // Gaya untuk mode gelap (dibuat lebih samar)
                ">
                    Hello
                </span>
            </div>

            {/* ==================Konten Utama Bagian Kontak==================== */}
            <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center h-full text-center">
                <p className="text-lg mb-4 text-gray-300 dark:text-gray-400">Get in touch</p>
                <h2 className="text-5xl md:text-6xl font-bold mb-8 dark:text-white">Just Say Hello!</h2>

                {/* ==================Tombol Navigasi ke Halaman ConnectMe==================== */}
                {/* Pastikan `href` mengarah ke halaman ConnectMe yang benar (misal: /connectme jika rute Anda adalah /connectme) */}
                <Link href="/ConnectMe" passHref>
                    <button
                        className="
                            bg-white text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg
                            hover:bg-gray-200 transition-colors duration-300 transform hover:-translate-y-1
                            dark:bg-purple-600 dark:text-white dark:hover:bg-purple-700 dark:shadow-xl dark:shadow-purple-700/50 // Warna dan bayangan di dark mode
                        "
                    >
                        Contact
                    </button>
                </Link>

                {/* ==================Ikon Media Sosial==================== */}
                <div className="
                    flex space-x-8 mt-16 p-4 rounded-2xl
                    bg-gray-50 text-white // Default background for light mode. inherited from section
                    dark:bg-gray-700 dark:text-gray-100 // Background and text for dark mode
                ">
                    {/* Untuk ikon SVG yang diimpor sebagai Image, gunakan dark:invert untuk membalikkan warnanya */}
                    <a href="https://www.facebook.com/risal.agosteen" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-75 transition-opacity duration-200">
                        <Image src={FacebookIcon} alt="Facebook" width={24} height={24} className="w-6 h-6 dark:invert" />
                    </a>
                    <a href="https://www.linkedin.com/in/risal-wahyu-agustin-6547b5362/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-75 transition-opacity duration-200">
                        <Image src={LinkedInIcon} alt="LinkedIn" width={24} height={24} className="w-6 h-6 dark:invert" />
                    </a>
                    <a href="https://www.behance.net/risalagustin" target="_blank" rel="noopener noreferrer" aria-label="Behance" className="hover:opacity-75 transition-opacity duration-200">
                        <Image src={BehanceIcon} alt="Behance" width={24} height={24} className="w-6 h-6 dark:invert" />
                    </a>
                    {/* Untuk SVG yang di-inline (seperti Twitter Anda), warna fill-current akan mengikuti warna teks parent `<a>` */}
                    <a href="https://x.com/RisalWahyu11493" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
                        className="
                            text-gray-500 hover:text-gray-300 transition-colors duration-200
                        ">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-6.793-8.983L5.418 21.75H1.49L9.35 12.81 1.01 2.25h8.29L12 9.313 18.244 2.25zm-2.43 14.887l.867.754h3.084l-4.24-3.665-2.478 3.298zm-9.357-11.23L4.17 3.526h-3.084l4.24 3.665L9.357 5.25z" /></svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;