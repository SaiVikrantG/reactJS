import {Component} from 'react'
import './index.css'

class PasswordItem extends Component {
  delete = () => {
    const {details, DeleteFrom} = this.props
    DeleteFrom(details[1])
  }

  render() {
    const {details, Display} = this.props
    let password = (
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
        alt="stars"
      />
    )

    if (Display === true) {
      password = <p>{details[2]}</p>
    }

    return (
      <li className="password-item">
        <div className="profile-photo">
          <h1>{details[0][0]}</h1>
        </div>
        <div>
          <p>{details[0]}</p>
          <p>{details[1]}</p>
          {password}
        </div>
        <button type="button" onClick={this.delete} data-testid="delete">
          <img
            className="delete-icon"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
          />
        </button>
      </li>
    )
  }
}

export default PasswordItem
