import React from 'react'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Header from './Header'
import Projects from './Projects'

const Home = () => {
  return (
    <div className='main__container'>
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home