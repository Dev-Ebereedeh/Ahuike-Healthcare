import React from 'react'

export default function Button({text ,color }) {
  return (
    <>
    <div>
    <p className={`text-black font-medium text-xl p-2 my-12 rounded-lg border w-40 h-[50px] text-center ${color? 'bg-blue-950' : 'bg-[#172aa0] hover:bg-emerald-800 transition-colors'}`}>{text}</p>
    </div>
    
    </>
  )
}
