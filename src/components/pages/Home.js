import React from 'react';
import backgroundImage from '../../assets/images/homepage.jpg';

export default function Home() {
  return (
    <div className='home-page'>
        <div className='home-image'>
            <img src={backgroundImage} alt='homepage'></img>
        </div>
        <h1>MARK BARSTOW</h1>
        <p>
            I am a 21 y/o bootcamp student from Charlottesville, Virginia 
            who is looking to enhance my creative ability through code. 
            In addition to development, my passions lie in the subjects of art, 
            design, and music production. It is my goal to be able to find a profession 
            that merges my intellectual and skill-based pursuits with the ability to 
            creatively display my talent.
        </p>
    </div>
  );
}