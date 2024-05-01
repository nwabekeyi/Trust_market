import React from 'react';
import hero from '../../assets/hero.png';
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
    <div className='text-white w-[60vw] m-auto pt-[8%]'>
            <h1 className='text-5xl font-bold text-center'>Empowering Connections, Enabling Trust.</h1>
            <h1 className='text-4xl font-bold text-center'>Discover Your Perfect Marketplace Experience.</h1>
            <h3 className='w-[60%] m-auto'>
            We connect buyers and sellers, ensuring trust and reliability. Our secure escrow services guarantee peace of mind for all transactions. Whether buying or selling, 
            we provide seamless protection every step of the way.
            </h3>
        </div>
      <div className=' flex space-x-[15px] justify-center mt-5'>
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
