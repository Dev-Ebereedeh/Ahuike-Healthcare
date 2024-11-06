import React from "react";
import Image from "next/image";
import Link from "next/link";
import Oncology1 from "../../public/images/canchild.jpg";
import Cancers from "../../public/images/cancer.jpg";

export const servicesData = [
  {
    id: 1,
    icon: "/images/neuro.jpg",
    title: "Neurology",
    description:
      "Focusing on the unique health needs of infants, children, and teens",
    link: "neurology",
    imageUrl: "/images/canchild.jpg",
    heading: "Nurturing Your Child's Health",
    p1: "Our pediatric department is dedicated to providing comprehensive and compassionate care for children of all ages, from newborns to adolescents. We understand that children have unique healthcare needs, and our team of experienced pediatricians, nurses, and specialists is committed to providing personalized care that meets those needs.",
    p2: "We believe in building strong relationships with our patients and their families. We take the time to listen to your concerns, answer your questions, and provide education and support to help you make informed decisions about your child's health. We strive to create a welcoming and child-friendly environment where your child feels comfortable and safe.",
  },

  {
    id: 1,
    icon: "",
    title: "Pediatric",
    description:
      "Focusing on the unique health needs of infants, children, and teens",
    link: "Oncology",
    imageUrl: "",
    heading: "Nurturing Your Child's Health",
    p1: "Our pediatric department is dedicated to providing comprehensive and compassionate care for children of all ages, from newborns to adolescents. We understand that children have unique healthcare needs, and our team of experienced pediatricians, nurses, and specialists is committed to providing personalized care that meets those needs.",
    p2: "We believe in building strong relationships with our patients and their families. We take the time to listen to your concerns, answer your questions, and provide education and support to help you make informed decisions about your child's health. We strive to create a welcoming and child-friendly environment where your child feels comfortable and safe.",
  },

  {
    id: 1,
    icon: "",
    title: "Pediatric",
    description:
      "Focusing on the unique health needs of infants, children, and teens",
    link: "oncology",
    imageUrl: "",
    heading: "Nurturing Your Child's Health",
    p1: "Our pediatric department is dedicated to providing comprehensive and compassionate care for children of all ages, from newborns to adolescents. We understand that children have unique healthcare needs, and our team of experienced pediatricians, nurses, and specialists is committed to providing personalized care that meets those needs.",
    p2: "We believe in building strong relationships with our patients and their families. We take the time to listen to your concerns, answer your questions, and provide education and support to help you make informed decisions about your child's health. We strive to create a welcoming and child-friendly environment where your child feels comfortable and safe.",
  },
];

const ServicesList = () => {
  return (
  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <div>
            
    
            <div className='md:w-[500px]  mx-16 relative z-0 pt-24 hidden md:block md:rounded-lg'>
            <img src={service.icon} alt='service box' />
            </div>
        
           <div className='hidden md:block bg-red  text-center  md:w-[400px] md:h-[150px] p-8 md:p-8 mx-28 bg-white -mt-24 relative z-10 mb-8'>
              <h4 className='text-xl md:text-2xl font-semibold '>{service.title}</h4>
    
              <Link href={`./Service/${service.link}`}>
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
