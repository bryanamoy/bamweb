import React from 'react';
import '../../App.css';
import Footer from '../Footer.js';
import './AboutMe.css';
import ProfilePic from '../../images/macaoprofile.jpg';



function AboutMe() {
    return (
        <div className='aboutme'>
            <div className='aboutme-container'>
                <h1 className='aboutMe'>About Me</h1>
                <div className='aboutme-bio'>
                    <div className='aboutme-text'>
                        <p>
                            After earning my degree in Computer Engineering from University at Buffalo,
                            I entered the Software Development world to explore my passion for computers and technology.
                            Given my choice in my degree, I have interests over the whole spectrum of computers; from
                            Front-end to Back-end, Blockchain, Embedded Systems, and all the way down to computer hardware,
                            I have a fascination of the direction technology is headed today. I am a Software Engineer,
                            because it gratifies my ambition to create, engineer, and design technologies that may resolve 
                            world or everyday issues, or products that are just outright cool. Because the computer industry
                            is so broad, I feel there is something I can always learn about and dive into. Not only that, but 
                            it is a place where I can work well as a team member or as an individual; an industry where I belong.
                        </p>
                        <p>
                            In addition to my primary job, I also am involved in bettering the community I grew up in.
                            Through <a href={'https://www.aaycny.org/'} alt='AAYC website'>Asian American Youth Center</a>
                            , a community service organization I hold dear to my heart, I've volunteered at many of their
                            philanthropic events servicing the less fortunate of downtown New York City. This organization
                            who is also my first client (Developed their website), helped kids of
                            Lower Manhattan, stay off the streets through free sports camps every weekend, find jobs through
                            workshops and career days, and provide collegiate scholarships. Through many years of being part
                            of such a selfless community, it has made me who I am today. Not only did it teach me leadership,
                            teamwork, and responsibility, I've gained so many lifelong connections and values that have guided
                            to a relatively stable and fulfilling life.
                        </p>
                    </div>
                    <div className='aboutme-pic'>
                        <img src={ProfilePic} alt='profile' width='40%' height='40%'></img>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutMe;