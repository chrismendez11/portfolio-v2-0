import React from 'react'
import FavProject from './FavProject'
import AllProjects from '../../data'

const Projects = () => {
  return (
    <section id='projects' className='projects-sect-container'> 
    <div className='projects-content'>
    <div className='title-cont'>
        <span className='who-i-am'>what i do <i className="fa-solid fa-rocket"></i></span>
        <hr className='hr-projects' />
        <h2>Projects</h2>
        <p>Take a look at some of many projects I've done during these last months. Most of them were made with tecnologies such as Reactjs, Redux, Typescript, React-router-dom, etc.</p>
      </div>
      <div className='fav-projects-cont'>
        {AllProjects?.map(project => (
          <FavProject key= {project.id} project={project} />
        ))}
      </div>
      {/* <div className='btn-allprojects__cont'>
        <a href='https://app.netlify.com/teams/chrisliner11/sites' target="_blank">See all my projects --&gt;</a>
      </div> */}
    </div>
    </section>
  )
}

export default Projects