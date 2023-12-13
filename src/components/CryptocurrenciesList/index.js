// Write your JS code here
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {itemList: [], isScanner: true}

  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedList = data.map(every => ({
      id: every.id,
      currencyName: every.currency_name,
      currencyLogo: every.currency_logo,
      usdValue: every.usd_value,
      euroValue: every.euro_value,
    }))
    this.setState({itemList: updatedList, isScanner: false})
  }

  render() {
    const {itemList, isScanner} = this.state
    return (
      <div className="list-bg">
        {isScanner ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="bg">
            <h1 className="list-head">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="image"
            />
            <ul className="list-item-bg">
              <li className="list-item">
                <p className="list-para">Coin Type</p>
                <div className="first">
                  <p className="list-para">USD</p>
                  <p className="list-para">EURO</p>
                </div>
              </li>
              <li className="list">
                {itemList.map(each => (
                  <CryptocurrencyItem itemDetails={each} key={each.id} />
                ))}
              </li>
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default CryptocurrenciesList
