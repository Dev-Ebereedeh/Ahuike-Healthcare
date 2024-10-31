import Image from "next/image";
import Navbar from "./_components/Navbar";
import Background from '../../hospital/public/images/sweet.jpg'
import Box from "./_components/Box";
import Button from "./_components/Button";





export default function Home() {
  return (
    <section className="h-screen w-full flex items-center " id="hero">

      
      <div className=" border w-3/6 ml-16 ">
      <h1 className="text-4xl font-semibold ">Digital Solutions for Accessible,<br/> and  <span className="text-red-900">Personalized Healthcare </span>for Every Patient, Anytime, Anywhere.</h1>
      <p className="mt-8">Providing Compassionate, Empowering Health and Well-Being with Advanced Care,<br/> Modern Facilities, and a Commitment to Every Patient's Unique Journey.</p>

      <Button text="Call a Doctor" className="m-16 "></Button>
      </div>


      


      
       
   
         
  
      
    </section>
      
    
        
      
    
    

       
       

       

    
  

    
   

    
    
  )
 
    
    
    
    
}
