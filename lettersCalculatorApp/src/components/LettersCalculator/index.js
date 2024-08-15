import './index.css'
import {Component} from 'react'

class Calculate extends Component {
  state = {count: 0}

  type = event => {
    const word = event.target.value
    console.log(event.target.value)

    this.setState({count: word.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="background">
        <div className="calculate">
          <h1>Calculate the Letters you enter</h1>
          <label htmlFor="inp">Enter the phrase</label>
          <input
            id="inp"
            placeholder="enter the phrase"
            type="input"
            onChange={this.type}
          />
          <p className="numl">No.of letters: {count}</p>
        </div>
        <img
          className="image"
          alt="letters calculator"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
        />
      </div>
    )
  }
}

export default Calculate
