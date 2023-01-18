import React from 'react'

const Footer = () => {
  return (
    <footer className='footer-section'>
      <div className='footer__container'>
        <h2>Christian Mendez Website</h2>
        <div className='socials-cont'>
          <span><a href="https://github.com/chrismendez11" target='_blank'><i className="fa-brands fa-github"></i></a></span>
          <span><a href="https://www.linkedin.com/in/christian-mendez-b8576822b/" target='_blank'><i className="fa-brands fa-linkedin"></i></a></span>
        </div>
        <span className='copy'>&#169; 2023</span>
      </div>
    </footer>
  )
}

export default Footer