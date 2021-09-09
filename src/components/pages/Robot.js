import React, { useEffect } from 'react';
import '../../App.css';
import './Robot.css';
import Footer from '../Footer.js';
import TTTBoard from '../../images/tictactoeboard.png';
import TTTDetection from '../../images/tttdetection.png';

function Robot() {
    useEffect(() => {
        // window.location.href = 'https://medium.com/cse-468-568-robotic-algorithms/rrros-tic-tac-toe-robot-3-3-3130f4245273';
        window.open(
            'https://medium.com/cse-468-568-robotic-algorithms/rrros-tic-tac-toe-robot-3-3-3130f4245273',
            '_blank'
          );
    }, []);

    return (
        <div className='robot'>
            <div className='robot-container'>
                <div className='robot-img'>
                    <img
                        src={TTTBoard}
                    />
                    <img
                        src={TTTDetection}
                    />
                </div>
                <h2>Tic Tac Toe Robot:</h2>
                <div className='robot-p'>
                    <p>
                        One of the projects I really enjoyed was programming a UARM Swift robot that would play against
                        a human in Tic Tac Toe. This was really interesting because I had the opportunity to develop
                        many different programming skills varying from line and circle detection, robotic algorithms,
                        and computational algorithms depending on the state of the game. The repository to this project
                        can be found here:
                        <a href={'https://github.com/bryanamoy/RRRO'} target='_blank'>
                            Tic Tac Toe Robot Github
                        </a>
                    </p>
                    <p>
                        Some technical details of how this project was built, Image Processing (shown in figures 1, 2, & 3):
                        The first necessary step in processing images for our project is cropping. To achieve this goal we used corner detection. We specifically used the Harris Corner Detection Method. By using corner detection on the image we were able to map out the pixels of the board using the x, y coordinates when displaying the picture. Through this, we can isolate each cell of the grid by slicing the image using specific x, y coordinates that each cell holds. We then process individual boxes for our future steps.
                        The next necessary step is image thresholding. This is to decipher the objects in the images: X’s, O’s, and the tic tac toe board. This is done by gray-scaling the image so that we can “threshold” pixel values and filter out the black grid. Our threshold value is to be set to 20 for optimal filtering since we will be using colored markers for each player.
                        To achieve our goal of processing markings of X’s, we will use line detection. We will be using the Houghline method, through the opencv library. This is by measuring angles and line distance of objects in the photo. We will apply this functionality to the snapshots of each cropped cell. After detecting an X, we can then update the indices of our matrix (representing the current state of the game) with an X.
                        To achieve our goal of processing markings of O’s, we will use circle detection. Again, we are using the Houghline method. This functionality is done by finding a point that is surrounded by differing colored markings creating a circumference. This will also be applied to the snapshots of each cell. If a circle is detected, we then again update the matrix.
                    </p>
                    <p>    
                        Movement:
                        <br></br>
                        For movement, we will handle this by having a static setup where the UARM Swift and the board are in the same position every game. Each cell of the tic tac toe grid will have specific coordinates that we can send the robot arm to move. For example, if the robot arm were to mark an X in the center cell, we will program the arm to move 114mm forward. From there, our programming will consist of moving down the arm, then dragging the marker in a diagonal motion for 25mm. Rising from that position, the robot arm will move forward and drag the marker in the opposite direction for 25mm again. For O’s, the arm will go to the specific coordinates and similarly make a mark but in a circular motion.
                    </p>
                </div>
                <Footer />
            </div>
            
        </div>
        
    );
};


export default Robot;