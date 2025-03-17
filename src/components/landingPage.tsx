import React from 'react'
import Nav from './Nav'
import HeroSection from '../app/landing/heroSection'
import Avater from '../app/landing/avater'
import About from '../app/landing/about'
import PowerfullySimple from '../app/landing/powerfullySimple'
import Footer from '../app/landing/footer'
// import ImageSlider from './ImageSlider'
import Exploring from '../app/landing/exploring'
import Pricing from '../app/landing/pricing'

const LandingPage = () => {
  return (
    <div className='bg-gray-50'>
      <Nav/>
      <HeroSection />
      <Avater />
      {/* <ImageSlider /> */}
      <Pricing/>
      <About/>
      <PowerfullySimple/>
      <Exploring />
      {/* <HowItsWork /> */}
      {/* <Faq/> */}
      <Footer/> 
    </div>
  )
}

export default LandingPage
