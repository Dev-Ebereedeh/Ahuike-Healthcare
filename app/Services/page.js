import React from 'react'
import Footer from '../_components/Footer'
import Box from '../_components/Box'
import Image from 'next/image'
import Baby from '../../public/images/baby.jpg'

export default function Services() {
  return (

       


    <div className=' w-full h-screen flex  items-center justify-around '>

     <Image src={Baby} alt='babysmile'className='w-[500px] h-[300px] '/>
    
       


     <div>
        
        
     <Box
      heading= "Virtual Consultations "
      image="https://img.icons8.com/?size=100&id=CEb2EIDcBSmp&format=png&color=000000"
      paragraph="Schedule video or audio consultations with healthcare providers."
      />

      <Box
      heading= "Scheduling"
      image="https://img.icons8.com/?size=100&id=67438&format=png&color=000000"
      paragraph="Facilitate easy booking of appointments with healthcare providers"
      />

       
     </div>

     <div>
     <Box
         heading= "Mobile Health"
         image="https://img.icons8.com/?size=100&id=WDOn5wTNHU5s&format=png&color=000000"
         paragraph="Empowering healthcare access and  engagement through mobile technology."
        />

        <Box
         heading= "Secured Messaging"
         image="https://img.icons8.com/?size=100&id=fWfjRhMGOmeJ&format=png&color=000000"
         paragraph="Enhances patient-provider communication, ensuring confidentiality."
        />


     </div>
     
      

    
    </div>   
  )
}
