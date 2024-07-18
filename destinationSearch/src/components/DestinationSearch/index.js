import './index.css'
import {Component} from 'react'
import Place from '../DestinationItem/index'

class ImgSearch extends Component {
  state = {filterKey: ''}

  onChangeSearch = event => {
    const key = event.target.value
    this.setState({
      filterKey: key.toLowerCase(),
    })
  }

  render() {
    const {destinationsList} = this.props

    const {filterKey} = this.state

    const newList = destinationsList.filter(eachObject =>
      eachObject.name.toLowerCase().includes(filterKey),
    )

    return (
      <div className="background">
        <h1>Destination Search</h1>
        <div>
          <input
            type="search"
            placeholder="Search"
            onChange={this.onChangeSearch}
            className="mb inpu"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul>
          {newList.map(eachItem => (
            <Place
              image={eachItem.imgUrl}
              name={eachItem.name}
              key={eachItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default ImgSearch
