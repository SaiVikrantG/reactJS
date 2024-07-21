import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMsg: null}

  username = event => {
    this.setState({username: event.target.value})
  }

  password = event => {
    this.setState({password: event.target.value})
  }

  success = () => {
    const {history} = this.props
    history.replace('/')
  }

  loginForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}

    if (username === '') {
      this.setState({errorMsg: ' *Username is not found'})
      return
    }

    if (password === '') {
      this.setState({errorMsg: '*Password is not found'})
      return
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()

    console.log(data)

    if (response.ok) {
      this.success()
    } else {
      const formattedData = {
        errorMsg: data.error_msg,
        statusCode: data.status_code,
      }
      const {errorMsg} = formattedData

      if (errorMsg === 'invalid username') {
        this.setState({errorMsg: '*Username is not found'})
      } else {
        this.setState({errorMsg: "*Username and Password didn't match"})
      }
    }
  }

  render() {
    const {username, password, errorMsg} = this.state

    const loginStatus = <p style={{color: 'red'}}>{errorMsg}</p>

    return (
      <div className="login-page">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website-login-image"
        />
        <form onSubmit={this.loginForm} className="login-form">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <div className="input-field">
            <label htmlFor="username">USERNAME</label>
            <input
              id="username"
              placeholder="Username"
              onChange={this.username}
              value={username}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">PASSWORD</label>
            <input
              id="password"
              placeholder="Password"
              onChange={this.password}
              value={password}
              type="password"
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
          {loginStatus}
        </form>
      </div>
    )
  }
}

export default LoginForm
