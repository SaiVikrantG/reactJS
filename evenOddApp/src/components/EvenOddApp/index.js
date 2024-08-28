import './index.css'
import {Component} from 'react'

class Count extends Component {
  state = {number: 0}

  click = () => {
    this.setState(prevState => {
      const increment = Math.floor(Math.random() * 101)
      return {number: prevState.number + increment}
    })
  }

  render() {
    const {number} = this.state
    let type

    if (number % 2 === 0) {
      type = 'Even'
    } else {
      type = 'Odd'
    }

    return (
      <div className="background">
        <h1>Count {number}</h1>
        <p>Count is {type}</p>
        <button onClick={this.click} type="button" className="button">
          Increment
        </button>
        <p>*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default Count
