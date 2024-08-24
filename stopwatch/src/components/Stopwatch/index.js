// Write your code here
import {Component} from 'react'
import './index.css'

class StopWatch extends Component {
  state = {seconds: 0, minutes: 0}

  start = () => {
    this.timerId = setInterval(this.tick, 1000)
  }

  stop = () => {
    clearInterval(this.timerId)
  }

  reset = () => {
    this.setState({seconds: 0, minutes: 0})
  }

  tick = () => {
    const {seconds, minutes} = this.state

    if (seconds === 59) {
      this.setState({seconds: 0, minutes: minutes + 1})
    } else {
      this.setState({seconds: seconds + 1})
    }
  }

  render() {
    const {seconds, minutes} = this.state

    let sec = `0${seconds}`
    let min = `0${minutes}`

    if (seconds >= 10) {
      sec = seconds
    }

    if (minutes >= 10) {
      min = seconds
    }

    return (
      <div className="stopWatch-container">
        <div className="stopwatch">
          <div className="stopWatch-card">
            <h1>StopWatch</h1>
            <div className="stopWatch-main">
              <div className="title-logo">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                  alt="stopwatch"
                  className="logo"
                />
                <p>Timer</p>
              </div>
              <div className="timer-container">
                <h1>{`${min}:${sec}`}</h1>
              </div>
              <div className="button-container">
                <button
                  type="button"
                  onClick={this.start}
                  className="button button2"
                >
                  Start
                </button>
                <button
                  type="button"
                  onClick={this.stop}
                  className="button button1"
                >
                  Stop
                </button>
                <button
                  type="button"
                  onClick={this.reset}
                  className="button button3"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
