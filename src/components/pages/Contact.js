import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react';
import '../../App.css';
import Footer from '../Footer.js';
import './Contact.css'

function Contact() {
    const email = "bryanmoy@gmail.com";
    const subject = "Hello Bryan Moy";
    const body = "Feel free to edit and say hello from my personal website";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return (
        <div className='contact-root'>
            <div className='contact-container'>
                <h1 className='contact'>Contact</h1>
                <div className='contact-text-container'>
                    <div className='contact-text'>
                        <h2>Reach out to Me</h2>
                        <p>
                            Email:&nbsp;
                            <a
                                href={mailtoLink}
                                alt='bryanmoy@gmail.com'
                                target='_blank'
                            >
                                bryanmoy@gmail.com
                            </a>
                            <br></br>
                            LinkedIn:&nbsp;
                            <a 
                                href={'https://www.linkedin.com/in/bryan-moy-80568b12a/'} 
                                alt='Bryan Moy&#39;s LinkedIn'
                                target='_blank'
                            >
                            https://www.linkedin.com/in/bryan-moy-80568b12a/
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};


export default Contact;