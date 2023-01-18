import React from 'react'
import photo from '../../assets/imgs/photo.jpg'
import cv from '../../assets/ChristianMendezCV.pdf'

const AboutMe = () => {
    return (
        <section id='me' className='about-sec-container'>
            <div className='about-content'>
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
                    <p>Hi there! I'm Christian and I'm a Full-Stack Web Developer, mainly using Reactjs and Django to make web applications working on both Front-End and Back-End development. </p>
                    <p>
                    A few months ago I finished a web development bootcamp and also recently I had the opportunity to do an Internship at a software development company.</p>
                    <p>I'm a self-taught person, every time I see something that I find it interesting I try to learn about it.</p>
                </div>
                <button className="cta">
                    <span><a href={cv} target="_blank">Display CV</a></span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>
            </div>
            </div>
        </section>
    )
}

export default AboutMe