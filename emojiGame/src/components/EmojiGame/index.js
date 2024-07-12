import {Component} from 'react'
import './index.css'
import EmojiCard from '../EmojiCard'
import WinLose from '../WinOrLoseCard'
import NavBar from '../NavBar'

class EmojiGame extends Component {
  state = {selected: [], topScore: 0, inProgress: true}

  select = (id, top) => {
    const {selected} = this.state

    if (!selected.includes(id) && selected.length + 1 <= 11) {
      this.setState(prevState => ({
        selected: [id, ...prevState.selected],
      }))
    } else {
      this.setState({inProgress: false, topScore: top})
    }
  }

  restart = () => {
    this.setState({inProgress: true, selected: []})
  }

  render() {
    let {topScore} = this.state
    const {inProgress, selected} = this.state
    const {emojisList} = this.props
    const shuffledEmojisList = emojisList.sort(() => Math.random() - 0.5)
    const curScore = selected.length

    let display

    if (inProgress === false) {
      if (topScore < curScore) {
        topScore = curScore
      }

      if (curScore === 11) {
        display = (
          <WinLose score={curScore} lose={false} replay={this.restart} />
        )
      } else {
        display = <WinLose score={curScore} replay={this.restart} />
      }
    } else {
      display = (
        <div className="emojiCard-container">
          <ul className="emojiCard">
            {shuffledEmojisList.map(each => (
              <EmojiCard
                emojiName={each.emojiName}
                emojiUrl={each.emojiUrl}
                key={each.id}
                uniqueId={each.id}
                top={topScore}
                addToSelect={this.select}
              />
            ))}
          </ul>
        </div>
      )
    }

    return (
      <div className="game">
        <NavBar state={inProgress} top={topScore} score={curScore} />
        {display}
      </div>
    )
  }
}

export default EmojiGame
