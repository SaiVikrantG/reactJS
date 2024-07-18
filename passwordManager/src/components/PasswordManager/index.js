import {Component} from 'react'
import './index.css'
import AddPassword from '../AddPassword'
import DisplayPassword from '../DisplayPassword'

class PasswordManager extends Component {
  state = {passWordList: [], filtered: [], search: ''}

  delete = username => {
    const {passWordList} = this.state

    const filteredList = passWordList.filter(each => each[1] !== username)

    this.setState({passWordList: filteredList})
  }

  addPassword = (website, name, password) => {
    this.setState(prevState => ({
      passWordList: [...prevState.passWordList, [website, name, password]],
    }))
  }

  searchPassword = key => {
    if (key === '') {
      this.setState({filtered: [], search: ''})
      return
    }
    const {passWordList} = this.state

    const filteredList = passWordList.filter(each => each[0].includes(key))
    // console.log(filteredList)

    this.setState({filtered: filteredList, search: key})
  }

  render() {
    const {passWordList, filtered, search} = this.state

    let searchList

    if (search === '') {
      searchList = (
        <DisplayPassword
          list={passWordList}
          deleteFrom={this.delete}
          filter={this.searchPassword}
        />
      )
    } else {
      searchList = (
        <DisplayPassword
          list={filtered}
          deleteFrom={this.delete}
          filter={this.searchPassword}
        />
      )
    }

    return (
      <div className="passwordManager">
        <div className="PasswordManager-objects">
          <div className="logo">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              alt="app logo"
              className="appLogo"
            />
          </div>
          <div className="addPassword-card">
            <AddPassword addPassword={this.addPassword} />
            <div className="addPassword-image-container">
              <img
                className="addPassword-image"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
              />
            </div>
          </div>
          {searchList}
        </div>
      </div>
    )
  }
}

export default PasswordManager
