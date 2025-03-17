import React from 'react'
import Nav from './Nav'
import HeroSection from '../app/(nondashboard)/landing/heroSection'
import Avater from '../app/(nondashboard)/landing/avater'
import About from '../app/(nondashboard)/landing/about'
import PowerfullySimple from '../app/(nondashboard)/landing/powerfullySimple'
import Footer from '../app/(nondashboard)/landing/footer'
// import ImageSlider from './ImageSlider'
import Exploring from '../app/(nondashboard)/landing/exploring'
import Pricing from '../app/(nondashboard)/landing/pricing'

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
