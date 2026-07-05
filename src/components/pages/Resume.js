import React from 'react';
import resume_file from '../../files/Bryan Moy Resume SWE.pdf';
import './Resume.css';
import Footer from '../Footer.js';


// function Resume() {
//     return(
//         <div className='resume'>
//             <div className='resume-container'>
//                 <div className='resume-img'>
//                     <img src={resume_file} alt='resume' />
//                 </div>
//                 <div className='resume-footer'>
//                     <Footer />
//                 </div>
//             </div>
//         </div>
//     );
// }
function Resume() {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>View Document</h1>
            <a href={resume_file} target="_blank" rel="noopener noreferrer">
                <button style={{ padding: '10px 20px', fontSize: '16px' }}>
                    Open PDF in New Tab
                </button>
            </a>
        </div>
    );
}

export default Resume;