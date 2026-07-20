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
        <div className='resume'>
            <div className='resume-container'>
                <div style={{ padding: '20px', textAlign: 'center' }}>
                    <h1>Bryan Moy's Resume</h1>
                    <div className='pdf-viewer' style={{ height: '80vh', width: '100%' }}>
                        <iframe
                            src={resume_file}
                            width="100%"
                            height="100%"
                            title="Resume PDF Viewer"
                        />
                    </div>
                    <div className='resume-buttons'>
                        <a href={resume_file} target="_blank" rel="noopener noreferrer">
                            <button style={{ padding: '10px 20px', fontSize: '16px' }}>
                                Open PDF in New Tab
                            </button>
                        </a>
                        <a href={resume_file} download="Bryan Moy SWE Resume.pdf">
                            <button style={{ padding: '10px 20px', fontSize: '16px' }}>
                                Download Resume
                            </button>
                        </a>
                    </div>
                </div>
                <div className='resume-footer'>
                    <Footer />
                </div>
            </div>
        </div>
        
        
        
    );
}

export default Resume;