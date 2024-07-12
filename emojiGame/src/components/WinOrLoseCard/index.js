import './index.css'

const WinLose = props => {
  const {lose, replay} = props
  let title = 'You Lose'
  let imageUrl = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  let heading = 'Score'
  let {score} = props

  if (lose === false) {
    title = 'You Won'
    heading = 'Best Score'
    imageUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    score = 12
  }

  return (
    <div className="winLose-container">
      <div className="winLoseCard">
        <div className="winLose-info">
          <h1>{title}</h1>
          <p>{heading}</p>
          <p>{`${score}`}/12</p>
          <button className="play-button" type="button" onClick={replay}>
            Play Again
          </button>
        </div>
        <img src={imageUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinLose
