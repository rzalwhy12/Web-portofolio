// components/WorkExperienceCard.tsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface WorkExperienceCardProps {
    title: string;
    description: string;
    bgColor?: string;
    textColor?: string;
    darkBgColor?: string;
    darkTextColor?: string;
}

const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({
    title,
    description,
    bgColor = 'bg-gray-200',
    textColor = 'text-gray-800',
    darkBgColor = 'dark:bg-gray-700',
    darkTextColor = 'dark:text-gray-100',
}) => {
    const isLightModeDarkCard = bgColor === 'bg-gray-800' || bgColor === 'bg-black' || bgColor === 'bg-zinc-800';

    const arrowBaseColor = isLightModeDarkCard ? 'text-white' : 'text-gray-800';
    const arrowDarkModeColor = isLightModeDarkCard ? 'dark:text-gray-100' : 'dark:text-white';


    return (
        <div
            className={`
        flex-none w-80 md:w-96 p-8 rounded-lg shadow-md transition-transform duration-300 ease-in-out
        ${bgColor} ${textColor}
        ${darkBgColor} ${darkTextColor}
        hover:scale-[1.01]
            `}
            style={{ minWidth: '320px' }}
        >
            <h3 className={`text-3xl font-semibold mb-4
            ${isLightModeDarkCard ? 'text-white' : 'text-gray-800'}
            ${isLightModeDarkCard ? 'dark:text-gray-100' : 'dark:text-white'}
        `}>
                {title}
            </h3>
            <p className={`text-base mb-6
            ${isLightModeDarkCard ? 'text-gray-300' : 'text-gray-600'}
            ${isLightModeDarkCard ? 'dark:text-gray-300' : 'dark:text-gray-400'}
        `}>
                {description}
            </p>
        </div>
    );
};

export default WorkExperienceCard;