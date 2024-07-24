import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

class Login extends Component {
  state = {redirectToHome: false}

  componentDidMount() {
    const token = Cookies.get('jwt_token')

    if (token !== undefined) {
      this.setState({redirectToHome: true})
    }
  }

  LoginFun = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const {history} = this.props

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      history.replace('/')
    }
  }

  render() {
    const {redirectToHome} = this.state

    if (redirectToHome) return <Redirect to="/" />

    return (
      <>
        <h1>Please Login</h1>
        <button type="button" onClick={this.LoginFun}>
          Login with Sample Creds
        </button>
      </>
    )
  }
}

export default Login
