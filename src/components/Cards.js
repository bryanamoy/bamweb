import React from 'react';
import CardItem from './CardItem.js';
import './Cards.css';
import Image1 from '../images/@.jpg';
import Image2 from '../images/tictactoerobot.png';
import Image3 from '../images/myself.PNG';

function Cards() {
    return (
        <div className='cards'>
            <h1>Click On These Cards For More Info!</h1>
            <div className="cards_container">
                <div className='cards_wrapper'>
                    <ul className='cards_items'>
                        <CardItem
                            // '/path/to/image.jpg' should work here also
                            src={Image1}
                            text='If You Want To Reach Me &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                            label='@me'
                            path='/contact'
                            // path can be changed to different urls
                        />
                        <CardItem
                            // '/path/to/image.jpg' should work here also
                            src={Image2}
                            text='Automated Tic-Tac-Toe Robot'
                            label='Programming'
                            path='/tttRobot'
                        ></CardItem>
                        {/* to make another row, have to wrap around another ul tag*/}
                    </ul>
                    <ul>
                    <CardItem
                        // '/path/to/image.jpg' should work here also
                        src={Image3}
                        text='Who I AM'
                        label='Bio'
                        path='/aboutMe'
                    />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
