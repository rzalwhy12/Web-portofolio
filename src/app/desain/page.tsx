"use client";

import React from 'react';
import Link from 'next/link';
import { skillsData, SkillDetail, Project } from '../../data/skillsData';

// ==================Mengambil Data Desain Grafis====================
const graphicDesignDetail: SkillDetail = skillsData['graphic-design'];

const GraphicDesignPage: React.FC = () => {
    // ==================Penanganan Data Tidak Ditemukan====================
    if (!graphicDesignDetail) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100
                            dark:bg-gray-900"> {/* Dark mode background */}
                <p className="text-xl text-red-600
                              dark:text-red-400"> {/* Dark mode text color */}
                    Error: Graphic Design data not found.
                </p>
                <Link href="/#what-i-do" className="ml-4 text-purple-600 hover:underline
                                                   dark:text-purple-400 dark:hover:text-purple-300"> {/* Dark mode link color */}
                    Back to Home
                </Link>
            </div>
        );
    }

    return (
        // ==================Bagian Utama====================
        <section id="graphic-design-detail-page"
            className="py-20 md:py-32 bg-gray-100 min-h-screen
                       dark:bg-gray-900"> {/* Dark mode background */}
            <div className="container mx-auto px-4">
                {/* ==================Tombol Kembali/Breadcrumb==================== */}
                <div className="mb-10">
                    <Link href="/#what-i-do"
                        className="text-gray-600 hover:text-gray-900 flex items-center
                                   dark:text-gray-300 dark:hover:text-white"> {/* Dark mode link color */}
                        <svg className="w-5 h-5 mr-2
                                        dark:text-gray-300" // Dark mode icon color
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                        Back to Home
                    </Link>
                </div>

                {/* ==================Judul Halaman==================== */}
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 text-center
                               dark:text-white"> {/* Dark mode title color */}
                    {graphicDesignDetail.title}
                </h1>

                {/* ==================Wadah Konten==================== */}
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-xl
                                dark:bg-gray-800 dark:shadow-2xl dark:shadow-purple-900/50"> {/* Dark mode background and shadow */}
                    {/* ==================Bagian Gambaran Umum==================== */}
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4
                                   dark:text-white dark:border-gray-700"> {/* Dark mode heading and border */}
                        Overview
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-700 mb-10
                                  dark:text-gray-300"> {/* Dark mode text color */}
                        {graphicDesignDetail.description}
                    </p>

                    {/* ==================Bagian Alat Kreatif==================== */}
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4
                                   dark:text-white dark:border-gray-700"> {/* Dark mode heading and border */}
                        Creative Tools
                    </h2>
                    <div className="flex flex-wrap gap-4 mb-12">
                        {graphicDesignDetail.applications.map((app) => (
                            <span
                                key={app}
                                className="px-6 py-2 bg-green-100 text-green-800 rounded-full text-base font-semibold shadow-sm
                                           dark:bg-green-700 dark:text-green-100"> {/* Dark mode badge colors */}
                                {app}
                            </span>
                        ))}
                    </div>

                    {/* ==================Bagian Portofolio Desain==================== */}
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4
                                   dark:text-white dark:border-gray-700"> {/* Dark mode heading and border */}
                        Design Portfolio
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {graphicDesignDetail.projects.map((project: Project) => (
                            <div key={project.name}
                                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300
                                           dark:bg-gray-700 dark:shadow-lg dark:hover:shadow-xl dark:shadow-purple-800/30"> {/* Dark mode card background and shadow */}
                                <h3 className="text-xl font-semibold text-gray-900 mb-3
                                               dark:text-white"> {/* Dark mode project title */}
                                    {project.name}
                                </h3>
                                <p className="text-base text-gray-700 mb-4
                                              dark:text-gray-300"> {/* Dark mode project description */}
                                    {project.description}
                                </p>
                                {project.link && project.link !== '#' && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                                        className="text-green-600 hover:underline font-medium flex items-center
                                                  dark:text-green-400 dark:hover:text-green-300"> {/* Dark mode link color */}
                                        View Design
                                        <svg className="w-4 h-4 ml-1
                                                        dark:text-green-400" // Dark mode icon color
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GraphicDesignPage;