import {Component} from 'react'
import './index.css'

class Speed extends Component {
  state = {speed: 0}

  accelarate = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    } else {
      this.setState(prevState => ({speed: prevState.speed}))
    }
  }

  brake = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    } else {
      this.setState(prevState => ({speed: prevState.speed}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1>SPEEDOMETER</h1>
        <img
          alt="speedometer"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        />
        <h1>
          Speed is <span>{speed}mph</span>
        </h1>
        <p>Min limit is 0mph, Max Limit is 200mph</p>
        <div className="d-flex flex-row">
          <button type="button" onClick={this.accelarate} className="button">
            Accelerate
          </button>
          <button type="button" onClick={this.brake} className="button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speed
