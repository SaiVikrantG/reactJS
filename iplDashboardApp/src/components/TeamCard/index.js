import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {teamDeets, teamId} = this.props
    const {name, teamImageUrl} = teamDeets

    return (
      <li>
        <Link className="team-card" to={`/team-matches/${teamId}`}>
          <img src={teamImageUrl} alt={name} className="team-logo" />
          <p>{name}</p>
        </Link>
      </li>
    )
  }
}

export default TeamCard
