import React from 'react';
import resume_file from '../../images/resume.PNG';
import './Resume.css';
import Footer from '../Footer.js';


function Resume() {
    return(
        <div className='resume'>
            <div className='resume-container'>
                <div className='resume-img'>
                    <img src={resume_file} alt='resume' />
                </div>
                <div className='resume-footer'>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Resume;