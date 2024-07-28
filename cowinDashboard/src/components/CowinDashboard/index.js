import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'
import './index.css'

const status = {
  failed: 'FAILED',
  loading: 'LOAD',
  success: 'SUCCESS',
}

class Cowin extends Component {
  state = {vaccinationData: {}, isLoading: status.loading}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/covid-vaccination-data')

    if (response.ok) {
      const data = await response.json()

      this.setState({vaccinationData: data, isLoading: status.success})
    } else {
      this.setState({isLoading: status.failed})
    }
  }

  getPlots = () => {
    const {vaccinationData} = this.state

    return (
      <div>
        <VaccinationCoverage
          details={vaccinationData.last_7_days_vaccination}
        />
        <VaccinationByGender details={vaccinationData.vaccination_by_gender} />
        <VaccinationByAge details={vaccinationData.vaccination_by_age} />
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    let display

    if (isLoading === status.loading) {
      display = (
        <div data-testid="loader" className="loader-container">
          <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
        </div>
      )
    } else if (isLoading === status.failed) {
      display = (
        <div className="error-container">
          <img
            className="error-image"
            src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
            alt="failure view"
          />
          <h1 style={{'margin-left': '500px'}}>Something went wrong</h1>
        </div>
      )
    } else {
      display = this.getPlots()
    }

    return (
      <div className="Container">
        <div className="CowinDash">
          <div className="head-logo">
            <img
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
              className="logo"
            />
            <h1>Co-WIN</h1>
          </div>
          <h1>CoWIN Vaccination in India</h1>
          {display}
        </div>
      </div>
    )
  }
}

export default Cowin
