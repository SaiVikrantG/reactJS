// Write your code here
import './index.css'
import {Component} from 'react'

class Fruit extends Component {
  state = {mango: 0, banana: 0}

  banana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  mango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  render() {
    const {banana, mango} = this.state

    return (
      <div className="container">
        <div className="card">
          <h1>
            Bob ate <span>{mango}</span> mangoes <span>{banana}</span> bananas
          </h1>
          <div className="d-flex flex-row">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                alt="mango"
              />
              <button type="button" onClick={this.mango} className="button">
                Eat Mango
              </button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                alt="banana"
              />
              <button type="button" onClick={this.banana} className="button">
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Fruit
