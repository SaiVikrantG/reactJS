import ConfigurationContext from '../../context/ConfigurationContext'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'

const Layout = () => (
  <ConfigurationContext.Consumer>
    {value => {
      // eslint-disable-next-line
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="layout">
          <Header />
          <div className="navbar-content">
            {showLeftNavbar ? (
              <div className="navBar">
                <h1>Left NavBar Menu</h1>
                <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
                </ul>
              </div>
            ) : null}
            {showContent ? (
              <div className="content">
                <h1>Content</h1>
                <p>Lorem ipsum Random sentences</p>
              </div>
            ) : null}
            {showRightNavbar ? (
              <div className="navBar">
                <h1>Right NavBar Menu</h1>
                <h1 className="ad">Ad 1</h1>
                <h1 className="ad">Ad 2</h1>
              </div>
            ) : null}
          </div>
          <Footer />
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Layout
