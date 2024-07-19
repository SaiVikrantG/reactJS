import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Country extends Component {
  state = {point: countryAndCapitalsList[0].id}

  click = event => {
    this.setState({
      point: event.target.value,
    })
  }

  render() {
    const {point} = this.state
    const newList = countryAndCapitalsList.filter(
      eachItem => eachItem.id === point,
    )
    console.log(newList[0])

    return (
      <div className="container">
        <div className="card">
          <h1>Countries And Capitals</h1>
          <select onChange={this.click} value={point}>
            {countryAndCapitalsList.map(eachItem => (
              <option value={eachItem.id} key={eachItem.id}>
                {eachItem.capitalDisplayText}
              </option>
            ))}
          </select>
          <p>is capital of which country?</p>
          <p>{newList[0].country}</p>
        </div>
      </div>
    )
  }
}

export default Country
