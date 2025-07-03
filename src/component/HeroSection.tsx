// src/components/HeroSection.tsx
"use client"
import React from 'react';
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
        // Latar belakang utama: abu-abu terang di light mode, hitam di dark mode
        // Teks utama: abu-abu gelap di light mode, abu-abu terang di dark mode
        <div className="dark:bg-gray-900 bg-gray-50 text-gray-800 dark:text-gray-200 min-h-screen relative pb-20">

            {/* ==================Konten Utama Hero Section==================== */}
            <main id="home" className="flex flex-col lg:flex-row justify-center items-center py-20 px-4 lg:px-20 gap-12 lg:gap-24 pt-40">
                <div className="hero-content max-w-lg text-center lg:text-left">
                    {/* Warna teks "Hello" */}
                    <p className="text-lg text-gray-500 dark:text-gray-400 mb-1">— Hello</p>
                    {/* Warna judul utama */}
                    <h1 className="text-5xl lg:text-6xl font-bold mb-5 leading-tight text-gray-800 dark:text-white">I&apos;m Risal Wahyu Agustin</h1>
                    {/* Warna sub-judul */}
                    <p className="text-xl lg:text-2xl font-medium mb-5 leading-relaxed text-gray-800 dark:text-gray-200">A &quot;Full-Stack Web Developer&quot; </p>
                    {/* Warna paragraf deskripsi */}
                    <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-10">Of course, there&apos;s so much more to me than just a few fancy titles. Scroll down and get to know me.</p>

                    {/* ==================Tombol Call-to-Action (CTA)==================== */}
                    <a
                        href="https://drive.google.com/file/d/12pUzNsMKjiJThkEx0G22i-MIEuB554jl/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        // Latar belakang tombol: abu-abu gelap di light mode, ungu di dark mode
                        // Teks tombol: putih di light mode, putih di dark mode
                        // Hover: abu-abu gelap di light mode, ungu-700 di dark mode
                        className="inline-block bg-gray-400 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-500 transition duration-300 ease-in-out dark:bg-purple-600 dark:hover:bg-purple-700 mb-8"
                    >
                        View my-CV
                    </a>

                    {/* ==================Ikon Media Sosial==================== */}
                    <div className="flex justify-center lg:justify-start gap-5 mb-12">
                        {/* Ikon SVG biasanya perlu diwarnai ulang menggunakan `filter` atau `currentColor` dan `text-color` */}
                        {/* Jika ikon Anda adalah file SVG asli yang langsung di-inline atau jika Anda bisa mengubah `fill` mereka,
                            Anda bisa menggunakan `dark:filter dark:invert` pada Image atau langsung `text-gray-400 dark:text-gray-200`
                            jika SVG menggunakan `fill="currentColor"`.
                            Untuk kesederhanaan, saya tambahkan `opacity` untuk memberikan sedikit perbedaan di dark mode jika ikon tidak berubah warna.
                            Idealnya, ikon SVG Anda harus mendukung perubahan `fill` melalui `currentColor` agar bisa merespons `text-color`.
                        */}
                        <a href="https://www.facebook.com/risal.agosteen" target="_blank" rel="noopener noreferrer" className="opacity-70 dark:opacity-90 hover:opacity-100 transition-opacity duration-200">
                            <Image src={FacebookIcon} alt="Facebook" width={24} height={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/risal-wahyu-agustin-6547b5362/" target="_blank" rel="noopener noreferrer" className="opacity-70 dark:opacity-90 hover:opacity-100 transition-opacity duration-200">
                            <Image src={LinkedInIcon} alt="LinkedIn" width={24} height={24} />
                        </a>
                        <a href="https://www.behance.net/risalagustin" target="_blank" rel="noopener noreferrer" className="opacity-70 dark:opacity-90 hover:opacity-100 transition-opacity duration-200">
                            <Image src={BehanceIcon} alt="Behance" width={24} height={24} />
                        </a>
                        <a href="https://x.com/RisalWahyu11493" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-gray-600 transition-colors duration-200 dark:text-gray-300 dark:hover:text-white">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-6.793-8.983L5.418 21.75H1.49L9.35 12.81 1.01 2.25h8.29L12 9.313 18.244 2.25zm-2.43 14.887l.867.754h3.084l-4.24-3.665-2.478 3.298zm-9.357-11.23L4.17 3.526h-3.084l4.24 3.665L9.357 5.25z" /></svg>
                        </a>
                    </div>
                </div>
                <div className="hero-image flex justify-center">
                    {/* Shadow gambar: shadow-lg di light, shadow-2xl dan warna gelap di dark */}
                    <Image src={meImage} alt="Risal Wahyu Agustin" width={450} height={600} className="rounded-lg shadow-lg dark:shadow-2xl dark:shadow-purple-900/50" />
                </div>
            </main>

            {/* ==================Indikator Scroll Down==================== */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-sm text-gray-500 dark:text-gray-400">
                <Link href="#about-me-detailed">
                    {/* Ikon ArrowDownIcon, jika ini SVG yang bisa diwarnai dengan text-color, bisa pakai dark:text-color */}
                    {/* Atau jika Anda ingin efek invert: dark:filter dark:invert */}
                    <Image src={ArrowDownIcon} alt="Scroll Down" width={70} height={70} className="mt-2.5 cursor-pointer dark:filter dark:invert" />
                </Link>
            </div>
        </div>
    );
};

export default HeroSection;