// src/component/WhatIDo.tsx
"use client"; // Ini harus Client Component

import React, { useState } from 'react';
import ServiceCard from '../component/ServiceCard';



interface Service {
    id: string; // ID unik sangat penting untuk key
    title: string;
    description: string;
    linkHref: string;
}

const allServices: Service[] = [
    { id: 'uiux', title: 'UI & UX Design', description: 'User interface design, user experience design, user research.', linkHref: 'uiux' },
    { id: 'graphic', title: 'Graphic Design', description: 'Visual identity, branding, marketing materials.', linkHref: 'desain' },
    { id: 'webdev', title: 'Web Development', description: 'Front-end, back-end, full-stack development, responsive design.', linkHref: 'webdev' },
];

const CARDS_PER_PAGE = 3; // Jumlah kartu yang ditampilkan per halaman

const WhatIDo: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(0);


    // Hitung total halaman
    const totalPages = Math.ceil(allServices.length / CARDS_PER_PAGE);

    // Dapatkan kartu untuk halaman saat ini
    const startIndex = currentPage * CARDS_PER_PAGE;
    const endIndex = startIndex + CARDS_PER_PAGE;
    const currentCards = allServices.slice(startIndex, endIndex);

    // Fungsi untuk navigasi halaman
    const goToPage = (pageIndex: number) => {
        if (pageIndex >= 0 && pageIndex < totalPages) {
            setCurrentPage(pageIndex);
        }
    };

    const goToPrevPage = () => {
        goToPage(currentPage - 1);
    };

    const goToNextPage = () => {
        goToPage(currentPage + 1);
    };

    return (
        <section id="what-i-do" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 dark:text-white">What I Do</h2>
                <div className="flex flex-wrap text-gray-900 dark:text-white justify-center gap-8 mb-10">
                    {currentCards.map((service) => (
                        <ServiceCard
                            key={service.id} 
                            title={service.title}
                            description={service.description}
                            linkHref={service.linkHref}
                        />
                    ))}
                </div>

                {/* ==================Pagination dan Navigasi==================== */}
                {totalPages > 1 && ( 
                    <div className="flex justify-center items-center mt-8 space-x-4 md:space-x-10">
                        {/* Dot Pagination */}
                        <div className="flex space-x-2">
                            {[...Array(totalPages)].map((_, index) => (
                                <span
                                    key={index}
                                    className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-colors duration-200
                                                ${index === currentPage ? 'bg-gray-900 dark:bg-purple-500' : 'bg-gray-400 dark:bg-gray-600'}`}
                                    onClick={() => goToPage(index)}
                                ></span>
                            ))}
                        </div>
                        {/* Panah Navigasi */}
                        <div className="flex space-x-4 text-gray-900 text-3xl font-bold dark:text-white">
                            <span
                                className={`cursor-pointer select-none transition-opacity duration-200
                                            ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-75'}`}
                                onClick={goToPrevPage}
                            >
                                &larr;
                            </span>
                            <span
                                className={`cursor-pointer select-none transition-opacity duration-200
                                            ${currentPage === totalPages - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-75'}`}
                                onClick={goToNextPage}
                            >
                                &rarr;
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default WhatIDo;