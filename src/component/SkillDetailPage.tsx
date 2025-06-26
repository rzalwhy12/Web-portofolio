"use client"; 

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { skillsData, SkillKey, SkillDetail, Project } from '../data/skillsData'; 

const SkillDetailPage: React.FC = () => {
    // ==================Inisialisasi Router dan Search Params====================
    const router = useRouter();
    const searchParams = useSearchParams();
    const skillId = searchParams.get('skill'); 

    // ==================State untuk Detail Skill====================
    const [skillDetail, setSkillDetail] = useState<SkillDetail | null>(null);

    // ==================Efek Samping untuk Memuat Data Skill====================
    useEffect(() => {
        if (skillId) {
            const typedSkillId = skillId as SkillKey;
            if (skillsData[typedSkillId]) {
                setSkillDetail(skillsData[typedSkillId]);
            } else {
                router.push('/404'); 
            }
        }
    }, [skillId, router]);

    // ==================Tampilan Loading/Error====================
    if (!skillDetail) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <p className="text-xl text-gray-700">Loading skill details...</p>
            </div>
        );
    }

    return (
        // ==================Bagian Utama Detail Skill====================
        <section id={`skill-detail-${skillId}`} className="py-20 md:py-32 bg-gray-100 min-h-screen">
            <div className="container mx-auto px-4">
                {/* ==================Tombol Kembali ke Home==================== */}
                <div className="mb-10">
                    <Link href="/" className="text-gray-600 hover:text-gray-900 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                        Back to Home
                    </Link>
                </div>

                {/* ==================Judul Halaman Detail Skill==================== */}
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 text-center">
                    {skillDetail.title}
                </h1>

                {/* ==================Wadah Konten Detail Skill==================== */}
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-xl">
                    {/* ==================Bagian Gambaran Umum (Overview)==================== */}
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">Overview</h2>
                    <p className="text-lg leading-relaxed text-gray-700 mb-10">
                        {skillDetail.description}
                    </p>

                    {/* ==================Bagian Alat & Teknologi==================== */}
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">Tools & Technologies</h2>
                    <div className="flex flex-wrap gap-4 mb-12">
                        {skillDetail.applications.map((app) => (
                            <span
                                key={app}
                                className="px-6 py-2 bg-purple-100 text-purple-800 rounded-full text-base font-semibold shadow-sm"
                            >
                                {app}
                            </span>
                        ))}
                    </div>

                    {/* ==================Bagian Proyek Terkait==================== */}
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">Related Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {skillDetail.projects.map((project: Project) => (
                            <div key={project.name} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.name}</h3>
                                <p className="text-base text-gray-700 mb-4">{project.description}</p>
                                {project.link && project.link !== '#' && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline font-medium flex items-center">
                                        View Project
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

export default SkillDetailPage;