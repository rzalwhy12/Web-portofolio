// components/ConnectMe.tsx atau pages/connect-me.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// Jika Anda masih ingin menggunakan gambar dari '../assets/images',
// pastikan Anda mengimpornya dengan benar untuk Next.js Image component
// import FacebookIcon from '../assets/images/facebook.svg'; // Hapus jika sudah SVG inline
// import LinkedInIcon from '../assets/images/linkedin-logo.svg'; // Hapus jika sudah SVG inline
// import BehanceIcon from '../assets/images/behance.svg'; // Hapus jika sudah SVG inline
// import Image from 'next/image'; // Hapus jika tidak ada Image dari next/image yang digunakan

const ConnectMe: React.FC = () => {
    // ==================Manajemen State====================
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    // Kita akan tetap menggunakan isSubmitting untuk feedback UI (misal: tombol disabled)
    const [isSubmitting, setIsSubmitting] = useState(false);
    // Pesan feedback setelah mailto: terbuka
    const [submitMessage, setSubmitMessage] = useState('');

    // ==================Handler Perubahan Input====================
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // ==================Handler Pengiriman Formulir (Menggunakan mailto:)====================
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true); // Mulai proses feedback UI
        setSubmitMessage(''); // Kosongkan pesan sebelumnya

        const recipientEmail = 'rzalcorp05@gmail.com'; // Alamat email tujuan
        const encodedSubject = encodeURIComponent(`Message from Portfolio: ${formData.subject || 'No Subject'}`);
        const encodedBody = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Subject: ${formData.subject || 'N/A'}\n\n` +
            `Message:\n${formData.message}`
        );

        const mailtoLink = `mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`;

        // Buka aplikasi email default pengguna
        window.location.href = mailtoLink;

        // Berikan feedback kepada pengguna setelah mailto terbuka
        // Kita tidak bisa tahu pasti apakah pengguna mengirim emailnya atau tidak.
        setTimeout(() => {
            setIsSubmitting(false); // Selesaikan proses feedback UI
            setSubmitMessage('Your email client has been opened. Please review the message and click "Send".');
            // Opsional: kosongkan form setelah mencoba membuka mailto
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
        }, 1000); // Beri sedikit waktu untuk browser membuka aplikasi email
    };

    return (
        // ==================Wadah Bagian Utama====================
        <section id="connect-me-page" className="py-20 md:py-32 bg-gray-100 min-h-screen">
            <div className="container mx-auto px-4">
                {/* ==================Tombol Kembali==================== */}
                <div className="mb-10">
                    {/* Pastikan Link ini mengarah ke bagian yang benar di halaman utama Anda */}
                    <Link href="/#connect-me" className="text-gray-600 hover:text-gray-900 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                        Back to Contact Section
                    </Link>
                </div>

                {/* ==================Judul Halaman dan Subjudul==================== */}
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center">
                    Connect With Me
                </h1>
                <p className="text-xl text-gray-700 mb-12 text-center max-w-2xl mx-auto">
                    Feel free to reach out for collaborations, project inquiries, or just to say hello!
                </p>

                {/* ==================Tata Letak Kartu Kontak==================== */}
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-xl grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* ==================Bagian Formulir Kontak==================== */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">Send Me a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name" // Pastikan name atribut ada dan sesuai dengan state
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-500"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email" // Pastikan name atribut ada dan sesuai dengan state
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-500"
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject" // Pastikan name atribut ada dan sesuai dengan state
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-500"
                                    placeholder="Subject of your message"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message" // Pastikan name atribut ada dan sesuai dengan state
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-500"
                                    placeholder="Your message..."
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`bg-gray-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md
                                hover:bg-gray-700 transition-colors duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? 'Opening Email Client...' : 'Send Message'}
                            </button>
                            {/* =========================Pesan feedback pengiriman========================= */}
                            {submitMessage && (
                                <p className={`mt-4 text-center text-yellow-600`}> {/* Mengubah warna pesan feedback */}
                                    {submitMessage}
                                </p>
                            )}
                        </form>
                    </div>

                    {/* ==================Bagian Info Kontak dan Media Sosial==================== */}
                    <div className="md:border-l md:border-gray-200 md:pl-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">Contact Info</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Me</h3>
                                <p className="text-lg text-gray-700">
                                    <a href="mailto:rzalcorp05@gmail.com" className="text-gray-600 hover:underline">
                                        rzalcorp05@gmail.com
                                    </a>
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Me</h3>
                                <p className="text-lg text-gray-700">
                                    <a href="tel:+6282142991064" className="text-gray-600 hover:underline">
                                        +62 821 4299 1064
                                    </a>
                                </p>
                            </div>

                            <div className="pt-8">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Find Me On</h3>
                                <div className="flex space-x-6">
                                    {/* Jika Anda sebelumnya menggunakan Image dari next/image untuk ikon sosial,
                                        Anda perlu mengimpornya kembali. Jika ini adalah SVG inline, itu baik-baik saja.
                                        Saya mengasumsikan Anda menggunakan SVG inline atau menghapus import Image jika tidak digunakan.
                                    */}
                                    <a href="https://www.facebook.com/risal.agosteen" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
                                        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 13.5h2.5l1-4H14V6.5c0-1.54 0.5-2.5 2.75-2.5H19V0h-3.5C11.95 0 10 1.94 10 5.24V8.5H7v4h3v8h4v-7.5z" /></svg>
                                    </a>
                                    <a href="https://www.linkedin.com/in/risal-wahyu-agustin-6547b5362/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                                        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54c0 .96.79 1.73 1.77 1.73h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0zM7.34 20.47H3.59V9.49h3.75v10.98zM5.47 7.9c-1.2 0-2.17-.98-2.17-2.18 0-1.2.97-2.18 2.17-2.18s2.17.98 2.17 2.18c-.01 1.2-.97 2.18-2.17 2.18zM20.47 20.47h-3.75v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97v5.69h-3.75V9.49h3.6v1.65h.05c.5-.95 1.72-1.95 3.55-1.95 3.8 0 4.5 2.5 4.5 5.77v6.01z" /></svg>
                                    </a>
                                    <a href="https://www.behance.net/risalagustin" target="_blank" rel="noopener noreferrer" aria-label="Behance" className="text-gray-800 hover:text-gray-900 transition-colors duration-200">
                                        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 12c0-5.25 4.25-9.5 9.5-9.5S21.5 6.75 21.5 12 17.25 21.5 12 21.5 2.5 17.25 2.5 12zM15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" /></svg>
                                    </a>
                                    <a href="https://x.com/RisalWahyu11493" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                                        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-6.793-8.983L5.418 21.75H1.49L9.35 12.81 1.01 2.25h8.29L12 9.313 18.244 2.25zm-2.43 14.887l.867.754h3.084l-4.24-3.665-2.478 3.298zm-9.357-11.23L4.17 3.526h-3.084l4.24 3.665L9.357 5.25z" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConnectMe;