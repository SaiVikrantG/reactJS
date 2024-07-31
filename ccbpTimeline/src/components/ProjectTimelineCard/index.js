import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimeline = props => {
  const {details} = props
  const {projectTitle, duration, imageUrl, description, projectUrl} = details

  return (
    <div className="projectCard">
      <img src={imageUrl} className="image" alt="project" />
      <div className="title-duration">
        <h1>{projectTitle}</h1>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimeline
