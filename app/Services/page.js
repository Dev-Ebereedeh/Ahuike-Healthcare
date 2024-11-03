import React from 'react'
import Footer from '../_components/Footer'
import Box from '../_components/Box'
import Image from 'next/image'
import Baby from '../../public/images/baby.jpg'
import Servebox from '../_components/Servebox'
import Container from '../_components/Container'

export default function Services() {
  return (
    <>
    <section className='md:bg-[#ddeffd]'>
      <Container>

      <h1 className='font-bold text-blue-800 text-3xl border md:text-7xl opacity-10 w-4/6 text-center  md:mx-auto md:pt-16' >Our Services</h1>
      <h6 className='font-sans font-regular text-xl p-8 text-center md:px-16 md:py-8 text-gray-700 w-[400px] md:w-full md:text-2xl'>We provide comprehensive healthcare solutions, including telemedicine consultations, remote patient monitoring, home visits, and diagnostic services. Our goal is to make quality care accessible, personalized, and convenient, empowering patients to manage their health comfortably and securely from home.</h6>
    <div className='w-full h-fit md:w-full md:h-screen flex md:gap-4 md:flex-row -mt-24 flex-col md:items-center md:justify-around  '>

    <div className='md:w-[900px] md:h-[600px] w-[400px] h-[400px] mt-20'>
     <Image src={Baby} alt='babysmile'/>

    </div>

    


   
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
</Container>
</section>


  
    <Container>
      <section className='w-full'>
        
        <div className='flex md:flex-row md:justify-evenly'>

        <Servebox
        image="https://res.cloudinary.com/dluyb8eyq/image/upload/v1730400924/stock-photo-image-of-chemical-equations-over-caucasian-male-doctors-using-tablet-with-patient-in-background-2530846311_q9pobw.jpg"
         heading="Telemedicine"
        paragraph="Connect with healthcare providers remotely for consultations, follow-ups, and guidance—accessible, convenient, and secure care at home."
        />
          
        <Servebox
        image="https://res.cloudinary.com/dluyb8eyq/image/upload/v1730400924/stock-photo-image-of-chemical-equations-over-caucasian-male-doctors-using-tablet-with-patient-in-background-2530846311_q9pobw.jpg"
        heading="Rehabilitation"
        paragraph="Connect with healthcare providers remotely for consultations, follow-ups, and guidance—accessible, convenient, and secure care at home."
        />

        <Servebox
        image="https://res.cloudinary.com/dluyb8eyq/image/upload/v1730400924/stock-photo-image-of-chemical-equations-over-caucasian-male-doctors-using-tablet-with-patient-in-background-2530846311_q9pobw.jpg"
        heading="Diagnostic Services"
        paragraph="Connect with healthcare providers remotely for consultations, follow-ups, and guidance—accessible, convenient, and secure care at home."
        />



       

      
      </div>
      

      <div className='flex md:flex-row md:justify-evenly'>

<Servebox
image="https://res.cloudinary.com/dluyb8eyq/image/upload/v1730401135/healthcare-doctor-online-and-virtual-hospital-concept-diagnostics-and-online-medical_fqs34b.jpg"
 heading="Telemedicine"
paragraph="Connect with healthcare providers remotely for consultations, follow-ups, and guidance—accessible, convenient, and secure care at home."
/>
  
<Servebox
image="https://res.cloudinary.com/dluyb8eyq/image/upload/v1730400924/stock-photo-image-of-chemical-equations-over-caucasian-male-doctors-using-tablet-with-patient-in-background-2530846311_q9pobw.jpg"
heading="Rehabilitation"
paragraph="Connect with healthcare providers remotely for consultations, follow-ups, and guidance—accessible, convenient, and secure care at home."
/>

<Servebox
image="https://res.cloudinary.com/dluyb8eyq/image/upload/v1730400924/stock-photo-image-of-chemical-equations-over-caucasian-male-doctors-using-tablet-with-patient-in-background-2530846311_q9pobw.jpg"
heading="Diagnostic Services"
paragraph="Connect with healthcare providers remotely for consultations, follow-ups, and guidance—accessible, convenient, and secure care at home."
/>
</div>
</section>
</Container>
  





    </>
    
       


  )
}
