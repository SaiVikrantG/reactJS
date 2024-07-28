import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamsData: [], isLoading: true}

  componentDidMount() {
    this.getTeamsdata()
  }

  getTeamsdata = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data

    const formattedData = teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({teamsData: formattedData, isLoading: false})
  }

  render() {
    const {teamsData, isLoading} = this.state

    const ret =
      isLoading === true ? (
        <div testid="loader">
          <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
        </div>
      ) : (
        <ul>
          {teamsData.map(each => (
            <TeamCard key={each.id} teamDeets={each} teamId={each.id} />
          ))}
        </ul>
      )

    return (
      <div className="ipl-dashboard">
        <div className="logo-container">
          <img
            className="iplLogo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
            alt="ipl logo"
          />
          <h1>IPL Dashboard</h1>
        </div>
        <div className="teams-container">{ret}</div>
      </div>
    )
  }
}

export default Home
