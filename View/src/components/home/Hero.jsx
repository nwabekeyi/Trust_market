import React from 'react';
import svg from "../../assets/feature-svg.png";
import hero from "../../assets/hero-image.png";
import { TextField } from '../FormTemplate';
import { IoSearch } from "react-icons/io5";

const Hero = (props) => {

  const header = [
    {
      mainHead: "Your Perfect Marketplace Experience ",
      subHeader: "Whether buying or selling, we provide seamless protection, every step of the way",
    },
  ];

  const features = [
    {
      feature1: 'Secured payment',
      feature2: '100% Guarantee',
      feature3: 'User protection',
      feature4: '24/7 support',
      svg: svg,
    }
  ];
  return (
    <section className='px-20 w-[70%] mb-[100px] mt-5' >
      <div className='flex '>
        <div className="mt-10 ">
        <h2 className='text-[58px] text-greyLight font-light leading-[55px]'>Your <span className='text-red font-semibold'>Perfect Marketplace</span> Experience</h2>
        {header.map((headers, index) => (
        <div key={index}>
          <p className='text-greyLighter text-lg  w-4/6 mt-3'>{headers.subHeader}</p>
        </div>
        ))}
        <div className='mt-9'>
          <div className='flex items-center mb-5'>
          <input type="serach" className='rounded-l-lg w-2/5 bg-gray-100 px-3 py-3' placeholder='Search product here'/> 
          <div className='rounded-r-lg w-11 h-11 bg-red flex items-center justify-center'>
        <IoSearch size={13} className=' text-white'  />

        </div>
      </div>

        {/* service features */}
     <div className='mt-8'>
        {features.map((feature, index) => (
          <div className='flex mt-2 space-x-5'>
            <div className='mr-3'>
              <div className='flex  mb-3 space-x-1'>
                <img className="w-5 h-5" src={feature.svg} alt="" />
                <p className='text-greyLighter text-sm'>{feature.feature1}</p> 
              </div>
              <div className='flex  items-center space-x-1 '>
                <img className="w-5 h-5" src={feature.svg} alt="" />
                <p className='text-greyLighter text-sm'>{feature.feature3}</p>
              </div>
            </div>

            <div className='mr-3'>
              <div className='flex mb-3 space-x-1 items-center'>
                <img className="w-5 h-5" src={feature.svg} alt="" />
                <p className='text-greyLighter text-sm'>{feature.feature2}</p>
              </div>
              <div className='flex space-x-1 items-center'>
                <img className="w-5 h-5" src={feature.svg} alt="" />
                <p className='text-greyLighter text-sm'>{feature.feature4}</p>
              </div>
            </div>
          </div>

        ))}
      </div>
     </div>
      </div>
        {/* hero image */}
          <img className=" w-[600px] h-auto  absolute left-[52vw] top-[12vh] " src={hero} alt="smiling lady with bag of goods" />
      </div>
    </section>
  );
}

export default Hero;
