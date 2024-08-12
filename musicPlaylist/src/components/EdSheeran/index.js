import {Component} from 'react'
import SongItem from '../SongItem'
import './index.css'

class EdSheeran extends Component {
  constructor(props) {
    super(props)
    const {details} = props

    this.state = {searchKey: '', songs: details, filteredData: details}
  }

  change = event => {
    const val = event.target.value

    const {songs} = this.state

    const filter = songs.filter(each => each.name.includes(val))

    this.setState({searchKey: val, filteredData: filter})
  }

  delete = id => {
    this.setState(prevState => {
      const songs = prevState.songs.filter(each => each.id !== id)
      const filteredData = songs.filter(each =>
        each.name.includes(prevState.searchKey),
      )
      return {songs, filteredData}
    })
  }

  render() {
    const {searchKey, filteredData} = this.state

    return (
      <div className="edContainer">
        <div className="coverImg">
          <h1>Ed Sheeran</h1>
          <p>Singer</p>
        </div>
        <div style={{display: 'flex'}}>
          <h1>Songs Playlist</h1>
          <input
            type="search"
            placeholder="Search"
            value={searchKey}
            onChange={this.change}
          />
        </div>
        {filteredData.length === 0 ? (
          <p>No Songs Found</p>
        ) : (
          <ul
            style={{
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
              listStyleType: 'none',
            }}
          >
            {filteredData.map(each => (
              <SongItem key={each.id} del={this.delete} details={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default EdSheeran
