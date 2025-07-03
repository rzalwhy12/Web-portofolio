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
            className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300" // Tambah transition untuk background
        >
            <div className="container mx-auto px-4 text-center">
                {/* ==================Judul Bagian==================== */}
                <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">Client Testimonial</h2>

                {/* ==================Wadah Konten Testimonial==================== */}
                <div
                    // MODIFIKASI INI: padding dan gap untuk mobile lebih kecil, transisi untuk tampilan futuristik
                    className="flex flex-col md:flex-row items-center md:items-start justify-center
                               gap-6 md:gap-16 max-w-4xl mx-auto
                               p-6 md:p-8 lg:p-12 // Padding yang responsif
                               bg-white dark:bg-gray-800 rounded-xl // rounded-xl untuk sedikit lebih modern
                               shadow-lg dark:shadow-xl dark:shadow-purple-900/50
                               transform hover:scale-[1.01] transition-transform duration-300 ease-in-out // Efek hover
                               border border-gray-100 dark:border-gray-700 // Border tipis untuk minimalis
                               "
                >
                    {/* ==================Gambar Klien==================== */}
                    <div
                        // MODIFIKASI INI: ukuran gambar di mobile lebih kecil, bayangan lebih futuristik
                        className="flex-shrink-0 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 // Ukuran responsif
                                   rounded-full overflow-hidden // Membuat gambar lingkaran penuh
                                   shadow-lg dark:shadow-2xl dark:shadow-purple-700/60 // Bayangan lebih menonjol
                                   border-2 border-purple-400 dark:border-purple-600 // Border warna untuk futuristik
                                   transform hover:scale-105 transition-transform duration-300 ease-in-out // Efek hover gambar
                                   "
                    >
                        <Image
                            src={currentTestimonial.image}
                            alt={currentTestimonial.name}
                            className="w-full h-full object-cover"
                            width={256} // Tetap gunakan width/height untuk optimasi Next/Image
                            height={256}
                        />
                    </div>

                    {/* ==================Detail Testimonial & Klien==================== */}
                    <div className="flex-grow text-left">
                        {/* Quote mark (ukuran dan warna) */}
                        <p className="text-4xl md:text-5xl font-extrabold text-gray-400 dark:text-gray-600 mb-2 select-none">&ldquo;</p>
                        <p className="text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-200 mb-4 md:mb-6">
                            {currentTestimonial.quote}
                        </p>
                        <p className="text-4xl md:text-5xl font-extrabold text-gray-400 dark:text-gray-600 mb-6 md:mb-8 text-right select-none">&rdquo;</p>

                        {/* Nama klien */}
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{currentTestimonial.name}</h3>
                        {/* Jabatan klien */}
                        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">{currentTestimonial.title}</p>

                        {/* ==================Navigasi Testimonial==================== */}
                        <div className="flex justify-between items-center mt-8 md:mt-10">
                            {/* ==================Indikator Titik==================== */}
                            <div className="flex space-x-2">
                                {testimonials.map((_, index) => (
                                    <span
                                        key={index}
                                        className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-colors duration-200 transform
                                                    ${
                                                        index === currentTestimonialIndex
                                                            ? 'bg-purple-600 dark:bg-purple-500 scale-125' // Titik aktif sedikit membesar
                                                            : 'bg-gray-400 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-500'
                                                    }`}
                                        onClick={() => goToSpecificTestimonial(index)}
                                    ></span>
                                ))}
                            </div>
                            {/* ==================Tombol Panah==================== */}
                            <div className="flex space-x-4 text-gray-900 dark:text-white text-3xl font-bold">
                                <span
                                    className="cursor-pointer select-none hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                                    onClick={goToPreviousTestimonial}
                                >
                                    &larr;
                                </span>
                                <span
                                    className="cursor-pointer select-none hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
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