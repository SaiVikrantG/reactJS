import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptoCurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptoList extends Component {
  state = {isLoading: true, dataList: []}

  componentDidMount() {
    this.getCryptoDetails()
  }

  getCryptoDetails = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const formatted = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))

    this.setState({isLoading: false, dataList: formatted})
  }

  render() {
    const msg = 'Cryptocurrency Tracker'

    const {isLoading, dataList} = this.state

    let content = (
      <div className="loader" data-testid="loader">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    )

    if (isLoading === false) {
      content = (
        <ul>
          {dataList.map(each => (
            <CryptoCurrencyItem key={each.id} details={each} />
          ))}
        </ul>
      )
    }

    return (
      <div className="crypto-list">
        <div className="heading">
          <h1>{msg}</h1>
        </div>
        <div className="crypto-image-container">
          <img
            className="crypto-image"
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptocurrency"
          />
        </div>
        <div className="crypto-prices-table">
          <div className="header">
            <h1>Coin Type</h1>
            <div className="prices">
              <h1 style={{marginRight: '100px'}}>USD</h1>
              <h1>EURO</h1>
            </div>
          </div>
          {content}
        </div>
      </div>
    )
  }
}

export default CryptoList
