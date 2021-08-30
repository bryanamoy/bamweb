import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
    return(
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Learn about my product changes
                </p>
                <p className='footer-subscription-text'>
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
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-links-wrappers'>
                    <div className='footer-links-items'>
                        <h2>About Me</h2>
                        {/*These can be different links ex: /Careers /Investors*/}
                        <Link to='/myLinkedIn'>LinkedIn</Link>
                        <Link to='/myResume'>Resume</Link>
                        <Link to='/myGithub'>Github</Link>
                    </div>
                </div>
                <div className='footer-links-wrapper'>
                    <div className='footer-links-items'>
                        <h2>Products</h2>
                        {/*These can be different links ex: /Careers /Investors*/}
                        <Link to='/tttRobot'>Tic-Tac-Toe Robot</Link>
                        <Link to='/armFrogger'>Frogger Game</Link>
                        <Link to='/someProject'>Some Project</Link>
                    </div>
                </div>
                <div className='footer-links-wrapper'>
                    <div className='footer-links-items'>
                        <h2>Contact</h2>
                        {/*These can be different links ex: /Careers /Investors*/}
                        <Link to='/contacts'>My Contacts</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            BaM <i className='fab fab-typo3' />
                        </Link>
                    </div>
                    <small className='website-rights'>Bryan Moy © 2020</small>
                    <div className='social-icons'> 
                        <Link
                            to='/'
                            className='social-icon-link facebook'
                            // this opens in new tab
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i className='fab fa-facebook-f'></i>
                        </Link>
                        <Link
                            to='/'
                            className='social-icon-link instagram'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram'></i>
                        </Link>
                        <Link
                            to='/'
                            className='social-icon-link linkedin'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i className='fab fa-linkedin'></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};


export default Footer;
