// src/components/ContactMe.tsx
"use client"; // Tambahkan ini karena Link dan interaksi lainnya menjadikan ini Client Component

import React from 'react';
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
                    dark:text-gray-500 dark:opacity-10 // Gaya untuk mode gelap (dibuat lebih samar)
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
                    <a href="https://www.facebook.com/risal.agosteen" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                            className="text-gray-600 hover:text-gray-800 transition-colors duration-200
                                dark:text-gray-400 dark:hover:text-purple-400">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 13.5h2.5l1-4H14V6.5c0-1.54 0.5-2.5 2.75-2.5H19V0h-3.5C11.95 0 10 1.94 10 5.24V8.5H7v4h3v8h4v-7.5z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/risal-wahyu-agustin-6547b5362/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                            className="text-gray-700 hover:text-gray-900 transition-colors duration-200
                                dark:text-gray-400 dark:hover:text-purple-400">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54c0 .96.79 1.73 1.77 1.73h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0zM7.34 20.47H3.59V9.49h3.75v10.98zM5.47 7.9c-1.2 0-2.17-.98-2.17-2.18 0-1.2.97-2.18 2.17-2.18s2.17.98 2.17 2.18c-.01 1.2-.97 2.18-2.17 2.18zM20.47 20.47h-3.75v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97v5.69h-3.75V9.49h3.6v1.65h.05c.5-.95 1.72-1.95 3.55-1.95 3.8 0 4.5 2.5 4.5 5.77v6.01z" />
                            </svg>
                        </a>
                        <a href="https://www.behance.net/risalagustin" target="_blank" rel="noopener noreferrer" aria-label="Behance"
                            className="text-gray-800 hover:text-gray-900 transition-colors duration-200
                                    dark:text-gray-400 dark:hover:text-purple-400">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.5 12c0-5.25 4.25-9.5 9.5-9.5S21.5 6.75 21.5 12 17.25 21.5 12 21.5 2.5 17.25 2.5 12zM15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
                            </svg>
                        </a>
                        <a href="https://x.com/RisalWahyu11493" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
                            className="text-gray-400 hover:text-gray-600 transition-colors duration-200
                                    dark:text-gray-300 dark:hover:text-purple-400">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-6.793-8.983L5.418 21.75H1.49L9.35 12.81 1.01 2.25h8.29L12 9.313 18.244 2.25zm-2.43 14.887l.867.754h3.084l-4.24-3.665-2.478 3.298zm-9.357-11.23L4.17 3.526h-3.084l4.24 3.665L9.357 5.25z" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/rzalwhy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                            className="text-gray-400 hover:text-gray-600 transition-colors duration-200
                                    dark:text-gray-300 dark:hover:text-purple-400">
                            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5Z"></path>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <path d="M17.5 6.5C17.5 6.77614 17.2761 7 17 7C16.7239 7 16.5 6.77614 16.5 6.5C16.5 6.22386 16.7239 6 17 6C17.2761 6 17.5 6.22386 17.5 6.5Z" fill="currentColor" stroke="none"></path>
                            </svg>
                        </a>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;