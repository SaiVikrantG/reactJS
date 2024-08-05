import {Component} from 'react'
import Cookies from 'js-cookie'

class Login extends Component {
  state = {userId: '', password: '', errorMsg: '', error: false}

  componentDidMount() {
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      const {history} = this.props

      history.replace('/')
    }
  }

  change = event => {
    const {id, value} = event.target

    this.setState({[id]: value})
  }

  login = async event => {
    event.preventDefault()

    const {userId, password} = this.state
    const options = {
      method: 'POST',
      body: JSON.stringify({
        user_id: userId,
        pin: password,
      }),
    }

    const response = await fetch('https://apis.ccbp.in/ebank/login', options)
    const data = await response.json()

    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 10})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({errorMsg: data.error_msg, error: true})
    }
  }

  render() {
    const {userId, password, errorMsg, error} = this.state

    return (
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
          alt="website login"
        />
        <form onSubmit={this.login}>
          <h1>Welcome Back</h1>
          <div>
            <label htmlFor="userId">User ID</label>
            <br />
            <input
              type="text"
              id="userId"
              value={userId}
              onChange={this.change}
            />
          </div>
          <div>
            <label htmlFor="password">PIN</label>
            <br />
            <input
              type="password"
              id="password"
              value={password}
              onChange={this.change}
            />
          </div>
          <button type="submit">Login</button>
          {error && <p style={{color: 'red'}}>{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default Login
