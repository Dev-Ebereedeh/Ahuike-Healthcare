import React from 'react'
import Image from 'next/image'
import Amoeba from '../_components/Amoeba'
import Profile from '../../public/images/profile.png'
import Textbox from '../_components/Textbox'
import Container from '../_components/Container'
import Doccards from '../_components/Doccards'
import Testimonials from '../_components/Testimonials'


export default function about() {
  return (
    <section className='w-full  bg-blue-400  md:bg-[#edf2f6]'>
      <Container>
      <div>
        <h1 className='font-bold text-blue-800 text-5xl opacity-10 text-center  md:text-left md:pl-24 md:pt-32' >About Us</h1>
        <h6 className='font-sans -mx-10 font-medium text-2xl text-center md:text-left md:pl-24' style={{ borderBottom: '2px solid #000', display: 'inline', paddingBottom: '4px', marginInlineStart: '8px' }}>What we Do</h6>
        
        <p className='hidden lg:block md:text-left p-8 w-3/6 leading-relaxed text-2xl'><span className='text-[#172aa0] text-4xl font-black '>A</span>huike  Hospital is a modern healthcare provider specializing in virtual and personalized medicine. Through telehealth services, Ahuike offers patients convenient access to medical consultations, follow-ups, and healthcare management from the comfort of their homes. The hospital’s approach emphasizes individualized treatment plans tailored to each patient’s unique health profile, enhancing the effectiveness of care.</p>

        <p className='md:hidden block text-xl  p-8 '> Ahuike Hospital offers virtual healthcare and personalized medicine designed for convenience and individualized care. Through online consultations and tailored treatment plans, Ahuike provides accessible, quality healthcare from the comfort of home, focusing on each patient’s unique health needs.</p>

        <Textbox
        title="Our Story"
        paragraph="Ahuike Hospital was founded by Ebere Edeh, a pharmacist inspired by a life-saving call she made to help a mother in crisis. Realizing many lacked immediate access to medical support, Ebere created Ahuike to provide virtual, compassionate healthcare to anyone with a phone. The hospital's mission is simple: healthcare within reach, empowering every individual to receive quality care, no matter where they are"
        image="https://steptodown.com/istock-downloader/images/steptodown.com244326.jpg"
        />                                                                                     

        <Textbox
        title="Our Mission"
        paragraph="Ahuike Hospital is dedicated to delivering heartfelt, personalized care with a focus on accessible virtual services. Our mission is to ensure that each patient receives tailored, compassionate support that empowers them to lead healthier lives, wherever they are."
        image= "https://media.istockphoto.com/id/1331075782/photo/worried-mother-of-a-sick-girl-consulting-a-doctor-through-a-video-call.jpg?s=1024x1024&w=is&k=20&c=zBxJz46CQt2h8X2r7weL0w-1RTRYDoou8yB1ZAPle1c="
        reversed
        />

        

        <section className= 'md:bg-[#ddeffd] w-full'>
        <h1 className='font-bold text-blue-800 text-5xl opacity-10 text-center border pt-32 m-auto  md:text-7xl' >Meet Our Dedicated Doctors</h1>
        <p className='text-center md:px-16 md:py-8 m-auto md:text-2xl text-xl'>Our dedicated doctors at Ahuike Hospital combine expertise with compassion to ensure your well-being. Committed to personalized care, they are here to listen and support you on your health journey. With our skilled team by your side, you can feel confident and cared for every step of the way."</p>

        
        <div> 
        <div className='w-full flex md:flex-row flex-col justify-evenly  items-center'>
          <div >
          <Doccards
          image= "https://res.cloudinary.com/dluyb8eyq/image/upload/v1730307536/studio-portrait-shot-of-smiling-mature-doctor-wearing-scrubs-against-white-background_vzainw.jpg"
          heading= "Dr Chiezugo O."
          paragraph= "Pediatrics"
          />
          </div>

          <div>
          <Doccards
          image= "https://media.istockphoto.com/id/635883824/photo/doctor-working-in-his-office.jpg?s=1024x1024&w=is&k=20&c=qTspdMiU1VnGJCCyz2EdP3ndPcRHBvmbRAuBluRMSCY="
          heading= "Dr Mbadiwe E."
          paragraph= "Neurology"
          />
          </div>

        </div>

        <div className='w-full flex md:flex-row flex-col justify-evenly  items-center'>
          <div>
          <Doccards
          image= "https://t4.ftcdn.net/jpg/02/98/82/03/360_F_298820341_wlpH2McLxTVNer1mq9KpQXF0p28BjJ7V.webp"
          heading= "Chibunna O."
          paragraph= "Doctor"
          />
          </div>

          <div>
          <Doccards
          image= "https://media.gettyimages.com/id/1916997135/photo/mature-male-healthcare-expertise-is-wearing-blue-shirt.jpg?s=612x612&w=0&k=20&c=2JPJ09SX1ucyeyY3_l6-bzXWWAZoy2w5O0ciOOBgkzI="
          heading= "Dr Okoli N."
          paragraph= "Pharmacist"
          />
          </div>

          

        </div>

        <div className='w-full flex md:flex-row flex-col justify-evenly  items-center'>
          <div >
          <Doccards
          image= "https://media.istockphoto.com/id/1199676919/photo/young-female-doctor-posing-on-white.jpg?s=612x612&w=0&k=20&c=wzsMlWz_VbWf6y6kdiLWhJngBF7fwplUIGEJZ5-oStU="
          heading= "Dr Chiezugo O."
          paragraph= "Doctor"
          />
          </div>

          <div>
           <Doccards
            image= "https://media.istockphoto.com/id/1481627691/photo/portrait-of-confident-mid-adult-male-nurse-against-white-background.jpg?s=612x612&w=0&k=20&c=6uvpUFhdwS0vATUQLD1j0tOGnhGNuiKNjTWUJYWwFds="
            heading= "Dr Okoli N."
            paragraph= "Pediatrics"
          />
          </div>

           </div>
          </div>
       
         </section>


         <section>
            <div>

              <Testimonials
              image="https://media.istockphoto.com/id/927156320/photo/she-is-a-black-beauty.jpg?s=1024x1024&w=is&k=20&c=baZIcYItxwQUWSgJWZJFbCkboAogMWAg59damoK06f8="
              text= "I struggled with skin issues and was hesitant when a friend recommended Ahuike. But after speaking with their doctors from the comfort of my home, I'm hooked! My skin has improved, and help is always just a click away."
              
              />

            

            
            </div>
          </section>
         
         

        

         </div>

    </Container>

</section>
   


    
  )
}

    
    