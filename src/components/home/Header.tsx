import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const Header = () => {
    return (
        <section className='header-sec__container'>
            <div className='header-title__cont'>
                <div className='header-title__text'>
                    <span>Hi there! I'm <span className='name'>Christian</span> and I'm a</span>
                    <h1>FULL-STACK WEB DEVELOPER</h1>
                    <p>Looking forward to participating in web projects that get the better of my skills and knowledge.</p>
                </div>
                <div>
                    <button className="cta">
                        <span><Link smooth to="#projects">Projects</Link></span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
            <div className='header-images__cont'>
                <div className='header-img-cont img1'>
                    <img src="https://www.freecodecamp.org/news/content/images/2022/12/main-image.png" alt="" />
                </div>
                <div className='header-img-cont img2'>
                    <img src="https://www.codingem.com/wp-content/uploads/2021/10/juanjo-jaramillo-mZnx9429i94-unsplash-scaled.jpg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Header