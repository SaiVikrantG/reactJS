import {Component} from 'react'
import './index.css'

class AddPassword extends Component {
  state = {website: '', name: '', password: ''}

  webChange = event => {
    this.setState({website: event.target.value})
  }

  nameChange = event => {
    this.setState({name: event.target.value})
  }

  passChange = event => {
    this.setState({password: event.target.value})
  }

  add = () => {
    const {addPassword} = this.props

    const {website, name, password} = this.state

    addPassword(website, name, password)
    this.setState({website: '', name: '', password: ''})
  }

  render() {
    const {website, name, password} = this.state

    return (
      <form className="addPassword">
        <h1>Add New Password</h1>
        <div className="input-box">
          <img
            className="icon"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
            alt="website"
          />
          <input
            type="text"
            className="input"
            placeholder="Enter Website"
            value={website}
            onChange={this.webChange}
          />
        </div>
        <div className="input-box">
          <img
            className="icon"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
            alt="username"
          />
          <input
            type="text"
            className="input"
            placeholder="Enter Username"
            value={name}
            onChange={this.nameChange}
          />
        </div>
        <div className="input-box">
          <img
            className="icon"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
            alt="password"
          />
          <input
            type="password"
            className="input"
            placeholder="Enter Password"
            value={password}
            onChange={this.passChange}
          />
        </div>
        <button onClick={this.add} className="addButton" type="button">
          Add
        </button>
      </form>
    )
  }
}

export default AddPassword
