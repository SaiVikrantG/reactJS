import {Chrono} from 'react-chrono'
import CourseTimeline from '../CourseTimelineCard'
import ProjectTimeline from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  const titleList = timelineItemsList.map(each => ({title: each.title}))
  console.log(titleList)

  return (
    <div className="timeline-list">
      <div>
        <div>
          <h1>MY JOURNEY OF CCBP 4.0</h1>
        </div>

        <Chrono mode="VERTICAL_ALTERNATING" items={titleList}>
          {timelineItemsList.map(each => {
            if (each.categoryId === 'COURSE')
              return <CourseTimeline key={each.id} details={each} />

            return <ProjectTimeline key={each.id} details={each} />
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
