import React from 'react'
import { Project } from '../../types'

type Props = {
    project: Project
}

const FavProject = ({project}: Props) => {
  return (
    <article className='project-card' id={String(project.id)}>
        <main className='card__backgound-cont'>
              <div className='card__img-cont'>
                <img src={project.img} alt="" />
              </div>
        </main>
        <footer className='card__footer'>
            <h2>{project.name}</h2>
            <div className='card__info-cont'>
                <span><a href={project.github} target="_blank"><i className="fa-brands fa-github"></i> Github</a></span>
                <span><a href={project.display} target="_blank"><i className="fa-solid fa-link"></i> Display</a></span>
            </div>
        </footer>
    </article>
  )
}

export default FavProject