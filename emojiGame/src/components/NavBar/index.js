import './index.css'

const NavBar = props => {
  const {top, score, state} = props

  let scores = (
    <div className="scores-container">
      <div>
        <p>Score: {`${score}`}</p>
      </div>
      <div>
        <p>Top Score: {`${top}`}</p>
      </div>
    </div>
  )

  if (state === false) {
    scores = undefined
  }

  return (
    <nav className="nav-bar-container">
      <div className="title-with-score-container">
        <div className="logo-and-title-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1>Emoji Game</h1>
        </div>
        {scores}
      </div>
    </nav>
  )
}

export default NavBar
