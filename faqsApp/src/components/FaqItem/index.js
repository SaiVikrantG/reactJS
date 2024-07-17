import {Component} from 'react'
import './index.css'

class Question extends Component {
  state = {view: false}

  change = () => {
    this.setState(prevState => ({view: !prevState.view}))
  }

  render() {
    const {details} = this.props
    const {questionText, answerText} = details
    const {view} = this.state

    let answer
    let icon = 'plus'
    let imgUrl =
      'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    if (view === true) {
      answer = (
        <div>
          <hr />
          <p>{answerText}</p>
        </div>
      )

      imgUrl =
        'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

      icon = 'minus'
    }

    return (
      <li className="question">
        <div className="qs">
          <h1>{`${questionText}`}</h1>
          <button onClick={this.change} type="button">
            <img src={imgUrl} alt={icon} />
          </button>
        </div>
        {answer}
      </li>
    )
  }
}

export default Question
