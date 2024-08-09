import {Component} from 'react'
import './index.css'

class Review extends Component {
  state = {point: 0}

  left = () => {
    const {point} = this.state

    if (point === 0) {
      return
    }
    this.setState(prevState => ({
      point: prevState.point - 1,
    }))
  }

  right = () => {
    const {point} = this.state

    if (point === 3) {
      return
    }
    this.setState(prevState => ({
      point: prevState.point + 1,
    }))
  }

  render() {
    const {reviewsList} = this.props
    const {point} = this.state
    const Flist = reviewsList[point]
    const {imgUrl, username, companyName, description} = Flist

    return (
      <div className="background">
        <h1>Reviews</h1>
        <div className="container">
          <button type="button" onClick={this.left} data-testid="leftArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="review">
            <img src={imgUrl} alt={username} />
            <p>{username}</p>
            <p>{companyName}</p>
            <p>{description}</p>
          </div>
          <button type="button" onClick={this.right} data-testid="rightArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default Review
