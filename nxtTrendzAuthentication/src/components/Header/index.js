import './index.css'

const Header = () => (
  <nav className="navBar">
    <div>
      <img
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
    </div>
    <div>
      <ul
        style={{
          display: 'flex',
          'flex-direction': 'row',
          'list-style-type': 'none',
          'font-family': 'Roboto',
        }}
      >
        <li className="logos">
          Home
          {/* <img
            className="logos"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
          /> */}
        </li>
        <li className="logos">
          Products
          {/* <img
            className="logos"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
          /> */}
        </li>
        <li className="logos">
          Cart
          {/* <img
            className="logos"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
          /> */}
        </li>
        <li className="logos">
          Logout
          {/* <img
            className="logos"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
          /> */}
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
