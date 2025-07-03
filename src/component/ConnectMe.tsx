"use client";

import React, { useState } from 'react';

const ConnectMe: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        budget: '',
        description: '',
    });
    const [statusMessage, setStatusMessage] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatusMessage(null);

        const recipientEmail = 'rzalcorp05@gmail.com';
        const subject = encodeURIComponent(`Pesan dari Portofolio: ${formData.name}`);
        const body = encodeURIComponent(
            `Nama: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Budget (Opsional): ${formData.budget || 'Tidak disebutkan'}\n\n` +
            `Deskripsi Proyek:\n${formData.description}`
        );

        const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

        window.location.href = mailtoLink;

        setTimeout(() => {
            setIsSubmitting(false);
            setStatusMessage('Aplikasi email Anda telah dibuka. Harap periksa dan klik "Kirim" untuk menyelesaikan.');
            setFormData({ name: '', email: '', budget: '', description: '' });
        }, 1000);
    };

    return (
        <section
            id="make-project"
            className="py-20 md:py-24 bg-white dark:bg-gray-900"
        >
            <div className="container mx-auto px-4 text-center">
                <h2
                    className="text-4xl md:text-5xl font-bold mb-16 text-gray-900 dark:text-white"
                >
                    Hire Me For Your Next Amazing Project
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 text-left items-start">
                    <div>
                        <p
                            className="text-3xl md:text-4xl leading-relaxed text-gray-700 dark:text-gray-300 mb-10 md:mb-16"
                        >
                            Let&apos;s make something new, different and more meaningful or
                            make thing more visual or conceptual? Just say hello!
                        </p>

                        <div className="space-y-6 text-gray-700 dark:text-gray-200 text-lg">
                            <div className="flex items-center">
                                <span className="font-semibold mr-4 text-gray-500 dark:text-purple-400 text-2xl">&mdash;</span>
                                <span>+62 821 4299 1064</span>
                            </div>
                            <div className="flex items-center">
                                <span className="font-semibold mr-4 text-gray-500 dark:text-purple-400 text-2xl">&mdash;</span>
                                <span>rzalcorp05@gmail.com</span>
                            </div>
                            <div className="flex items-center">
                                <span className="font-semibold mr-4 text-gray-500 dark:text-purple-400 text-2xl">&mdash;</span>
                                <span>Jl.Gubeng jaya III No. 37 Surabaya </span>
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-gray-800 p-8 md:p-12 rounded-lg shadow-xl w-full dark:shadow-2xl dark:shadow-purple-900/50"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="sr-only">Your name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent border-b border-gray-600 dark:border-gray-500 text-white dark:text-gray-100 py-3 px-0
                                            focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition-colors duration-200 placeholder-gray-400 dark:placeholder-gray-400"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Your email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Your email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent border-b border-gray-600 dark:border-gray-500 text-white dark:text-gray-100 py-3 px-0
                                            focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition-colors duration-200 placeholder-gray-400 dark:placeholder-gray-400"
                                />
                            </div>
                            <div>
                                <label htmlFor="budget" className="sr-only">Your budget (Optional)</label>
                                <input
                                    type="text"
                                    id="budget"
                                    placeholder="Your budget (Optional)"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-gray-600 dark:border-gray-500 text-white dark:text-gray-100 py-3 px-0
                                            focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition-colors duration-200 placeholder-gray-400 dark:placeholder-gray-400"
                                />
                            </div>
                            <div>
                                <label htmlFor="description" className="sr-only">Your project description</label>
                                <textarea
                                    id="description"
                                    placeholder="Your project description"
                                    rows={4}
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent border-b border-gray-600 dark:border-gray-500 text-white dark:text-gray-100 py-3 px-0 resize-none
                                            focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 transition-colors duration-200 placeholder-gray-400 dark:placeholder-gray-400"
                                ></textarea>
                            </div>

                            {statusMessage && (
                                <p className="text-center text-yellow-300 dark:text-yellow-400">
                                    {statusMessage}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-white text-gray-800 py-3 rounded-lg text-lg font-semibold shadow-md
                                        hover:bg-gray-200 transition-colors duration-300 transform hover:-translate-y-1
                                        disabled:opacity-50 disabled:cursor-not-allowed
                                        dark:bg-purple-600 dark:text-white dark:hover:bg-purple-700"
                            >
                                {isSubmitting ? 'Membuka Email...' : 'SEND'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <footer
                className="mt-20 md:mt-32 pt-8 md:pt-12 border-t border-gray-200 dark:border-gray-700"
            >
                <div
                    className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-gray-600 dark:text-gray-400 text-sm"
                >
                    <p className="mb-4 sm:mb-0">© {new Date().getFullYear()} Rzal Portofolio Website</p>
                    <div className="flex space-x-6">
                        <a href="https://www.facebook.com/risal.agosteen" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                            className="text-gray-600 hover:text-gray-800 transition-colors duration-200
                                dark:text-gray-400 dark:hover:text-white">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 13.5h2.5l1-4H14V6.5c0-1.54 0.5-2.5 2.75-2.5H19V0h-3.5C11.95 0 10 1.94 10 5.24V8.5H7v4h3v8h4v-7.5z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/risal-wahyu-agustin-6547b5362/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                            className="text-gray-700 hover:text-gray-900 transition-colors duration-200
                                dark:text-gray-400 dark:hover:text-white">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54c0 .96.79 1.73 1.77 1.73h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0zM7.34 20.47H3.59V9.49h3.75v10.98zM5.47 7.9c-1.2 0-2.17-.98-2.17-2.18 0-1.2.97-2.18 2.17-2.18s2.17.98 2.17 2.18c-.01 1.2-.97 2.18-2.17 2.18zM20.47 20.47h-3.75v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97v5.69h-3.75V9.49h3.6v1.65h.05c.5-.95 1.72-1.95 3.55-1.95 3.8 0 4.5 2.5 4.5 5.77v6.01z" />
                            </svg>
                        </a>
                        <a href="https://www.behance.net/risalagustin" target="_blank" rel="noopener noreferrer" aria-label="Behance"
                            className="text-gray-800 hover:text-gray-900 transition-colors duration-200
                                    dark:text-gray-400 dark:hover:text-white">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.5 12c0-5.25 4.25-9.5 9.5-9.5S21.5 6.75 21.5 12 17.25 21.5 12 21.5 2.5 17.25 2.5 12zM15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
                            </svg>
                        </a>
                        <a href="https://x.com/RisalWahyu11493" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
                            className="text-gray-400 hover:text-gray-600 transition-colors duration-200
                                    dark:text-gray-300 dark:hover:text-white">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-6.793-8.983L5.418 21.75H1.49L9.35 12.81 1.01 2.25h8.29L12 9.313 18.244 2.25zm-2.43 14.887l.867.754h3.084l-4.24-3.665-2.478 3.298zm-9.357-11.23L4.17 3.526h-3.084l4.24 3.665L9.357 5.25z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default ConnectMe;