"use client"; // Diperlukan untuk menggunakan hooks jika Anda menambahkannya, atau untuk konsistensi di Next.js App Router

import React from 'react';

// ==================Daftar Keahlian====================
const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Wordpress',
    'PHP', 'SASS', 'GIT', 'Github', 'Responsive Design',
    'SEO', 'Terminal', 'Node.js', 'Python', 'TypeScript', 'Amin'
];

const AboutMe: React.FC = () => {
    return (
        // ==================Bagian Utama About Me====================
        <section id="about-me-detailed" className="py-20 md:py-24 bg-white">
            <div className="container mx-auto px-4 text-center">
                {/* ==================Bagian Header==================== */}
                <p className="text-lg font-medium uppercase tracking-widest text-gray-600 mb-2">ABOUT ME</p>
                <div className="w-16 h-1 bg-gray-600 mx-auto mb-8"></div>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-16">
                    Here you will find more information about me, what I do, and my current skills mostly in terms
                    of programming and technology.
                </p>

                {/* ==================Bagian Konten: Perkenalan & Keahlian==================== */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 text-left">
                    {/* ==================Kolom Kiri: Perkenalan==================== */}
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">Get to know me!</h3>
                        <p className="text-base leading-relaxed text-gray-700 mb-4">
                            I&apos;m a <span className="font-semibold text-gray-600">Frontend Focused Web Developer</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur dicta obcaecati neque totam nemo repellendus consequatur nesciunt minima quibusdam, incidunt distinctio eaque ab vel laborum, officia iusto ad facere quod! <a href="#portfolio-section" className="text-gray-600 hover:underline font-semibold">Projects</a> section.
                        </p>

                        {/* ==================Nilai-nilai Saya==================== */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">My Values</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li><strong className="font-semibold text-gray-800">Timeliness:</strong> Delivering projects on schedule and respecting deadlines.</li>
                            <li><strong className="font-semibold text-gray-800">Attention to Detail:</strong> Ensuring high quality, precision, and a polished user experience.</li>
                            <li><strong className="font-semibold text-gray-800">Clear Communication:</strong> Maintaining transparent and effective dialogue throughout the project lifecycle.</li>
                            <li><strong className="font-semibold text-gray-800">Problem Solving:</strong> Proactive and creative approach to challenges, finding efficient and robust solutions.</li>
                        </ul>

                        {/* ==================Tombol Kontak==================== */}
                        <a
                            href="#connect-me"
                            className="inline-block mt-10 px-8 py-4 bg-gray-600 text-white font-semibold rounded-lg shadow-md
                                    hover:bg-gray-700 transition-colors duration-300 transform hover:-translate-y-1"
                        >
                            CONTACT
                        </a>
                    </div>

                {/* ==================Kolom Kanan: Keahlian Saya==================== */}
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">My Skills</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-5 py-2 bg-gray-200 text-gray-800 rounded-md text-base font-medium shadow-sm
                                hover:bg-gray-300 transition-colors duration-200"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;