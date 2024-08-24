import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './App.css'

class App extends Component {
  state = {isLoading: true, data: []}

  async componentDidMount() {
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    const parsed = await response.json()

    this.setState({data: parsed.packages, isLoading: false})
  }

  getData = () => {
    const {data} = this.state

    return (
      <ul>
        {data.map(each => (
          <li
            key={each.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              margin: '10px',
            }}
          >
            <img
              src={each.image_url}
              alt={each.name}
              style={{width: '100px', height: '100px'}}
            />
            <h1 style={{fontSize: '16px'}}>{each.name}</h1>
            <p style={{fontSize: '14px'}}>{each.description}</p>
          </li>
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="travel-data">
        <h1>Travel Guide</h1>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </div>
          ) : (
            this.getData()
          )}
        </div>
      </div>
    )
  }
}

export default App
