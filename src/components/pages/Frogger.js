import React, { useEffect } from 'react';
import '../../App.css';
import './Frogger.css';
import Footer from '../Footer.js';
import EDU from '../../images/edubase.jpg';

function Frogger() {
    useEffect(() => {
        window.open(
            'https://github.com/bryanamoy/FroggerGame',
            '_blank'
          );
    }, []);
    return (
        <div className='frogger-root'>
            <div className='frogger-container'>
                <h1 className='frogger'>Frogger</h1>
                <div className='frogger-des'>
                    <div className='frogger-text'>
                        <p>
                            This project was made with the Tiva TM4C123GH6PM microcontroller, EDUBase ARM Trainer board, and Putty.
                            To run the game load the frogger.c, frogger.s, and tm4c123gh6pm_startup_ccs.c (startup code) in Code Composer Studio,
                            as well as connect your Tiva TM4C123GH6PM microcontroller. This game replicates the Frogger game
                            made in 1981. The frog is represented as '&amp;' and the goal is to reach the openings in the top of the board.
                            There is a time limit, everytime you reach the frog into any 2 of 4 bases at the top of the board you will
                            receive points and additional time. Flys are represented as '+' and will receive 150 points for eating one with
                            your frog. Collision with Cars('C'), trucks('###'), river('~'), Alligator head('A'), and walls('|' or '*') will result in a lost life.
                        </p>
                    </div>
                    <div className='frogger-pic'>
                        <img src={EDU} alt='Tiva &amp; Eduboard'></img>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Frogger;