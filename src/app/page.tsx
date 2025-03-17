// import React from 'react'
// import HeroSection from './heroSection'
// import Avater from './avater'
// import Pricing from './pricing'
// import About from './about'
// import PowerfullySimple from './powerfullySimple'
// import Exploring from './exploring'
// import Footer from './footer'
// import ProductCarousel from './product-carousel'


import Navbar from "@/components/Navbar"
import About from "./landing/about"
import Avater from "./landing/avater"
import Exploring from "./landing/exploring"
import Footer from "./landing/footer"
import HeroSection from "./landing/heroSection"
import PowerfullySimple from "./landing/powerfullySimple"
import Pricing from "./landing/pricing"
import ProductCarousel from "./landing/product-carousel"

const Landing = () => {
  return (
    <div>
      <Navbar />
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
