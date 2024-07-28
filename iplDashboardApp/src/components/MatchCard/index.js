import './index.css'

const MatchCard = props => {
  const {match} = props

  const {competingTeamLogo, competingTeam, result, matchStatus} = match

  const classResult = matchStatus === 'Lost' ? 'red' : 'green'

  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        className="team-logo"
        alt={`competing team ${competingTeam}`}
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p style={{color: `${classResult}`}}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
