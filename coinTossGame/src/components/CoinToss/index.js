import {Component} from 'react'
import './index.css'

class Toss extends Component {
  state = {
    heads: 0,
    tails: 0,
    img: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  Tos = () => {
    const choice = Math.floor(Math.random() * 2)
    this.setState(prevState => {
      if (choice === 0) {
        return {
          heads: prevState.heads + 1,
          img: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
        }
      }
      return {
        tails: prevState.tails + 1,
        img: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }
    })
  }

  render() {
    const {heads, tails, img} = this.state

    return (
      <div className="background">
        <div className="card">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img className="image" src={img} alt="toss result" />
          <button type="button" onClick={this.Tos}>
            Toss Coin
          </button>
          <div>
            <p>
              Total:{heads + tails} Heads:{heads} Tails:{tails}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Toss
