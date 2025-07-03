"use client";

import React from 'react';

interface AboutVideoSectionProps {
    videoSrc?: string;
    videoPoster?: string;
    loop?: boolean;
    muted?: boolean;
    autoPlay?: boolean;
    playsInline?: boolean;
    className?: string;
}

const AboutVideoSection: React.FC<AboutVideoSectionProps> = ({
    videoSrc = "video/202506260821.mp4",
    videoPoster = "images/me.webp",
    loop = false,
    muted = false,
    autoPlay = false,
    playsInline = true,
    className,
}) => {
    const videoSourceWebM = videoSrc.replace(/\.mp4$/, '.webm');

    return (
        <section
            id="about-video-section"
            // Latar belakang di light mode: abu-abu terang, di dark mode: abu-abu sangat gelap (900)
            // Warna teks utama di light mode: abu-abu gelap (800), di dark mode: abu-abu terang (200)
            className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-20 px-5 md:px-20 flex flex-col items-center justify-center"
        >
            <h2
                // Warna judul di light mode: abu-abu gelap (800), di dark mode: putih
                className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800 dark:text-white"
            >
                Learn all about me in 60 seconds.
            </h2>
            <div
                // Latar belakang container video di light mode: abu-abu (200), di dark mode: abu-abu gelap (700)
                // Shadow di light mode: shadow-xl, di dark mode: shadow-2xl dengan warna ungu transparan
                className={`video-container relative w-full max-w-3xl aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-xl dark:shadow-2xl dark:shadow-purple-900/50 ${className || ''}`}
            >
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    controls
                    poster={videoPoster}
                    loop={loop}
                    muted={muted}
                    autoPlay={autoPlay}
                    playsInline={playsInline}
                    preload="metadata"
                >
                    <source src={videoSrc} type="video/mp4" />
                    <source src={videoSourceWebM} type="video/webm" />
                    Sorry , your browser not support video HTML5.
                </video>
            </div>
            <p
                // Warna teks paragraf di light mode: abu-abu gelap (600), di dark mode: abu-abu terang (400)
                className="mt-8 text-lg text-gray-600 dark:text-gray-400 text-center max-w-2xl"
            >
                This video offers a brief overview of who I am and what I offer.
                Feel free to contact me if you have any questions!
            </p>
        </section>
    );
};

export default AboutVideoSection;