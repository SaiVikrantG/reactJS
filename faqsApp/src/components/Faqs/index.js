import {Component} from 'react'
import './index.css'
import Question from '../FaqItem'

class FAQ extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="faq-main">
        <div className="faq-card">
          <div className="heading">
            <h1>FAQs</h1>
          </div>
          <ul className="faq-list">
            {faqsList.map(each => (
              <Question key={each.id} details={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default FAQ
