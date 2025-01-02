import React from 'react'
import Navbar from '../Navbar'
import HeroBanner from '../Banner'
import About from '../About'
import Technologies from '../Technologies'
import ToggleTabs from '../ExperienceAndEducation/ToggleTabs'
import ProjectCarousel from '../Project/ProjectCarousel'
import Footer from '../Footer'
import Contact from '../Contact'

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <About />
      <Technologies />
      <ToggleTabs />
      <ProjectCarousel />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
