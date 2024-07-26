import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const toggleContent = () => {
        onToggleShowContent()
      }

      const toggleLeft = () => {
        onToggleShowLeftNavbar()
      }

      const toggleRight = () => {
        onToggleShowRightNavbar()
      }

      console.log(showContent)
      console.log(showLeftNavbar)
      console.log(showRightNavbar)

      return (
        <div className="controller">
          <h1>Layout</h1>
          <div className="togglers">
            <label>
              <input
                type="checkbox"
                checked={showContent}
                onChange={toggleContent}
              />
              Content
            </label>
            <label>
              <input
                type="checkbox"
                checked={showLeftNavbar}
                onChange={toggleLeft}
              />
              Left Navbar
            </label>
            <label>
              <input
                type="checkbox"
                checked={showRightNavbar}
                onChange={toggleRight}
              />
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigController
