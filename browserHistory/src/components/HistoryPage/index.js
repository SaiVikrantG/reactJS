import {Component} from 'react'
import './index.css'
import Item from '../HistoryItem/index'

class History extends Component {
  constructor(props) {
    super(props)
    const {history} = this.props
    this.state = {searchKey: '', initList: history}
  }

  change = event => {
    const key = event.target.value
    this.setState({searchKey: key})
  }

  remove = id => {
    const {initList} = this.state
    const newList = initList.filter(eachItem => eachItem.id !== id)

    this.setState({initList: newList})
  }

  render() {
    const {initList} = this.state
    const {searchKey} = this.state
    console.log(initList)
    const historyList = initList.filter(eachItem =>
      eachItem.title.includes(searchKey),
    )

    return (
      <div className="container">
        <div className="search">
          <img
            className="history"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="searcbhar">
            <img
              alt="search"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            />
            <input
              type="search"
              placeholder="Search History"
              className="searchbar"
              onChange={this.change}
            />
          </div>
        </div>
        {historyList.length === 0 ? (
          <p className="text">There is no history to show here</p>
        ) : (
          <ul>
            {historyList.map(eachItem => (
              <Item object={eachItem} remove={this.remove} key={eachItem.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default History
