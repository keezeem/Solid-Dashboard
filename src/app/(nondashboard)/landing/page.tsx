import React from 'react'
import HeroSection from './heroSection'
import Avater from './avater'
import Pricing from './pricing'
import About from './about'
import PowerfullySimple from './powerfullySimple'
import Exploring from './exploring'
import Footer from './footer'
import ProductCarousel from './product-carousel'

const Landing = () => {
  return (
    <div>
      <HeroSection />
      <Avater />
      <ProductCarousel />
      <Pricing/>
      <About/>
      <PowerfullySimple/>
      <Exploring />
      <Footer/>
    </div>
  )
}

export default Landing
