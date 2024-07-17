import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {click: 0}

  cli = () => {
    this.setState(prevState => ({
      click: !prevState.click,
    }))
  }

  render() {
    const {resources} = this.props
    const {loveEmojiUrl, emojis} = resources
    console.log(emojis, loveEmojiUrl)
    const {click} = this.state
    let el
    if (click === 0) {
      el = (
        <div className="card">
          <h1>How satisfied are you with our performance</h1>
          {emojis.map(eachItem => {
            const {id, name, imageUrl} = eachItem

            return (
              <li key={id} className="emoji">
                <img src={imageUrl} alt={name} onClick={this.cli} />
                <p>{name}</p>
              </li>
            )
          })}
        </div>
      )
    } else {
      el = (
        <div className="card">
          <img src={loveEmojiUrl} alt="love emoji" />
          <h1>Thank You!</h1>
          <p>We will use this feedback to improve our products.</p>
        </div>
      )
    }

    return (
      <div className="container">
        <h1>How satisfied are you with our customer support performance</h1>
        {el}
      </div>
    )
  }
}

export default Feedback
