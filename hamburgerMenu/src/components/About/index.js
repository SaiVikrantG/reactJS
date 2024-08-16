/* eslint-disable react/no-unescaped-entities */
import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div className="not-found">
    <Header />
    <div className="NotFoundContainer">
      <img
        className="error-img"
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
      />
    </div>
  </div>
)

export default NotFound
