import './index.css'
import {format} from 'date-fns'
import {Component} from 'react'

class AppointmentItem extends Component {
  state = {star: false}

  change = () => {
    const {chang, uniq} = this.props
    const {star} = this.state
    chang(star, uniq)

    this.setState(prevState => ({
      star: !prevState.star,
    }))
  }

  render() {
    const {star} = this.state
    const {title, date} = this.props
    let link
    if (!star) {
      link =
        'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    } else {
      link =
        'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    }

    const newDate = format(date, 'dd MMMM yyyy, EEEE')

    return (
      <div className="aptItem">
        <button onClick={this.change} data-testid="star" type="button">
          <img alt="star" src={link} />
        </button>
        <p>{title}</p>
        <p>Date: {newDate}</p>
      </div>
    )
  }
}

export default AppointmentItem
