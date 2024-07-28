import {Component} from 'react'
import Loader from 'react-loader-spinner'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamBanner: '',
    recentMatches: [],
    latestMatch: {},
    team: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    const {latestMatchDetails, recentMatches, teamBannerUrl} = formattedData

    const formattedLatest = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }

    const recentFormatted = recentMatches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))

    this.setState({
      teamBanner: teamBannerUrl,
      team: id,
      latestMatch: formattedLatest,
      recentMatches: recentFormatted,
      isLoading: false,
    })
  }

  render() {
    const {teamBanner, team, latestMatch, recentMatches, isLoading} = this.state

    const {
      umpires,
      result,
      manOfTheMatch,
      date,
      venue,
      competingTeam,
      competingTeamLogo,
      firstInnings,
      secondInnings,
    } = latestMatch

    const ret =
      isLoading === true ? (
        <div testid="loader">
          <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
        </div>
      ) : (
        <div className="team-components">
          <img className="banner-image" src={teamBanner} alt="team banner" />
          <h1>Latest Matches</h1>
          <div className="latest-match">
            <div>
              <p>{competingTeam}</p>
              <p>{date}</p>
              <p>{venue}</p>
              <p>{result}</p>
            </div>
            <img src={competingTeamLogo} alt="competing_team" />
            <div>
              <h3>First Innings</h3>
              <p>{firstInnings}</p>
              <h3>Second Innings</h3>
              <p>{secondInnings}</p>
              <h3>Man of the Match</h3>
              <p>{manOfTheMatch}</p>
              <h3>Umpires</h3>
              <p>{umpires}</p>
            </div>
          </div>
          <ul className="recent-matches">
            {recentMatches.map(each => (
              <MatchCard key={each.id} match={each} />
            ))}
          </ul>
        </div>
      )

    return <div className={`team-page ${team}`}>{ret}</div>
  }
}

export default TeamMatches
