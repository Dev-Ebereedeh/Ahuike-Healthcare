import Image from "next/image";
import Navbar from "./_components/Navbar";
import Background from '../../hospital/public/images/sweet.jpg'
import Box from "./_components/Box";
import Button from "./_components/Button";
import Container from "./_components/Container";
import Hero from "./_components/Hero";
import Link from "next/link";





export default function Home() {
  return (
    <>
    <section id="hero">
      <Container>
       
      
    <div className="tro">
      

      <div className="h-screen w-full flex items-center" >
      

     <div className=" md:w-3/6 ml-16 w-[400px]">
        <h1 className="md:text-4xl text-2xl font-semibold ">Digital Solutions for Accessible,<br/> and  <span className="text-red-900">Personalized Healthcare </span>for Every Patient, Anytime, Anywhere.</h1>
        <p className="mt-8 hidden md:block">Providing Compassionate, Empowering Health and Well-Being with Advanced Care,<br/> Modern Facilities, and a Commitment to Every Patient's Unique Journey.</p>
        <Link href="/contact"><Button text="Call a Doctor"  className="m-16 "></Button></Link>
        
     </div>
     <Hero
        image=""
        />
     </div>

        </div>
        
      </Container>

     </section>

     <section >
      <Container>
        {/* <div >
          <h4 className="text-xl md:text-3xl font-bold md:font-semibold md:p-24 p-8">Here is how we can help</h4>

        </div> */}
      </Container>
     </section>

    </>
    
      
    
        
      
    
    

       
       

       

    
  

    
   

    
    
  )
 
    
    
    
    
}
