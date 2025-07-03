"use client";

import React from 'react';

const AboutVideoSection: React.FC = () => {
    return (
        <section className="bg-gray-100 text-gray-800 py-20 px-5 md:px-20 flex flex-col items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                Learn all about me in 60 seconds.
            </h2>
            <div className="video-container relative w-full max-w-3xl aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-xl">
                
                <iframe width="560" height="315" 
                    src="/src/assets/video/202506260821.mp4"
                    title="Learn about me in 60 seconds"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                ></iframe>
            </div>
            <p className="mt-8 text-lg text-gray-600 text-center max-w-2xl">
                Video ini memberikan gambaran singkat tentang saya dan apa yang saya tawarkan.
                Jangan ragu untuk menghubungi saya jika Anda memiliki pertanyaan!
            </p>
        </section>
    );
};

export default AboutVideoSection;