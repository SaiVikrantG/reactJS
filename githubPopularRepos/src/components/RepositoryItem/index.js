import './index.css'

const RepoItem = props => {
  const {details} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = details

  return (
    <li className="repo-item">
      <img src={avatarUrl} alt={name} className="avatar" />
      <h1>{name}</h1>
      <div style={{display: 'flex', 'align-items': 'center'}}>
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
        />
        <p>{`${starsCount} stars`}</p>
      </div>
      <div style={{display: 'flex', 'align-items': 'center'}}>
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="stars"
        />
        <p>{`${forksCount} forks`}</p>
      </div>
      <div style={{display: 'flex', 'align-items': 'center'}}>
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="stars"
        />
        <p>{`${issuesCount} open issues`}</p>
      </div>
    </li>
  )
}

export default RepoItem
