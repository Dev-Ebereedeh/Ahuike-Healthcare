
import React from 'react';
import Image from 'next/image';
import Profile from '../../public/images/profile.png'

const Box = ({ heading, paragraph, image, color="bg-white" }) => {
  return (
    <div className= {`w-[300px]  h-[220px] md:w-[400px] md:h-[300px] py-8 md:p-8 px-8 md:mt-8 md:rounded-2xl mt-16 ${color}`}>
        {image && <img src={image} alt="Box Visual" className="w-[70px] h-[70px]" />}
        <h3 className='font-bold text- text-left mt-4 text-xl  '>{heading}</h3> 
       <p className=" leading-normal text-xl text-gray-700 md:text-2xl md:w-[350px] md:pb-4">{paragraph}</p>
    </div>
  );
};

export default Box;

