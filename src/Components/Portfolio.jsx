import React from 'react'
import project_1 from '../assets/project_1.svg'
import project_2 from '../assets/project_2.svg'
import project_3 from '../assets/project_3.svg'
import project_4 from '../assets/project_4.svg'
import project_5 from '../assets/project_5.svg'
import project_6 from '../assets/project_6.svg'
import arrow from '../assets/arrow_icon.svg'

const Portfolio = () => {
  return (
    <div id='portfolio' className='h-auto bg-black px-7 pb-32 mx-auto items-center justify-between text-center font-outfit'>
        <div id='services' className=' flex ' >
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-8 w-full lg:px-32'>
                <div className='w-100 hover:scale-105 hover:border-4 rounded-10 hover:border-PH transition-all duration-300'>
                    <img src={project_1} alt="project_1" className='' />
                </div>
                <div className='w-100 hover:scale-105 hover:border-4 rounded-10 hover:border-PH transition-all duration-300'>
                    <img src={project_2} alt="project_1" className='' />
                </div>
                <div className='w-100 hover:scale-105 hover:border-4 rounded-10 hover:border-PH transition-all duration-300'>
                    <img src={project_3} alt="project_1" className='' />
                </div>
                <div className='w-100 hover:scale-105 hover:border-4 rounded-10 hover:border-PH transition-all duration-300'>
                    <img src={project_4} alt="project_1" className='' />
                </div>
                <div className='w-100 hover:scale-105 hover:border-4 rounded-10 hover:border-PH transition-all duration-300'>
                    <img src={project_5} alt="project_1" className='' />
                </div>
                <div className='w-100 hover:scale-105 hover:border-4 rounded-10 hover:border-PH transition-all duration-300'>
                    <img src={project_6} alt="project_1" className='' />
                </div>                              
            </div>
            
        </div>
        <div className='flex w-164 md:w-48 lg:w-52 px-4 py-4 lg:px-7 lg:py-5 md:rounded-31 lg:36 rounded-3xl mx-auto my-14 items-center justify-center text-center gap-3 cursor-pointer md:text-16 lg:text-xl
         border-2 border-gray-100 text-gray-100 transition-all duration-300 hover:gap-5 hover:w-44 md:hover:w-48 lg:hover:w-56'>
            <p>Show More</p>
            <img src={arrow} alt="" className='h-4' />
        </div>
    </div>
  )
}

export default Portfolio