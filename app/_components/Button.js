import React from 'react'

export default function Button({text ,color }) {
  return (
    <>
    <div>
    <p className={`text-black font-medium text-xl p-2 my-12 rounded-lg border w-40 h-[50px] text-center hover:bg-emerald-800 transition-colors ${color? "md:bg-[#57aee8]" : "md:bg-[#172aa0] text-white" }`}>{text}</p>
    </div>
    
    </>
  )
}
