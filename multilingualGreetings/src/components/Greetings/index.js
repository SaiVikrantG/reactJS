import {Component} from 'react'
import Language from '../Language'
import './index.css'

class Greetings extends Component {
  state = {
    Image:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    imageAltText: 'english',
  }

  change = (img, alt) => {
    this.setState({Image: img, imageAltText: alt})
  }

  render() {
    const {details} = this.props
    const {Image, imageAltText} = this.state

    return (
      <div className="lan-container">
        <h1>Multilingual Greetings</h1>
        <ul style={{display: 'flex', listStyleType: 'none'}}>
          {details.map(each => (
            <Language change={this.change} key={each.id} details={each} />
          ))}
        </ul>
        <img src={Image} alt={imageAltText} />
      </div>
    )
  }
}

export default Greetings
