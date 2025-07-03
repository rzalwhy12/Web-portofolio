import React from 'react';
import HeroSection from '../component/HeroSection'; 
import WhatIDo from '@/component/WhatIDo';
import Portfolio from '@/component/Portfolio';
import ClientTestimonial from '@/component/ClientTestimonial';
import ContactMe from '@/component/ContactMe';
import AboutMe from '@/component/AboutMe';
import ConnectMe from '@/component/ConnectMe';
import AboutVideoSection from '@/component/AboutVideoSection';

function App() {
    return (
        <div>
            <HeroSection/>
            <main>
            {/* Panggil komponen AboutVideoSection dan passing props 'src' */}
            <AboutVideoSection
                src="/assets/video/202506260821.mp4" // Ganti dengan path video Anda yang sebenarnya
                poster="/images/portofolio/id2.jpg" // Ganti dengan path thumbnail Anda
                muted={true} // Contoh: ingin video dimulai dalam keadaan muted
                autoPlay={false} // Contoh: tidak ingin auto-play
                loop={true} // Contoh: ingin video berulang
                className="max-w-4xl" // Contoh: tambahkan kelas Tailwind tambahan untuk lebar maksimal
            />
            <section className="py-10 text-center">
                <h1 className="text-4xl font-bold">Selamat Datang di Portofolio Saya!</h1>
                <p className="mt-4 text-lg">Jelajahi proyek-proyek saya.</p>
            </section>
        </main>
            <AboutMe/>
            <WhatIDo/>
            <Portfolio/>
            <ClientTestimonial/>
            <ContactMe/>
            <ConnectMe/>
        </div>
    );
}

export default App;