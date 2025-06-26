import React from 'react';
import Link from 'next/link';

// ==================Definisi Tipe Props ServiceCard====================
interface ServiceCardProps {
    title: string;
    description: string;
    isDark?: boolean;
    linkHref?: string;
}

// ==================Komponen ServiceCard====================
const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, isDark = false, linkHref = '#' }) => {
    // ==================Penentuan Kelas CSS Berdasarkan Tema====================
    const cardClasses = isDark
        ? 'bg-gray-800 text-white'
        : 'bg-gray-100 text-gray-800';

    const linkClasses = isDark
        ? 'text-white hover:text-gray-300'
        : 'text-gray-800 hover:text-gray-600';

    return (
        // ==================Struktur Card Layanan====================
        <div className={`flex flex-col p-8 rounded-lg shadow-md w-[300px] h-[350px] transition-all duration-300 ${cardClasses}`}>
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-base leading-relaxed mb-8 flex-grow">{description}</p>
            {/* ==================Link "Read more"==================== */}
            <Link href={linkHref} className={`flex items-center font-semibold text-lg ${linkClasses} group`}>
                Read more
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                </span>
            </Link>
        </div>
    );
};

export default ServiceCard;