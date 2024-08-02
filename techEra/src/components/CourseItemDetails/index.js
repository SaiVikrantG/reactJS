import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Failure from '../Failure'
import Header from '../Header'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  failure: 'FAILURE',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
}

class CourseItemDetails extends Component {
  state = {courseData: {}, apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getCourseDetails()
  }

  getCourseDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/te/courses/${id}`
    const urlResponse = await fetch(url)
    if (urlResponse.ok === true) {
      const courseDataResponse = await urlResponse.json()

      const courseDetails = courseDataResponse.course_details
      const formattedCourseDetails = {
        description: courseDetails.description,
        id: courseDetails.id,
        imageUrl: courseDetails.image_url,
        name: courseDetails.name,
      }
      this.setState({
        apiStatus: apiStatusConstants.success,
        courseData: {...formattedCourseDetails},
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  appendCourseDetails = () => {
    const {courseData} = this.state
    const {name, description, imageUrl} = courseData

    return (
      <div className="course-details-container">
        <div className="card-container">
          <img src={imageUrl} alt={name} className="course-image" />
          <div className="course-desc-container">
            <h1 className="course-name">{name}</h1>
            <p className="course-desc">{description}</p>
          </div>
        </div>
      </div>
    )
  }

  retryFetch = () => {
    this.setState(
      {apiStatus: apiStatusConstants.initial},
      this.getCourseDetails,
    )
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" height={40} width={40} color="#1e293b" />
    </div>
  )

  renderFailureView = () => <Failure onRetry={this.retryFetch} />

  renderApiResults = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.success:
        return this.appendCourseDetails()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <Header />
        {this.renderApiResults()}
      </div>
    )
  }
}

export default CourseItemDetails
