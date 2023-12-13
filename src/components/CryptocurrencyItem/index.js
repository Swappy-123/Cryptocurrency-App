// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {itemDetails} = props
  const {id, currencyLogo, currencyName, usdValue, euroValue} = itemDetails
  return (
    <li className="item-bg" key={id}>
      <div className="first">
        <img src={currencyLogo} alt={currencyName} className="img" />
        <p className="item-para">{currencyName}</p>
      </div>
      <div className="second">
        <p className="item-para">{usdValue}</p>
        <p className="item-para">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
