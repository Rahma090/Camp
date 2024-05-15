import React from 'react'
import Navbar from './Navbar.jsx'
import Slides from './Slides.jsx'
import AboutUs from './AboutUs.jsx'

const HomePage = () => {
  return (
    
    <div className='bg-black '>
    <div className=' relative'>
      <img className='w-screen h-[500px] ' 
      src='https://fwp.mt.gov/binaries/content/gallery/mtfwpproject/fwpimageset/smallhero/camping_small_hero.jpg/camping_small_hero.jpg/mtfwpproject%3AHeroSmall' 
      alt=''/>
      <div className='absolute  top-0 left-0 w-full'>
      <Navbar/>
      </div>
      <div className='mt-[200px]'>
      <Slides/>
      </div>
      <div className='mt-[200px]'>
      <AboutUs/>
      </div>
      </div>
    </div>
  )
}

export default HomePage