import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import TechStack from './components/TechStack'
import GridBackground from './components/GridBackground'
import Projects from './components/Projects'
import Contact from './components/Contact'

const page = () => {
  return (
    <div>
      <GridBackground />
      <Hero />
      <Services />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  )
}

export default page