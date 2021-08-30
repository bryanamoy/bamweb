import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Myvid from '../videos/video-2.mp4';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={Myvid} type='video/mp4' autoPlay loop muted />
            <h1>Bryan Moy</h1>
            <p>Full Stack Engineer</p>
            <div className='hero-btns'>
                <Button 
                    className='btns' 
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                    About Me
                </Button>
                <Button 
                    className='btns' 
                    buttonStyle='btn--primary' 
                    buttonSize='btn--large'>
                    Contact
                    {/* Watch Me <i className='far fa-play-circle' /> */}
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;
