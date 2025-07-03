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
    videoSrc = "../assets/video/202506260821.mp4",
    videoPoster = "../assets/images/r7.webp",
    loop = false,
    muted = false,
    autoPlay = false,
    playsInline = true,
    className,
}) => {
    const videoSourceWebM = videoSrc.replace(/\.mp4$/, '.webm');

    return (
        <section className="bg-gray-100 text-gray-800 py-20 px-5 md:px-20 flex flex-col items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                Learn all about me in 60 seconds.
            </h2>
            <div className={`video-container relative w-full max-w-3xl aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-xl ${className || ''}`}>
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
                    Maaf, browser Anda tidak mendukung video HTML5.
                </video>
            </div>
            <p className="mt-8 text-lg text-gray-600 text-center max-w-2xl">
                Video ini memberikan gambaran singkat tentang saya dan apa yang saya tawarkan.
                Jangan ragu untuk menghubungi saya jika Anda memiliki pertanyaan!
            </p>
        </section>
    );
};

export default AboutVideoSection;