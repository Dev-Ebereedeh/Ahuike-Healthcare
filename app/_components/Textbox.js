import React from 'react'

export default function Textbox({title, paragraph, image, reversed}) {
  return (
    <div className= {`flex md:flex-row flex-col gap:8 md:gap-8 justify-around items-center mt-24 md:mt-32 ${reversed? "md:flex-row-reverse" : "md:flex-row"}`}>
        <div>
        
        <h3 className='text-4xl mt-16 mb-8 font-medium  text-center' style={{ borderBottom: '2px solid #000', display: 'inline', paddingBottom: '2px', width: ''}}>{title}</h3>
        <p className='md:w-[800px] mt-8 px-8 md:text-start text-center md:text-2xl leading-relaxed text-xl'>{paragraph}</p>
        </div>
        {image && <img src={image} alt= "mobile health" className="md:h-[400px] md:w-[400px] mb-8 w-[200px] h-[200px] rounded-full mt-8 md:mt-32 "/> }

        </div>
  )
}

