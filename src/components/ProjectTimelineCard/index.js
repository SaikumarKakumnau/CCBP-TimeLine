// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    description,
    duration,
    projectUrl,
  } = projectDetails

  return (
    <div className="chrono-container">
      <div className="image-container">
        <img src={imageUrl} alt="project" className="project-image" />
      </div>
      <div className="text-container">
        <div className="heading-duration">
          <h1 className="project-title">{projectTitle}</h1>
          <div className="duration-container">
            <AiFillCalendar className="time-icon" />
            <p className="duration">{duration}</p>
          </div>
        </div>
        <p className="project-description">{description}</p>
        <a href={projectUrl} className="url-link">
          Visit
        </a>
      </div>
    </div>
  )
}

export default ProjectTimelineCard
