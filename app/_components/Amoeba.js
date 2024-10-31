import React from 'react'
import Profile from '../../public/images/profile.png'

// components/AmoebaImage.js
const AmoebaImage = () => {
    return (
      <div className="relative inline-block overflow-hidden">
        <img
          src="https://www.istockphoto.com/photo/close-up-of-a-female-has-a-video-call-with-her-female-family-doctor-on-smartphone-gm1315185678-403223716?searchscope=image%2Cfilm" 
          alt="Amoeba Shape"
          className="w-80 h-64 transform transition-transform duration-300 ease-in-out hover:scale-110"  style={{
            clipPath: 'polygon(50% 0%, 100% 0%, 0% 300%, 0% 20%)', // Custom shape
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-30 rounded-full transform scale-110"></div>
      </div>
    );
  };
  
  export default AmoebaImage;
  
