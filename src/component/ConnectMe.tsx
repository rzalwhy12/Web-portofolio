"use client";

import React from 'react';
import FacebookIcon from '../assets/images/facebook.svg';
import LinkedInIcon from '../assets/images/linkedin-logo.svg';
import BehanceIcon from '../assets/images/behance.svg';
import TwitterIcon from '../assets/images/twitter.svg';

const ConnectMe: React.FC = () => {
    return (
        // ==================Bagian Utama Hubungi Saya====================
        <section id="connect-me" className="py-20 md:py-24 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900">
                    Hire Me For Your Next Amazing Project
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 text-left items-start">
                    {/* ==================Bagian Kiri: Pesan & Info Kontak==================== */}
                    <div>
                        <p className="text-3xl md:text-4xl leading-relaxed text-gray-700 mb-10 md:mb-16">
                            Let's make something new, different and more meaningful or
                            make thing more visual or conceptual? Just say hello!
                        </p>

                        <div className="space-y-6 text-gray-700 text-lg">
                            <div className="flex items-center">
                                <span className="font-semibold mr-4 text-gray-500 text-2xl">&mdash;</span>
                                <span>+62 821 4299 1064</span>
                            </div>
                            <div className="flex items-center">
                                <span className="font-semibold mr-4 text-gray-500 text-2xl">&mdash;</span>
                                <span>rzalcorp05@gmail.com</span>
                            </div>
                            <div className="flex items-center">
                                <span className="font-semibold mr-4 text-gray-500 text-2xl">&mdash;</span>
                                <span>Jl.Gubeng jaya III No. 37 Surabaya </span>
                            </div>
                        </div>
                    </div>

                    {/* ==================Bagian Kanan: Formulir Kontak==================== */}
                    <div className="bg-gray-800 p-8 md:p-12 rounded-lg shadow-xl w-full">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="sr-only">Your name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your name"
                                    className="w-full bg-transparent border-b border-gray-600 text-white py-3 px-0
                                            focus:outline-none focus:border-purple-500 transition-colors duration-200 placeholder-gray-400"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Your email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Your email Address"
                                    className="w-full bg-transparent border-b border-gray-600 text-white py-3 px-0
                                            focus:outline-none focus:border-purple-500 transition-colors duration-200 placeholder-gray-400"
                                />
                            </div>
                            <div>
                                <label htmlFor="budget" className="sr-only">Your budget (Optional)</label>
                                <input
                                    type="text"
                                    id="budget"
                                    placeholder="Your budget (Optional)"
                                    className="w-full bg-transparent border-b border-gray-600 text-white py-3 px-0
                                            focus:outline-none focus:border-purple-500 transition-colors duration-200 placeholder-gray-400"
                                />
                            </div>
                            <div>
                                <label htmlFor="description" className="sr-only">Your project description</label>
                                <textarea
                                    id="description"
                                    placeholder="Your project description"
                                    rows={4}
                                    className="w-full bg-transparent border-b border-gray-600 text-white py-3 px-0 resize-none
                                            focus:outline-none focus:border-purple-500 transition-colors duration-200 placeholder-gray-400"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-white text-gray-800 py-3 rounded-lg text-lg font-semibold shadow-md
                                        hover:bg-gray-200 transition-colors duration-300 transform hover:-translate-y-1"
                            >
                                SEND
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* ==================Bagian Footer==================== */}
            <footer className="mt-20 md:mt-32 pt-8 md:pt-12 border-t border-gray-200">
                <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-gray-600 text-sm">
                    <p className="mb-4 sm:mb-0">© 2025 Rzal Portofolio Website</p>
                    <div className="flex space-x-6">
                        <a href="#" aria-label="Facebook" className="hover:text-white transition-colors duration-200">
                            <img src={FacebookIcon.src} alt="Facebook" width={24} height={24} className="w-6 h-6" />
                        </a>
                        <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors duration-200">
                            <img src={LinkedInIcon.src} alt="LinkedIn" width={24} height={24} className="w-6 h-6" />
                        </a>
                        <a href="#" aria-label="Behance" className="hover:text-white transition-colors duration-200">
                            <img src={BehanceIcon.src} alt="Behance" width={24} height={24} className="w-6 h-6" />
                        </a>
                        <a href="#" aria-label="Twitter" className="hover:text-white transition-colors duration-200">
                            <img src={TwitterIcon.src} alt="Twitter" width={24} height={24} className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default ConnectMe;