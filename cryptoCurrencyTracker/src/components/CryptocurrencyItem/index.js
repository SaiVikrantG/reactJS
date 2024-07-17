import './index.css'

const CryptoItem = props => {
  const {details} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = details

  //   console.log(id)

  return (
    <li className="crypto-item">
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <img className="img-logo" src={currencyLogo} alt={currencyName} />
        <p>{currencyName}</p>
      </div>
      <div className="prices">
        <p style={{'margin-right': '15px'}}>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptoItem
