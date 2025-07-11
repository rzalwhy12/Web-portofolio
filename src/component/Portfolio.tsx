'use client';

import React, { useState, useMemo } from 'react';

interface PortfolioItem {
    id: number;
    category: 'All' | 'UI & UX' | 'Graphic Design' | 'Web Development' ;
    imageUrl: string;
    title?: string;
    link?: string;
}

const portfolioItems: PortfolioItem[] = [
    { id: 1, category: 'Graphic Design', imageUrl: 'images/portofolio/ig1.png', title: 'Instagram Feed', link: 'https://www.google.com' },
    { id: 2, category: 'Graphic Design', imageUrl: 'images/portofolio/ig2.png', title: 'Instagram Feed', link: 'https://www.google.com' },
    { id: 3, category: 'Graphic Design', imageUrl: 'images/portofolio/ig3.png', title: 'Instagram Feed', link: 'https://www.google.com' },
    { id: 4, category: 'Web Development', imageUrl: 'images/portofolio/id3.jpg', title: 'Code Snippet', link: 'https://www.google.com' },
    { id: 5, category: 'UI & UX', imageUrl: 'images/portofolio/uiux1.png', title: 'ToDo App Desain', link: 'https://www.google.com' },
    { id: 6, category: 'Web Development', imageUrl: 'images/portofolio/todo.png', title: 'ToDo App ', link: 'https://www.google.com' },
    { id: 7, category: 'UI & UX', imageUrl: 'images/portofolio/id1.jpg', title: 'Finance App UI', link: 'https://www.google.com' },
];

const ITEMS_PER_PAGE = 6; // Ini adalah jumlah item per halaman yang Anda inginkan untuk mengisi grid

const Portfolio: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<PortfolioItem['category']>('All');
    const [currentPage, setCurrentPage] = useState(1);

    const filteredItems = useMemo(() => {
        setCurrentPage(1); // Reset ke halaman 1 setiap kali kategori berubah
        return activeCategory === 'All'
            ? portfolioItems
            : portfolioItems.filter(item => item.category === activeCategory);
    }, [activeCategory]);

    const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

    const paginatedItems = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        return filteredItems.slice(startIndex, endIndex);
    }, [filteredItems, currentPage]);

    const categories: PortfolioItem['category'][] = [
        'All',
        'UI & UX',
        'Graphic Design',
        'Web Development',
    ];

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    // Logika untuk menambahkan placeholder
    const numItemsOnCurrentPage = paginatedItems.length;
    // placeholder hanya relevan untuk mengisi grid desktop (lg:grid-cols-3)
    const placeholdersNeeded = ITEMS_PER_PAGE - numItemsOnCurrentPage;
    const placeholderArray = Array.from({ length: placeholdersNeeded }, (_, i) => i);

    return (
        <section
            id="portfolio"
            // Latar belakang di light mode: abu-abu terang (50), di dark mode: abu-abu sangat gelap (900)
            className="py-20 bg-gray-50 dark:bg-gray-900"
        >
            <div className="container mx-auto px-4 text-center">
                {/* Judul Portfolio */}
                <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">Portfolio</h2>

                {/* Filter Kategori */}
                <div className="flex justify-center items-center gap-6 mb-12 text-lg font-medium text-gray-600">
                    <div className="flex justify-center items-center gap-4 mb-12 text-base sm:text-lg font-medium text-gray-600 dark:text-gray-400"> {/* Menyesuaikan teks di sini */}
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`pb-1 relative group transition-colors duration-300 px-2
                                ${activeCategory === category ? 'text-gray-900 dark:text-white' : 'hover:text-gray-800 dark:hover:text-white'}
                                text-sm sm:text-base md:text-lg
                                `}
                            >
                                {category}
                                <span className={`absolute bottom-0 left-0 w-full h-0.5
                                    ${activeCategory === category ? 'bg-gray-900 dark:bg-purple-600' : 'bg-gray-900 dark:bg-purple-400'} // Garis bawah untuk active category dan hover
                                    ${activeCategory === category ? 'scale-x-100' : 'scale-x-0'}
                                    group-hover:scale-x-100 transition-transform duration-300`}></span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid Portofolio */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Render item paginasi */}
                    {paginatedItems.map((item) => (
                        <a
                            key={item.id}
                            href={item.link || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            // Shadow di light mode: shadow-lg, di dark mode: shadow-xl dengan warna ungu transparan
                            className="group relative overflow-hidden rounded-lg shadow-lg dark:shadow-xl dark:shadow-purple-900/50 aspect-w-16 aspect-h-9 block"
                        >
                            <img
                                src={item.imageUrl}
                                alt={item.title || item.category}
                                width={400}
                                height={800} // Sesuaikan height jika gambar Anda lebih potrait
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Overlay di light mode: abu-abu 600/40, di dark mode: abu-abu 800/60 atau ungu 900/60 */}
                            <div className="absolute inset-0 bg-gray-600/40 dark:bg-gray-800/60 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="text-white text-left">
                                    <h3 className="text-xl font-bold mb-1">{item.title || item.category}</h3>
                                    <p className="text-sm">{item.category}</p>
                                </div>
                            </div>
                        </a>
                    ))}

                    {/* Render placeholder kosong */}
                    {placeholdersNeeded > 0 && placeholderArray.map((_, index) => (
                        <div
                            key={`placeholder-${index}`}
                            // Latar belakang placeholder di dark mode juga disesuaikan
                            className="relative rounded-lg aspect-w-1 aspect-h-1 hidden
                                        bg-transparent shadow-none opacity-0 pointer-events-none
                                        lg:block lg:opacity-100 lg:pointer-events-auto
                                        dark:bg-gray-800 dark:border dark:border-gray-700" // Tambahkan border atau bg untuk dark mode
                            style={{ aspectRatio: '16 / 9' }} // Fallback for aspect-ratio
                        >
                        </div>
                    ))}
                </div>

                {/* Pagination dan Navigasi - Hanya muncul jika ada lebih dari ITEMS_PER_PAGE item */}
                {filteredItems.length > ITEMS_PER_PAGE && (
                    <div className="flex justify-center items-center mt-12 space-x-4 md:space-x-10">
                        <div className="flex space-x-2">
                            {Array.from({ length: totalPages }, (_, i) => (
                                <span
                                    key={i + 1}
                                    // Warna pagination dot
                                    className={`w-2.5 h-2.5 rounded-full cursor-pointer
                                    ${currentPage === i + 1 ? 'bg-gray-900 dark:bg-purple-600' : 'bg-gray-400 dark:bg-gray-600'}`}
                                    onClick={() => handlePageChange(i + 1)}
                                ></span>
                            ))}
                        </div>
                        <div className="flex space-x-4
                                    text-gray-900 dark:text-white text-3xl font-bold"> {/* Warna panah navigasi */}
                            <span
                                className={`cursor-pointer select-none
                                    ${currentPage === 1 ? 'text-gray-300 dark:text-gray-700' : 'dark:hover:text-purple-400'}`} // Warna panah non-aktif dan hover
                                onClick={() => handlePageChange(currentPage - 1)}
                            >
                                &larr;
                            </span>
                            <span
                                className={`cursor-pointer select-none
                                    ${currentPage === totalPages ? 'text-gray-300 dark:text-gray-700' : 'dark:hover:text-purple-400'}`} // Warna panah non-aktif dan hover
                                onClick={() => handlePageChange(currentPage + 1)}
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

export default Portfolio;