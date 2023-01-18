import React from 'react'
import NavBar from '../shared/NavBar'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'
import Projects from './Projects'

const Home = () => {
  return (
    <div className='main__container'>
      <div className='nav-header__cont'>
        <NavBar />
        <Header />
      </div>
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home