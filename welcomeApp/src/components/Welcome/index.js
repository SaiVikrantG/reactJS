import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {subscribe: false}

  sub = () => {
    this.setState(prevState => ({
      subscribe: !prevState.subscribe,
    }))
  }

  render() {
    const {subscribe} = this.state
    return (
      <div className="background">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        <button className="button" onClick={this.sub} type="button">
          {subscribe ? 'Subscribed' : 'Subscribe'}
        </button>
      </div>
    )
  }
}

export default Welcome
