import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react';
import '../../App.css';
import Footer from '../Footer.js';
import './Contact.css'

function Contact() {
    return (
        <div className='contact-root'>
            <div className='contact-container'>
                <h1 className='contact'>Contact</h1>
                <div className='contact-text-container'>
                    <div className='contact-text'>
                        <h2>Reach out to Me</h2>
                        <p>
                            Email: bryanmoy@gmail.com
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