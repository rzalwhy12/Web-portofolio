// components/WorkExperience.tsx
'use client';

import React, { useRef, useEffect } from 'react'; 
import WorkExperienceCard from './WorkExperienceCard';

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
        title: 'Freelance Full-Stack Developer',
        description: 'Worked with various clients to develop and maintain web applications using MERN stack technologies. Delivered customized solutions to meet client requirements.',
        bgColor: 'bg-gray-800',
        textColor: 'text-white',
        darkBgColor: 'dark:bg-zinc-900',
        darkTextColor: 'dark:text-gray-100',
    },
    {
        id: 'exp2',
        title: 'E-commerce Web Developer',
        description: 'Developed and optimized e-commerce platforms, enhancing user experience and increasing sales. Implemented secure payment gateways and responsive design.',
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
        title: 'Marketing Executive property',
        description: 'Developed and executed marketing strategies to promote real estate properties. Coordinated with sales teams to create compelling promotional materials and campaigns.',
        bgColor: 'bg-gray-200',
        textColor: 'text-gray-800',
        darkBgColor: 'dark:bg-gray-700',
        darkTextColor: 'dark:text-gray-100',
    },
    {
        id: 'exp5',
        title: 'Music Coach',
        description: 'Provided one-on-one coaching and group classes for aspiring musicians. Developed personalized lesson plans and fostered a positive learning environment.',
        bgColor: 'bg-gray-200',
        textColor: 'text-gray-800',
        darkBgColor: 'dark:bg-gray-700',
        darkTextColor: 'dark:text-gray-100',
    },
];

const WorkExperience: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    // Removed const [isScrolling, setIsScrolling] = useState(false);
    const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

    const startAutoScroll = () => {
        if (scrollContainerRef.current) {
            // Removed setIsScrolling(true);
            scrollIntervalRef.current = setInterval(() => {
                if (scrollContainerRef.current) {
                    const { scrollLeft } = scrollContainerRef.current;
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
        // Removed setIsScrolling(false);
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
    return (
        <section id="my-work-experience" className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden transition-colors duration-300">
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