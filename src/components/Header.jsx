import React from 'react'
import { PiChefHat } from "react-icons/pi";
// import { PiChefHatLight } from "react-icons/pi";

const Header = () => {
  return (
    <div className=' absolute p-1 top-0  w-full  '>
        <div className='w-full rounded-md   bg-neutral-700 flex justify-center py-4'>
        <span className=''>
            <PiChefHat />
            {/* <h1>icon</h1> */}
        </span>
        <h1 className='text-xl font-bold text-zinc-300'>CHEF CLAUDE</h1>
        </div>
      
    </div>
  )
}

export default Header
