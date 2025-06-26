import React from 'react';
import ServiceCard from '../component/ServiceCard'; // Sesuaikan path jika berbeda

const WhatIDo: React.FC = () => {
    return (
        // ==================Bagian Utama "What I Do"====================
        <section id="what-i-do" className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
                {/* ==================Judul Bagian==================== */}
                <h2 className="text-4xl font-bold mb-12 text-gray-900">What I Do</h2>
                {/* ==================Container Kartu Layanan==================== */}
                <div className="flex flex-wrap justify-center gap-8 mb-10">
                    {/* ==================Kartu Layanan: UI & UX Design==================== */}
                    <ServiceCard
                        title="Ui & UX Design"
                        description="User interface design, user experience design, user research."
                        isDark
                        linkHref="uiux" 
                    />
                    {/* ==================Kartu Layanan: Graphic Design==================== */}
                    <ServiceCard
                        title="Graphic Design"
                        description="User interface design, user experience design, user research."
                        linkHref="desain" // Link ke halaman detail Graphic Design
                    />
                    {/* ==================Kartu Layanan: Web Development==================== */}
                    <ServiceCard
                        title="Web Development"
                        description="User interface design, user experience design, user research."
                        linkHref="webdev" 
                    />
                </div>

                {/* ==================Pagination dan Navigasi (Placeholder)==================== */}
                <div className="flex justify-center items-center mt-8 space-x-4 md:space-x-10">
                    <div className="flex space-x-2">
                        <span className="w-2.5 h-2.5 bg-gray-900 rounded-full cursor-pointer"></span> {/* Active dot */}
                        <span className="w-2.5 h-2.5 bg-gray-400 rounded-full cursor-pointer"></span>
                        <span className="w-2.5 h-2.5 bg-gray-400 rounded-full cursor-pointer"></span>
                    </div>
                    <div className="flex space-x-4 text-gray-900 text-3xl font-bold">
                        <span className="cursor-pointer select-none">&larr;</span>
                        <span className="cursor-pointer select-none">&rarr;</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatIDo;