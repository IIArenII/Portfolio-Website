import React from 'react'
import portfolio from '../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Hero = () => {
  return (
    <div id='home' className='flex flex-col w-full h-full text-white mx-auto items-center bg-black  font-outfit'>
      <div className='mt-10 flex justify-center items-center'>
        <img src={portfolio} alt="portfolio" className='w-52 md:w-75' />
      </div>
      <div>
      <div className='  text-4xl md:text-[66px] px-7 my-7 text-white font-semibold '>
        <h1 className='leading-[70px] text-center justify-center items-center md:px-20 lg:px-52'>
          <span className='text-gradient'> I'm Alex Bennett, </span> frontend developer based in USA.
        </h1>
      </div>

      </div>
      <div>
        <p className='text-center text-18 justify-center items-center px-10 md:px-24 lg:px-96'>
          I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.
        </p>
      </div>
      <div className='pt-7 flex gap-7 pb-32'>
        <AnchorLink offset="143" href="#contact" className="bg-linearColor md:px-8 md:py-18 px-4 py-4 rounded-full hover:border-2
           text-white text-14 md:text-16">
        Connect with me</AnchorLink>
        <a href="#resume" className="bg-black  md:px-14 md:py-18 px-9 py-4 rounded-full border-2 hover:border-bC
           text-white text-14 md:text-16 ">My resume</a>
      </div>
    </div>
  )
}


export default Hero