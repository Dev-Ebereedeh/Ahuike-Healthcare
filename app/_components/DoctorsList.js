import React from "react";
import Image from "next/image";
import Link from "next/link";
import Oncology1 from "../../public/images/canchild.jpg";
import Cancers from "../../public/images/cancer.jpg";
import { doctorData } from "./Docarray";



const DoctorsList = () => {
  return (
  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {doctorData.map((doctor, index) => (
          <div>
            
    
            <div className='md:w-[500px]  mx-16 relative z-0 pt-24 hidden md:block md:rounded-lg'>
            <img src={service.icon} alt='service box' />
            </div>
        
           <div className='hidden md:block bg-red  text-center  md:w-[400px] md:h-[150px] p-8 md:p-8 mx-28 bg-white -mt-24 relative z-10 mb-8'>
              <h4 className='text-xl md:text-2xl font-semibold'>{doctor.title}</h4>
    
              <Link href={`./about/${about.link}`}>
                <p className="text-blue-500 hover:underline text-center block">
                  Learn more →
                </p>
              </Link>

           </div>
       
             

              
              
          </div>

             
            
          
        ))}
      </div>
  
  );
};
export default ServicesList;
