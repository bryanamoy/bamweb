import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

function Footer() {
    // email draft button
    const email = "bryanmoy@gmail.com";
    const subject = "Hello Bryan Moy";
    const body = "Feel free to edit and say hello from my personal website";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return(
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Learn about my products
                </p>
                {/* <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            type='email'
                            name='email'
                            placeholder='Your Email'
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div> */}
            </section>
            <div className='footer-links'>
                <div className='footer-links-wrappers'>
                    <div className='footer-links-items'>
                        <h2>About Me</h2>
                        {/*These can be different links ex: /Careers /Investors*/}
                        <a href={'https://www.linkedin.com/in/bryan-moy-80568b12a/'} target='_blank'>
                            My LinkedIn
                        </a>
                        <Link to='/myResume'>Resume</Link>
                        <a
                            href={'https://github.com/bryanamoy'}
                            target='_blank'
                        >
                            My Github
                        </a>
                    </div>
                </div>
                <div className='footer-links-wrapper'>
                    <div className='footer-links-items'>
                        <h2>Products</h2>
                        {/*These can be different links ex: /Careers /Investors*/}
                        <Link to='/tttRobot'>Tic-Tac-Toe Robot</Link>
                        <Link to='/armFrogger'>Frogger Game</Link>
                        <a href={'https://aaycny.org'} target='_blank'>AAYC Website</a>
                    </div>
                </div>
                <div className='footer-links-wrapper'>
                    <div className='footer-links-items'>
                        <h2>Contact</h2>
                        {/*These can be different links ex: /Careers /Investors*/}
                        <Link to='/contact'>My Contact</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/home' className='social-logo'>
                            BaM <i className='fab fab-typo3' />
                        </Link>
                    </div>
                    <small className='website-rights'>Bryan Moy © 2021</small>
                    <div className='social-icons'>
                        <SocialIcon
                            url='https://www.linkedin.com/in/bryan-moy-80568b12a/'
                            network='linkedin'
                            target='_blank'
                            rel="noopener noreferrer"
                        />
                        <SocialIcon
                            url='https://github.com/bryanamoy'
                            network='github'
                            bgColor='#FF7F50'
                            target='_blank'
                            rel="noopener noreferrer"
                        />
                        <SocialIcon
                            url={mailtoLink}
                            network='mailto'
                            target='_blank'
                            rel="noopener noreferrer"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};


export default Footer;
