import React from 'react'
import white_arrow from '../assets/arrow_icon.svg'

const Services = () => {
  return (
   
    <div className='flex h-auto bg-black px-7 pb-32 mx-auto items-center justify-between'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full lg:px-32'>
            <div className='flex flex-col bg-black border-2 border-white rounded-xl text-white font-outfit py-4 px-5 gap-4 transform 
            transition-all duration-300 hover:scale-105 hover:bg-services-bg hover:border-bC lg:h-auto lg:text-2xl'>
                <h3 className='text-3xl font-semibold'>01</h3>
                <h2 className='text-2xl font-semibold text-gradient '>Web design</h2>
                <p className='text-lg'>Web development is the process of building, programming...</p>
                <div className='flex gap-5 cursor-pointer text-services-text text-xl'>
                    <p>Read More</p>
                    <img src={white_arrow} alt="white_arrow" className='w-5' />
                </div>
            </div>
            
            <div className='flex flex-col w-100 bg-black border-2 border-white rounded-xl text-white font-outfit py-4 px-5 gap-4 transform transition-all 
            duration-300 hover:scale-105 hover:bg-services-bg hover:border-bC lg:h-auto lg:text-2xl'>
                <h3 className='text-27 font-semibold text-3xl'>02</h3>
                <h2 className='text-gradient text-2xl lg:text-3xl font-semibold'>Graphics design</h2>
                <p className='text-services-text text-18 md:text-20'>Web development is the process of building, programming...</p>
                <div className='flex gap-5 cursor-pointer text-services-text text-xl'>
                    <p>Read More</p>
                    <img src={white_arrow} alt="white_arrow" className='w-5' />
                </div>
            </div>
            <div className='flex flex-col w-100 bg-black border-2 border-white rounded-xl text-white font-outfit py-4 px-5 gap-4 transform transition-all 
            duration-300 hover:scale-105 hover:bg-services-bg hover:border-bC lg:h-auto lg:text-2xl'>
                <h3 className='text-27 font-semibold text-3xl'>03</h3>
                <h2 className='text-gradient text-2xl lg:text-3xl font-semibold'>Social media</h2>
                <p className='text-services-text text-18 md:text-20'>Web development is the process of building, programming...</p>
                <div className='flex gap-5 cursor-pointer text-services-text text-xl'>
                    <p>Read More</p>
                    <img src={white_arrow} alt="white_arrow" className='w-5' />
                </div>
            </div>
            <div className='flex flex-col w-100 bg-black border-2 border-white rounded-xl text-white font-outfit py-4 px-5 gap-4 transform transition-all 
            duration-300 hover:scale-105 hover:bg-services-bg hover:border-bC lg:h-auto lg:text-2xl'>
                <h3 className='text-27 font-semibold text-3xl'>04</h3>
                <h2 className='text-gradient text-2xl lg:text-3xl font-semibold'>App design</h2>
                <p className='text-services-text text-18 md:text-20'>Web development is the process of building, programming...</p>
                <div className='flex gap-5 cursor-pointer text-services-text text-xl'>
                    <p>Read More</p>
                    <img src={white_arrow} alt="white_arrow" className='w-5' />
                </div>
            </div>
            <div className='flex flex-col w-100 bg-black border-2 border-white rounded-xl text-white font-outfit py-4 px-5 gap-4 transform transition-all 
            duration-300 hover:scale-105 hover:bg-services-bg hover:border-bC lg:h-auto lg:text-2xl'>
                <h3 className='text-27 font-semibold text-3xl'>05</h3>
                <h2 className='text-gradient text-2xl lg:text-3xl font-semibold'>Digital marketing</h2>
                <p className='text-services-text text-18 lg:text-20'>Web development is the process of building, programming...</p>
                <div className='flex gap-5 cursor-pointer text-services-text text-xl'>
                    <p>Read More</p>
                    <img src={white_arrow} alt="white_arrow" className='w-5' />
                </div>
            </div>
            <div className='flex flex-col w-100 bg-black border-2 border-white rounded-xl text-white font-outfit py-4 px-5 gap-4 transform transition-all 
            duration-300 hover:scale-105 hover:bg-services-bg hover:border-bC lg:h-auto lg:text-2xl'>
                <h3 className='text-27 font-semibold text-3xl'>06</h3>
                <h2 className='text-gradient text-2xl lg:text-3xl font-semibold'>Content writing</h2>
                <p className='text-services-text text-18 md:text-20'>Web development is the process of building, programming...</p>
                <div className='flex gap-5 cursor-pointer text-services-text text-xl'>
                    <p>Read More</p>
                    <img src={white_arrow} alt="white_arrow" className='w-5' />
                </div>
            </div>  
                   
            
        </div>           
    </div>
  )
}

export default Services