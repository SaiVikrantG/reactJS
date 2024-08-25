import './index.css'
import {Component} from 'react'

class Random extends Component {
  state = {number: 0}

  click = () => {
    const num = Math.floor(Math.random() * 101)
    this.setState({number: num})
  }

  render() {
    const {number} = this.state

    return (
      <div className="background">
        <div className="card">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button onClick={this.click} className="button" type="button">
            Generate
          </button>
          <p>{number}</p>
        </div>
      </div>
    )
  }
}

export default Random
