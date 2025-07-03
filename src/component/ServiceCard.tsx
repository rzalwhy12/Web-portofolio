// src/component/ServiceCard.tsx
import React from 'react';
import Link from 'next/link';

// ==================Definisi Tipe Props ServiceCard====================
interface ServiceCardProps {
    title: string;
    description: string;
    isDark?: boolean; // Prop isDark harus ada di sini
    linkHref?: string;
}

// ==================Komponen ServiceCard====================
const ServiceCard: React.FC<ServiceCardProps> = ({ 
    title, 
    description, 
    linkHref = '#' 
}) => {
    return (
        <div className={`
            flex flex-col p-8 rounded-lg shadow-md w-[300px] h-[350px]
            transition-all duration-300 transform hover:-translate-y-2
            
            /* Default Light Mode Styles */
            bg-white text-gray-800
            
            /* Dark Mode Styles (diaktifkan saat <html> memiliki kelas 'dark') */
            dark:bg-gray-800 dark:text-gray-200 dark:shadow-purple-700/30
            /* Anda bisa menambahkan dark:shadow-[color] untuk bayangan khusus di dark mode */
        `}>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{title}</h3>
            <p className="text-base leading-relaxed mb-8 flex-grow text-gray-700 dark:text-gray-400">{description}</p>
            
            <Link 
                href={linkHref} 
                className={`
                    flex items-center font-semibold text-lg
                    text-purple-600 hover:text-purple-800 /* Light mode link styles */
                    dark:text-purple-400 dark:hover:text-purple-300 /* Dark mode link styles */
                    group
                `}
            >
                Read more
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                </span>
            </Link>
        </div>
    );
};

export default ServiceCard;