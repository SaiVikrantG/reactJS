import './index.css'
import {Component} from 'react'

class Change extends Component {
  state = {dark: true}

  chang = () => {
    this.setState(prevState => ({dark: !prevState.dark}))
  }

  render() {
    const {dark} = this.state
    const clas = dark ? 'background-1' : 'background-2'
    const text = dark ? 'Light Mode' : 'Dark Mode'

    return (
      <div className={clas}>
        <h1>Click To Change Mode</h1>
        <button type="button" onClick={this.chang} className="button">
          {text}
        </button>
      </div>
    )
  }
}

export default Change
