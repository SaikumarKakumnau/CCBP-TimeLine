// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimeLineCard = props => {
  const {courseDetails} = props
  const {courseTitle, duration, description, tagsList} = courseDetails

  const renderTagItems = item => {
    const {name} = item
    return (
      <li className="list-item">
        <p className="name">{name}</p>
      </li>
    )
  }

  return (
    <div className="chrono-container">
      <div className="heading-duration-container">
        <h1 className="course-heading">{courseTitle}</h1>
        <div className="course-duration">
          <AiFillClockCircle className="clock-icon" />
          <p className="duration-heading">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <ul className="tags-list-container">
        {tagsList.map(item => renderTagItems(item))}
      </ul>
    </div>
  )
}

export default CourseTimeLineCard
