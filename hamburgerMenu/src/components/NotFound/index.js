/* eslint-disable react/no-unescaped-entities */
import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div className="not-found">
    <Header />
    <div className="NotFoundContainer">
      <img
        className="error-img"
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
      />
      <h1>Lost your way?</h1>
      <p>
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </div>
)

export default NotFound
