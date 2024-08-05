import Cookies from 'js-cookie'

const Home = props => {
  const logout = () => {
    Cookies.remove('jwt_token')
    const {history} = props

    history.replace('/ebank/login')
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <nav>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
        />
        <button onClick={logout} type="button">
          Logout
        </button>
      </nav>
      <h1>Your Flexibility, Our Excellence</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
        alt="digital card"
      />
    </div>
  )
}

export default Home
