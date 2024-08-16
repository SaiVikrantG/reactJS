/* eslint-disable jsx-a11y/control-has-associated-label */
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="Header">
    <Link to="/">
      <img
        className="web-logo"
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <button type="button" data-testid="hamburgerIconButton">
          <GiHamburgerMenu />
        </button>
      }
      className="popup-content"
      overlayClassName="popup-overlay"
    >
      {close => (
        <div>
          <button
            type="button"
            className="trigger-button"
            onClick={() => close()}
            data-testid="closeButton"
          >
            <IoMdClose />
          </button>
          <ul className="options">
            <li>
              <Link to="/">
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <AiFillHome />
                  <h1>Home</h1>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <BsInfoCircleFill />
                  <h1>About</h1>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Popup>
  </nav>
)

export default Header
