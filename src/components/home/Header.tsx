import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const Header = () => {
    return (
        <section className='header-sec__container'>
            <div className='header-title__cont'>
                <div className='header-title__text'>
                    <span>Hi there! I'm <span className='name'>Christian</span> and I'm a</span>
                    <h1>Frontend Web Developer</h1>
                    <p>Looking forward to participating in web projects that get the better of my skills and knowledge.</p>
                </div>
                <div>
                    <button className="cta">
                        <span><Link smooth to="#contact">Contact me</Link></span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
            <div className='header-images__cont'>
                <div className='header-img-cont img1'>
                    <img src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687289/retina_1708x683_op-Ten-Front-End-Design-Rules-For-Developers_Luke-Newsletter-d3a7d3e7430ee224cab75104f11342a0.png" alt="" />
                </div>
                <div className='header-img-cont img2'>
                    <img src="https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Header