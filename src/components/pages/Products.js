import React from 'react';
import '../../App.css';
import Footer from '../Footer.js';
import './Products.css';
import TTT from '../../images/tictactoeboard.png';
import Frog from '../../images/frogger2.jpg';
import Github from '../../images/githublogo.png';
import aayclogo from '../../images/aayclogo.jpg';
import { Link } from 'react-router-dom';


function Products() {
    return (
        <div className='products-root'>
            <div className='products-container'>
                <h1 className='products'>Products</h1>
                <div className='products-items'>
                    <ul>
                        <a href={'https://github.com/bryanamoy'} target='_blank'>
                            <img src={Github} className='githubicon' />
                        </a>
                        <Link to='/tttRobot'>
                            <img src={TTT} className='tttrobot' />
                        </Link>
                    </ul>
                    <ul>
                        <Link to='/armFrogger'>
                            <img src={Frog} className='froggy' />
                        </Link>
                        <a href={'https://aaycny.org'} target='_blank'>
                            <img src={aayclogo} className='aayc' />
                        </a>
                    </ul>
                    
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Products;