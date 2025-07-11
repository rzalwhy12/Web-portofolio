// components/WorkExperience.tsx
'use client';

import React, { useRef, useEffect, useState } from 'react';
import WorkExperienceCard from './WorkExperienceCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Experience {
    id: string;
    title: string;
    description: string;
    bgColor?: string;
    textColor?: string;
    darkBgColor?: string;
    darkTextColor?: string;
}

const DUMMY_EXPERIENCES: Experience[] = [
    {
        id: 'exp1',
        title: 'Senior UI/UX Designer',
        description: 'Lead design efforts for enterprise software solutions, focusing on user-centered design principles and usability testing. Collaborate with product managers and engineers.',
        bgColor: 'bg-gray-800',
        textColor: 'text-white',
        darkBgColor: 'dark:bg-zinc-900',
        darkTextColor: 'dark:text-gray-100',
    },
    {
        id: 'exp2',
        title: 'Front-End Developer',
        description: 'Developed responsive web applications using React and Next.js. Implemented pixel-perfect designs and optimized for performance across various devices.',
        bgColor: 'bg-gray-200',
        textColor: 'text-gray-800',
        darkBgColor: 'dark:bg-gray-700',
        darkTextColor: 'dark:text-gray-100',
    },
    {
        id: 'exp3',
        title: 'Graphic Designer',
        description: 'Created visual concepts for marketing campaigns, branding, and digital media. Ensured brand consistency across all platforms and materials.',
        bgColor: 'bg-gray-200',
        textColor: 'text-gray-800',
        darkBgColor: 'dark:bg-gray-700',
        darkTextColor: 'dark:text-gray-100',
    },
    {
        id: 'exp4',
        title: 'Marketing Specialist',
        description: 'Managed digital marketing strategies, including SEO, SEM, and social media campaigns. Analyzed market trends and competitor activities to optimize performance.',
        bgColor: 'bg-gray-200',
        textColor: 'text-gray-800',
        darkBgColor: 'dark:bg-gray-700',
        darkTextColor: 'dark:text-gray-100',
    },
    {
        id: 'exp5',
        title: 'Project Manager',
        description: 'Oversaw software development projects from conception to deployment. Coordinated cross-functional teams, managed timelines, and ensured successful project delivery.',
        bgColor: 'bg-gray-200',
        textColor: 'text-gray-800',
        darkBgColor: 'dark:bg-gray-700',
        darkTextColor: 'dark:text-gray-100',
    },
];

const WorkExperience: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

    const startAutoScroll = () => {
        if (scrollContainerRef.current) {
            setIsScrolling(true);
            scrollIntervalRef.current = setInterval(() => {
                if (scrollContainerRef.current) {
                    const { scrollLeft} = scrollContainerRef.current;
                    const nextScroll = scrollLeft + 1;

                    const cardWidth = 320 + 32;
                    const totalContentWidth = DUMMY_EXPERIENCES.length * cardWidth;
                    const resetPoint = totalContentWidth;

                    if (scrollLeft >= resetPoint) {
                        scrollContainerRef.current.scrollTo({ left: 0, behavior: 'auto' });
                    } else {
                        scrollContainerRef.current.scrollTo({ left: nextScroll, behavior: 'auto' });
                    }
                }
            }, 20);
        }
    };

    const stopAutoScroll = () => {
        if (scrollIntervalRef.current) {
            clearInterval(scrollIntervalRef.current);
            scrollIntervalRef.current = null;
        }
        setIsScrolling(false);
    };

    useEffect(() => {
        startAutoScroll();

        const currentContainer = scrollContainerRef.current;
        if (currentContainer) {
            currentContainer.addEventListener('mouseenter', stopAutoScroll);
            currentContainer.addEventListener('mouseleave', startAutoScroll);
        }

        return () => {
            stopAutoScroll();
            if (currentContainer) {
                currentContainer.removeEventListener('mouseenter', stopAutoScroll);
                currentContainer.removeEventListener('mouseleave', startAutoScroll);
            }
        };
    }, []);

    const handleManualScroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300;
            const { scrollLeft } = scrollContainerRef.current;
            if (direction === 'right') {
                scrollContainerRef.current.scrollTo({
                    left: scrollLeft + scrollAmount,
                    behavior: 'smooth',
                });
            } else {
                scrollContainerRef.current.scrollTo({
                    left: Math.max(0, scrollLeft - scrollAmount),
                    behavior: 'smooth',
                });
            }
        }
    };

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden transition-colors duration-300">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-gray-100 transition-colors duration-300">My Work Experience</h2>

                <div
                    ref={scrollContainerRef}
                    className="flex gap-8 pb-8 overflow-x-hidden scrollbar-hide"
                    style={{ scrollSnapType: 'x mandatory' }}
                >
                    {DUMMY_EXPERIENCES.map((exp) => (
                        <div key={exp.id} className="scroll-snap-align-start">
                            <WorkExperienceCard
                                title={exp.title}
                                description={exp.description}
                                bgColor={exp.bgColor}
                                textColor={exp.textColor}
                                darkBgColor={exp.darkBgColor}
                                darkTextColor={exp.darkTextColor}
                            />
                        </div>
                    ))}
                    {DUMMY_EXPERIENCES.map((exp) => (
                        <div key={`${exp.id}-duplicate`} className="scroll-snap-align-start" aria-hidden="true">
                            <WorkExperienceCard
                                title={exp.title}
                                description={exp.description}
                                bgColor={exp.bgColor}
                                textColor={exp.textColor}
                                darkBgColor={exp.darkBgColor}
                                darkTextColor={exp.darkTextColor}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;