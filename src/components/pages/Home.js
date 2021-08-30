import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection.js';
import Cards from '../Cards.js'
import Footer from '../Footer.js';


function Home() {
    return (
        <div>
            <HeroSection />
            <Cards />
            <Footer />
        </div>
    );
}

export default Home;
