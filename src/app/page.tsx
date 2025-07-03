import React from 'react';
import HeroSection from '../component/HeroSection';
import WhatIDo from '../component/WhatIDo';
import Portfolio from '../component/Portfolio';
import ClientTestimonial from '../component/ClientTestimonial';
import ContactMe from '../component/ContactMe';
import AboutMe from '../component/AboutMe';
import ConnectMe from '../component/ConnectMe';
import AboutVideoSection from '../component/AboutVideoSection';

function App() {
    return (
        <div>
            <HeroSection />
            <AboutVideoSection />
            <AboutMe />
            <WhatIDo />
            <Portfolio />
            <ClientTestimonial />
            <ContactMe />
            <ConnectMe />
        </div>
    );
}

export default App;