import {Component} from 'react'
import './index.css'

class SuccessCard extends Component {
  render() {
    const {resetForm} = this.props
    return (
      <div className="success-card">
        <div className="success-bg">
          <img
            src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
            className="img"
            alt="success"
          />
          <p className="text">Submitted Successfully</p>
          <button className="success-btn" type="button" onClick={resetForm}>
            Submit Another Response
          </button>
        </div>
      </div>
    )
  }
}

export default SuccessCard
