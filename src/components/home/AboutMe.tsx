import React from 'react'
import photo from '../../assets/imgs/photo.jpg'
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptatem explicabo nesciunt voluptates porro eius.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus fuga dolorem quidem dolorum repudiandae! Veritatis enim animi delectus neque repellat eveniet perferendis ratione qui? Corporis minus animi vel ad quo.</p>
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