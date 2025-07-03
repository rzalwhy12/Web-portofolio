"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import PersonImg from '../assets/images/Col-block.png'; // Pastikan path ini benar
import PersonImg2 from '../assets/images/r7.webp';

// ==================Data Testimonial====================
const testimonials = [
    {
        id: 1,
        name: 'Ronaldo',
        title: 'Goat',
        quote: 'Kerjanya bagus , anaknya rajin cuma makannya agak banyak tapi ofer ol rekomendet',
        image: PersonImg2,
    },
    {
        id: 2,
        name: 'Teman Ayahnya Risal',
        title: 'Bos Batubarabere',
        quote: 'Sangat jenius sampai saya tidak bisa berkata-kata , saya ada cerita tapi saya lupa',
        image: PersonImg
    }
];

const ClientTestimonial: React.FC = () => {
    // ==================State Manajemen Testimonial====================
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
    const currentTestimonial = testimonials[currentTestimonialIndex];

    // ==================Fungsi Navigasi Testimonial Berikutnya====================
    const goToNextTestimonial = () => {
        setCurrentTestimonialIndex((prevIndex) =>
            (prevIndex + 1) % testimonials.length
        );
    };

    // ==================Fungsi Navigasi Testimonial Sebelumnya====================
    const goToPreviousTestimonial = () => {
        setCurrentTestimonialIndex((prevIndex) =>
            (prevIndex - 1 + testimonials.length) % testimonials.length
        );
    };

    // ==================Fungsi Navigasi Testimonial Spesifik====================
    const goToSpecificTestimonial = (index: number) => {
        setCurrentTestimonialIndex(index);
    };

    return (
        // ==================Bagian Utama Testimonial Klien====================
        <section
            id="client-testimonial"
            // Latar belakang di light mode: abu-abu terang (50), di dark mode: abu-abu sangat gelap (900)
            className="py-20 bg-gray-50 dark:bg-gray-900"
        >
            <div className="container mx-auto px-4 text-center">
                {/* ==================Judul Bagian==================== */}
                <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">Client Testimonial</h2>

                {/* ==================Wadah Konten Testimonial==================== */}
                <div
                    // Latar belakang di light mode: putih, di dark mode: abu-abu gelap (800)
                    // Shadow di light mode: shadow-lg, di dark mode: shadow-xl dengan warna ungu transparan
                    className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-16 max-w-4xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-xl dark:shadow-purple-900/50"
                >
                    {/* ==================Gambar Klien==================== */}
                    <div
                        // Shadow di light mode: shadow-md, di dark mode: shadow-lg dengan warna ungu transparan
                        className="flex-shrink-0 w-48 h-48 sm:w-64 sm:h-64 rounded-lg overflow-hidden shadow-md dark:shadow-lg dark:shadow-purple-900/40"
                    >
                        <Image
                            src={currentTestimonial.image}
                            alt={currentTestimonial.name}
                            className="w-full h-full object-cover"
                            width={256}
                            height={256}
                        />
                    </div>

                    {/* ==================Detail Testimonial & Klien==================== */}
                    <div className="flex-grow text-left">
                        {/* Tanda kutip atas */}
                        <p className="text-5xl font-extrabold text-gray-400 dark:text-gray-600 mb-4 select-none">&ldquo;</p>
                        {/* Teks kutipan testimonial */}
                        <p className="text-xl leading-relaxed text-gray-800 dark:text-gray-200 mb-6">
                            {currentTestimonial.quote}
                        </p>
                        {/* Tanda kutip bawah */}
                        <p className="text-5xl font-extrabold text-gray-400 dark:text-gray-600 mb-8 text-right select-none">&rdquo;</p>

                        {/* Nama klien */}
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{currentTestimonial.name}</h3>
                        {/* Jabatan klien */}
                        <p className="text-base text-gray-600 dark:text-gray-400">{currentTestimonial.title}</p>

                        {/* ==================Navigasi Testimonial==================== */}
                        <div className="flex justify-between items-center mt-10">
                            {/* ==================Indikator Titik==================== */}
                            <div className="flex space-x-2">
                                {testimonials.map((_, index) => (
                                    <span
                                        key={index}
                                        className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-colors duration-200 ${
                                            // Warna dot aktif di light mode: abu-abu gelap (900), di dark mode: ungu (600)
                                            // Warna dot tidak aktif di light mode: abu-abu (400), di dark mode: abu-abu gelap (600)
                                            index === currentTestimonialIndex ? 'bg-gray-900 dark:bg-purple-600' : 'bg-gray-400 dark:bg-gray-600'
                                        }`}
                                        onClick={() => goToSpecificTestimonial(index)}
                                    ></span>
                                ))}
                            </div>
                            {/* ==================Tombol Panah==================== */}
                            <div className="flex space-x-4 text-gray-900 dark:text-white text-3xl font-bold">
                                <span
                                    className="cursor-pointer select-none hover:text-gray-700 dark:hover:text-purple-400 transition-colors duration-200"
                                    onClick={goToPreviousTestimonial}
                                >
                                    &larr;
                                </span>
                                <span
                                    className="cursor-pointer select-none hover:text-gray-700 dark:hover:text-purple-400 transition-colors duration-200"
                                    onClick={goToNextTestimonial}
                                >
                                    &rarr;
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientTestimonial;