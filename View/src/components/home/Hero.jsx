import React from 'react';
import hero from '../../assets/hero.png'; // Assuming the path to your image is correct
import Button from '../Button';

const Hero = () => {
  const divStyle = {
    height: '450px',
    backgroundImage: `url(${hero})`, // Applying the background image
    backgroundSize: 'cover', // Optional: adjust background size as needed
    backgroundPosition: 'center', // Optional: adjust background position as needed
  };

  return (
    <div style={divStyle}>
      <div className=' flex space-x-[15px] justify-center pt-[340px]'>
        <Button primary learnMore>
          <h2>Learn More</h2>
        </Button>

        <Button primary getStarted>
          <h2>Get Started</h2>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
