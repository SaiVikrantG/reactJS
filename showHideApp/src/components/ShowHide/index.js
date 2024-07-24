import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {hide1: true, hide2: true}

  sh1 = () => {
    this.setState(prevState => ({
      hide1: !prevState.hide1,
      hide2: prevState.hide2,
    }))
  }

  sh2 = () => {
    this.setState(prevState => ({
      hide1: prevState.hide1,
      hide2: !prevState.hide2,
    }))
  }

  render() {
    const {hide1, hide2} = this.state

    let name1
    let name2

    if (!hide1) {
      name1 = <p>Joe</p>
    }

    if (!hide2) {
      name2 = <p>Jonas</p>
    }

    return (
      <div className="background">
        <h1>Show/Hide</h1>
        <div className="d-flex flex-row">
          <div>
            <button type="button" onClick={this.sh1} className="button">
              Show/Hide Firstname
            </button>
            <div className="button">{name1}</div>
          </div>
          <div>
            <button type="button" onClick={this.sh2} className="button">
              Show/Hide Lastname
            </button>
            <div className="button">{name2}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
