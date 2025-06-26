"use client";

import React from 'react';
import Link from 'next/link';
import { skillsData, SkillDetail, Project } from '../../data/skillsData';

// ==================Mengambil Data UI/UX Design====================
const uiUxDetail: SkillDetail = skillsData['ui-ux-design'];

const UiUxDesignPage: React.FC = () => {
    // ==================Penanganan Data Tidak Ditemukan====================
    if (!uiUxDetail) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <p className="text-xl text-red-600">Error: UI & UX Design data not found.</p>
                <Link href="/#what-i-do" className="ml-4 text-purple-600 hover:underline">Back to Home</Link>
            </div>
        );
    }

    return (
        // ==================Bagian Utama====================
        <section id="ui-ux-design-detail-page" className="py-20 md:py-32 bg-gray-100 min-h-screen">
            <div className="container mx-auto px-4">
                {/* ==================Tombol Kembali/Breadcrumb==================== */}
                <div className="mb-10">
                    <Link href="/#what-i-do" className="text-gray-600 hover:text-gray-900 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                        Back to Home
                    </Link>
                </div>

                {/* ==================Judul Halaman==================== */}
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 text-center">
                    {uiUxDetail.title}
                </h1>

                {/* ==================Wadah Konten==================== */}
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-xl">
                    {/* ==================Bagian Gambaran Umum==================== */}
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">Overview</h2>
                    <p className="text-lg leading-relaxed text-gray-700 mb-10">
                        {uiUxDetail.description}
                    </p>

                    {/* ==================Bagian Alat & Perangkat Lunak==================== */}
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">Tools & Software</h2>
                    <div className="flex flex-wrap gap-4 mb-12">
                        {uiUxDetail.applications.map((app) => (
                            <span
                                key={app}
                                className="px-6 py-2 bg-pink-100 text-pink-800 rounded-full text-base font-semibold shadow-sm"
                            >
                                {app}
                            </span>
                        ))}
                    </div>

                    {/* ==================Bagian Proyek Unggulan==================== */}
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {uiUxDetail.projects.map((project: Project) => (
                            <div key={project.name} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.name}</h3>
                                <p className="text-base text-gray-700 mb-4">{project.description}</p>
                                {project.link && project.link !== '#' && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline font-medium flex items-center">
                                        View Case Study
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
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

export default UiUxDesignPage;