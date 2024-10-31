
import React from 'react';
import Image from 'next/image';
import Profile from '../../public/images/profile.png'

const Box = ({ heading, paragraph, image, color="bg-white" }) => {
  return (
    <div className= {`w-[300px]  h-[220px] py-4 px-8 ${color}`}>
        {image && <img src={image} alt="Box Visual" className="w-[70px] h-[70px] " />}
        <h3 className='font-bold border text- text-left mt-4 '>{heading}</h3> 
       <p className="text-sm font-[500] leading-normal opacity text-gray-700 ">{paragraph}</p>
    </div>
  );
};

export default Box;

