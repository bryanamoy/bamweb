import React from 'react';
import CardItem from './CardItem.js';
import './Cards.css';
import Image1 from '../images/macao.PNG';
import Image2 from '../images/tictactoerobot.png';
import Image3 from '../images/myself.PNG';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these Epic Destinations</h1>
            <div className="cards_container">
                <div className='cards_wrapper'>
                    <ul className='cards_items'>
                        <CardItem
                            // '/path/to/image.jpg' should work here also
                            src={Image1}
                            text='My Beautiful trip to Macao'
                            label='Travel'
                            path='/products'
                            // path can be changed to different urls
                        />
                        <CardItem
                            // '/path/to/image.jpg' should work here also
                            src={Image2}
                            text='Automated Tic-Tac-Toe Robot'
                            label='Programming'
                            path='/products'
                        />
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
