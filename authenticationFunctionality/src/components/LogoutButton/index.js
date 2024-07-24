import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

const LogoutButton = props => {
  const Logout = () => {
    Cookies.remove('jwt_token')
    const {history} = props

    history.replace('/login')
  }

  return (
    <button type="button" onClick={Logout}>
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
