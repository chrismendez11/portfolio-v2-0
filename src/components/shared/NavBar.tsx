import { FaBars, FaTimes } from 'react-icons/fa'
import React, { useRef, useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const NavBar = () => {
    const navRef = useRef<any>();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <div className='navbar-cont'>
            <h2>C</h2>
            <nav ref={navRef}>
                <Link smooth to="">Home</Link>
                <Link smooth to="#me">About Me</Link>
                <Link smooth to="#projects">Projects</Link>
                {/* <Link smooth to="">Skills</Link>
                <Link smooth to="">Certifications</Link> */}
                <Link smooth to="#contact">Contact</Link>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn right-btn' onClick={showNavbar}>
                <FaBars />
            </button>
        </div>
    )
}

export default NavBar