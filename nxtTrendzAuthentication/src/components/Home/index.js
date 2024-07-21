import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="Home-page">
    <Header />
    <div className="home-page-components">
      <div className="home-page-info">
        <h1>Clothes that get you noticed</h1>
        <p>
          Fashion is part of the daily air and it does not quite help that it
          changes all the time.Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button type="button" className="login-button">
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
      />
    </div>
  </div>
)

export default Home
