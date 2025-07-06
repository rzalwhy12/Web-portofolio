    // pages/web-development.tsx
    "use client"; // Tambahkan ini jika Anda menggunakan komponen client di Pages Router

    import React from 'react';
    import Link from 'next/link';
    import { skillsData, SkillDetail, Project } from '../../data/skillsData'; // Sesuaikan path jika berbeda

    // ==================Mengambil Data Web Development====================
    const webDevDetail: SkillDetail = skillsData['web-development'];

    const WebDevelopmentPage: React.FC = () => {
        // ==================Penanganan Data Tidak Ditemukan====================
        if (!webDevDetail) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-gray-100
                                dark:bg-gray-900">
                    <p className="text-xl text-red-600
                                dark:text-red-400">
                        Error: Web Development data not found.
                    </p>
                    <Link href="/#what-i-do" className="ml-4 text-purple-600 hover:underline
                                                    dark:text-purple-400 dark:hover:text-purple-300">
                        Back to Home
                    </Link>
                </div>
            );
        }

        return (
            // ==================Bagian Utama====================
            <section id="web-development-detail-page"
                className="py-20 md:py-32 bg-gray-100 min-h-screen
                        dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    {/* ==================Tombol Kembali/Breadcrumb==================== */}
                    <div className="mb-10">
                        <Link href="/#what-i-do"
                            className="text-gray-600 hover:text-gray-900 flex items-center
                                    dark:text-gray-300 dark:hover:text-white">
                            <svg className="w-5 h-5 mr-2
                                            dark:text-gray-300"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                            Back to Home
                        </Link>
                    </div>

                    {/* ==================Judul Halaman==================== */}
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 text-center
                                dark:text-white">
                        {webDevDetail.title}
                    </h1>

                    {/* ==================Wadah Konten==================== */}
                    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-xl
                                    dark:bg-gray-800 dark:shadow-2xl dark:shadow-purple-900/50">
                        {/* ==================Bagian Gambaran Umum==================== */}
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4
                                    dark:text-white dark:border-gray-700">
                            Overview
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-700 mb-10
                                    dark:text-gray-300">
                            {webDevDetail.description}
                        </p>

                        {/* ==================Bagian Alat & Perangkat Lunak==================== */}
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4
                                    dark:text-white dark:border-gray-700">
                            Tools & Technologies
                        </h2>
                        <div className="flex flex-wrap gap-4 mb-12">
                            {webDevDetail.applications.map((app) => (
                                <span
                                    key={app}
                                    className="px-6 py-2 bg-blue-100 text-blue-800 rounded-full text-base font-semibold shadow-sm
                                            dark:bg-blue-700 dark:text-blue-100">
                                    {app}
                                </span>
                            ))}
                        </div>

                        {/* ==================Bagian Proyek Unggulan==================== */}
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4
                                    dark:text-white dark:border-gray-700">
                            Featured Projects
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {webDevDetail.projects.map((project: Project) => (
                                <div key={project.name}
                                    className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300
                                            dark:bg-gray-700 dark:shadow-lg dark:hover:shadow-xl dark:shadow-purple-800/30">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3
                                                dark:text-white">
                                        {project.name}
                                    </h3>
                                    <p className="text-base text-gray-700 mb-4
                                                dark:text-gray-300">
                                        {project.description}
                                    </p>
                                    {project.link && project.link !== '#' && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline font-medium flex items-center
                                                    dark:text-blue-400 dark:hover:text-blue-300">
                                            View Case Study
                                            <svg className="w-4 h-4 ml-1
                                                            dark:text-blue-400"
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

    export default WebDevelopmentPage;