import {Link} from 'react-router-dom'

const Header = () => (
  <ul className="header">
    <img
      src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png "
      alt="wave"
    />
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
  </ul>
)

export default Header
