import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimeline = props => {
  const {details} = props
  const {courseTitle, duration, description, tagsList} = details

  return (
    <div className="courseCard">
      <div className="title-duration">
        <h1>{courseTitle}</h1>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <ul className="tags-list">
        {tagsList.map(each => (
          <li key={each.id} className="tag">
            <p>{each.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimeline
