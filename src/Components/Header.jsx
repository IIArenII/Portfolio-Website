import React from 'react'
import underline from '../assets/nav_underline.svg'


    
    
    function Header(props) {
        return <div className='flex w-full bg-black font-outfit md:pb-12 pl-7 pb-10 md:pl-0 relative md:text-center md:items-center md:justify-center'>
        <h2 className='text-42 text-white font-semibold z-10 relative md:text-6xl pb-9'>{ props.name }
        <img src={underline} alt="underline" className='md:h-14 h-9 absolute top-6 md:top-4  -z-20 left-32 '/></h2>
        </div>
      }
  


export default Header