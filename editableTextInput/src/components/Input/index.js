import {Component} from 'react'
import './index.css'

class Input extends Component {
  state = {input: ''}

  change = event => {
    this.setState({input: event.target.value})
  }

  render() {
    const {toggle, saved} = this.props
    const {input} = this.state

    console.log(saved)

    return (
      <div className="input">
        <h1>Editable Text Input</h1>
        {saved ? (
          <p>{input}</p>
        ) : (
          <input onChange={this.change} value={input} />
        )}
        <button type="button" onClick={toggle}>
          {saved ? 'Edit' : 'Save'}
        </button>
      </div>
    )
  }
}

export default Input
