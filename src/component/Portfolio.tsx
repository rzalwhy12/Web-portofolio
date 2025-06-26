"use client"
import React, { useState } from 'react';
import Image from 'next/image'; 

// Definisi tipe untuk item portofolio
interface PortfolioItem {
    id: number;
    category: 'All' | 'UI & UX' | 'Graphic Design' | 'Web Development';
    imageUrl: string;
    title?: string;
    link?: string;
}
// Letak data Portofolio
const portfolioItems: PortfolioItem[] = [
    { id: 1, category: 'UI & UX', imageUrl: 'images/portofolio/id1.jpg', title: 'UI/UX Project', link: 'https://www.google.com' },
    { id: 2, category: 'Graphic Design', imageUrl: 'images/portofolio/id2.jpg', title: 'Brochure Design', link: 'https://www.google.com' },
    { id: 3, category: 'Web Development', imageUrl: 'images/portofolio/id3.jpg', title: 'Code Snippet', link: 'https://www.google.com' },
    { id: 4, category: 'Graphic Design', imageUrl: 'images/portofolio/id4.jpg', title: 'Product Packaging', link: 'https://www.google.com' },
    { id: 5, category: 'UI & UX', imageUrl: 'images/portofolio/id5.jpeg', title: 'Wireframing', link: 'https://www.google.com' },
    { id: 6, category: 'Graphic Design', imageUrl: 'images/portofolio/id6.png', title: 'Design Tools', link: 'https://www.google.com' },
];

const Portfolio: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<PortfolioItem['category']>('All');

    const filteredItems = activeCategory === 'All'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeCategory);

    const categories: PortfolioItem['category'][] = [
        'All',
        'UI & UX',
        'Graphic Design',
        'Web Development',
    ];

    return (
        <section id="portfolio" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-12 text-gray-900">Portfolio</h2>

                {/* Filter Kategori */}
                <div className="flex justify-center items-center gap-6 mb-12 text-lg font-medium text-gray-600">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`pb-1 relative group transition-colors duration-300
                                ${activeCategory === category ? 'text-gray-900' : 'hover:text-gray-800'}`}
                        >
                            {category}
                            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gray-900
                                ${activeCategory === category ? 'scale-x-100' : 'scale-x-0'}
                                group-hover:scale-x-100 transition-transform duration-300`}></span>
                        </button>
                    ))}
                </div>

                {/* Grid Portofolio */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItems.map((item) => (
                        <a
                            key={item.id}
                            href={item.link || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden rounded-lg shadow-lg aspect-w-1 aspect-h-1 block"
                        >
                            <img
                                src={item.imageUrl}
                                alt={item.title || item.category}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"

                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="text-white text-left">
                                    <h3 className="text-xl font-bold mb-1">{item.title || item.category}</h3>
                                    <p className="text-sm">{item.category}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Pagination dan Navigasi */}
                <div className="flex justify-center items-center mt-12 space-x-4 md:space-x-10">
                    <div className="flex space-x-2">
                        <span className="w-2.5 h-2.5 bg-gray-900 rounded-full cursor-pointer"></span>
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

export default Portfolio;