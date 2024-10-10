import React from 'react'
import aboutProfile from '../assets/about_profile.svg'

const About = () => {
    
    return (
    <div id='about'>
        <div className='flex flex-row w-full h-full mx-auto gap-8 bg-black md:px-32 px-5'>
            <div className='lg:w-520 hidden lg:block mx-auto lg:pl-18 md:pb-10'>
                <img src={aboutProfile} alt="profile_img" className='h-420 rounded-s-10 rounded-e-xl' />
            </div>
            < div className='md:w-full  flex flex-col justify-center md:justify-start mx-auto px-3'>
                <div className='w-full text-white leading-6 text-[18px] font-outfit'>
                    <p>
                    I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
                    </p>
                    <br />
                    <p>
                    My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.
                    </p>
                </div>
                <div className='flex flex-row gap-9 pt-14 transition-all duration-400  items-center'>
                    <div className=''>
                        <p className='text-white md:text-xl text-16 font-outfit py-1 w-32'>HTML & CSS</p>
                        <p className='text-white md:text-xl text-16 font-outfit py-1 w-32'>React JS</p>
                        <p className='text-white md:text-xl text-16 font-outfit py-1 w-32'>JavaScript</p>
                        <p className='text-white md:text-xl text-16 font-outfit py-1 w-32'>Next JS</p>
                    </div>
                    <div className='w-75 flex flex-col gap-7 outline-none  pt-3 md:pt-0'>
                        <hr className='w-60 bg-linearColor h-2 border-none rounded-full'/>               
                        <hr className='w-90 bg-linearColor h-2 border-none rounded-full'/>                    
                        <hr className='w-75 bg-linearColor h-2 border-none rounded-full'/>          
                        <hr className='w-60 bg-linearColor h-2 border-none rounded-full'/>
                    </div>                
                </div>
            </div>
        </div>
        <div className='flex flex-row justify-between items text-center pt-8 gap-2  font-outfit transition-all md:w-full bg-black w-full h-44 px-8 md:px-28 lg:px-48'>
                  <p className='text-white flex flex-col text-11 lg:text-16 font-semibold transition-all duration-400 hover:scale-105'><span className='text-gradient text-3xl md:text-42'>10+</span>YEARS OF EXPERIENCE</p>
                  <hr className='w-px h-14 lg:h-20 bg-white font-semibold rounded-3xl'/>
                  <p className='text-white flex flex-col text-11 lg:text-16 font-semibold transition-all duration-400 hover:scale-105'><span className='text-gradient text-3xl md:text-42'>90+</span>COMPLETED PROJECTS</p>
                  <hr className='w-px h-14 lg:h-20 bg-white font-semibold rounded-3xl'/>
                  <p className='text-white flex flex-col text-11 lg:text-16 font-semibold transition-all duration-400 hover:scale-105'><span className='text-gradient text-3xl md:text-42'>15+</span>HAPPY CLIENTS</p>
        </div>
    </div>
    );
  }
  
  

export default About