import React from 'react'
import photo from '../../assets/imgs/photo.png'
import cv from '../../assets/ChristianMendezCV.pdf'

const AboutMe = () => {
    return (
        <section id='me' className='about-sec-container'>
            <div className='photo__container'>
                <div className='photo-frame__cont'>
                    <img src={photo} alt="" />
                </div>
            </div>
            <div className='about-info__container'>
                <span className='who-i-am'>who i am <i className="fa-solid fa-rocket"></i></span>
                <hr className='hr-about' />
                <h2>About me</h2>
                <div className='about-p__cont'>
                    <p>Hi there! I'm Christian and I'm a Frontend Web Developer, I've knowledge of the main web technologies such as HTML, CSS, JAVASCRIPT. I've also used REACTJS and REDUX on my last projects. </p>
                    <p>
                        I recently joined a bootcamp (Academlo) where I learned and put into practice most of the latest and most used technologies specially for Front-End development.
                        I'm always open to keep learning whatever is needed for the projects I'm working on, right now I'm learning Typescript!</p>
                </div>
                <button className="cta">
                    <span><a href={cv} target="_blank">Display CV</a></span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>
            </div>
        </section>
    )
}

export default AboutMe