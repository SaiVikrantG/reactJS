import {Component} from 'react'
import PasswordItem from '../PasswordItem'
import './index.css'

class DisplayPassword extends Component {
  state = {checked: false}

  delete = username => {
    const {deleteFrom} = this.props

    deleteFrom(username)
  }

  handleCheckboxChange = () => {
    this.setState(prevState => ({
      checked: !prevState.checked,
    }))
  }

  search = event => {
    const {filter} = this.props
    // console.log(event.target.value)

    filter(event.target.value)
  }

  render() {
    const {list} = this.props
    const count = list.length
    // console.log(list)
    const {checked} = this.state

    let display = (
      <div className="no-password-display">
        <img
          className="no-password-image"
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          alt="no passwords"
        />
        <p>No Passwords</p>
      </div>
    )

    if (list.length !== 0) {
      display = (
        <div className="password-display">
          <ul>
            {list.map(each => (
              <PasswordItem
                key={each[0].length}
                details={each}
                DeleteFrom={this.delete}
                Display={checked}
              />
            ))}
          </ul>
        </div>
      )
    }

    return (
      <div className="displayPassword">
        <div className="title-and-search">
          <div className="displayPasswords-heading">
            <h1>Your Passwords</h1>
            <p>{count}</p>
          </div>
          <div className="search-bar">
            <div className="input-box">
              <img
                className="icon"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input
                type="search"
                onChange={this.search}
                className="input"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="passwords-container">
          <div className="display-passwords">{display}</div>
          <label>
            <input type="checkbox" onChange={this.handleCheckboxChange} />
            Show Passwords
          </label>
        </div>
      </div>
    )
  }
}

export default DisplayPassword
