// src/components/ServiceCard.tsx
import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
    title: string;
    description: string;
    linkHref: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, linkHref }) => {
    return (
        <div className="flex-shrink-0 w-80 p-8 rounded-lg shadow-lg text-center
                        bg-white dark:bg-gray-800
                        transform hover:scale-105 transition-transform duration-300">
            {/* Ikon atau gambar di sini jika ada */}
            <h3 className="text-2xl font-bold mb-4
                            text-gray-900 dark:text-white"> 
                {title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6"> 
                {description}
            </p>
            <Link href={`/${linkHref}`} className="inline-block px-6 py-2 rounded-full font-semibold
                                                        bg-purple-600 text-white hover:bg-purple-700
                                                        dark:bg-purple-500 dark:hover:bg-purple-600">
                Learn More
            </Link>
        </div>
    );
};

export default ServiceCard;