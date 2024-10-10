import React from 'react'
import logo from '../assets/logo.svg'

const Footer = () => {

  return (
    <div className='flex flex-col w-100 gap-3 bg-black text-white px-12 lg:px-40 pb-20'>
        <img src={logo} alt="footer_logo" className='flex h-14 w-32 px-0 justify-start ' />
        <div className='lg:w-40'>
            <p>I am a frontend developer from, USA with 10 years of experience in companies like Microsoft, Tesla and Apple.</p>
        </div>
        
        <hr />
        <div className='md:flex md:justify-between md:flex-row-reverse '>
            <div className='flex flex-row gap-5 pb-5'>
                <p className='cursor-pointer'>Term of Services</p>
                <p className='cursor-pointer'>Privacy Policy</p>
                <p className='cursor-pointer'>Connect with me</p>
            </div>
            <div>
                <p>© 2023 Alex Bennett. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer