import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class PopularRepos extends Component {
  state = {activeId: 'ALL', repoData: [], status: 'initial'}

  componentDidMount() {
    const {activeId} = this.state
    this.updateLink(activeId)
  }

  updateLink = id => {
    const url = `https://apis.ccbp.in/popular-repos?language=${id}`

    this.getData(url)
  }

  getData = async url => {
    console.log(url)
    const response = await fetch(url)
    const data = await response.json()

    console.log(response.status)

    if (response.status === 200) {
      const formattedData = data.popular_repos.map(each => ({
        name: each.name,
        id: each.id,
        issuesCount: each.issues_count,
        forksCount: each.forks_count,
        starsCount: each.stars_count,
        avatarUrl: each.avatar_url,
      }))

      this.setState({status: 'loaded', repoData: formattedData})
    } else {
      this.setState({status: 'failed'})
    }
  }

  changeId = id => {
    this.setState({activeId: id, status: 'initial'}, this.updateLink(id))
  }

  render() {
    const {activeId, status, repoData} = this.state
    // console.log(repoData)

    let display

    if (status === 'initial') {
      display = (
        <div className="loader" data-testid="loader">
          <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
        </div>
      )
    } else if (status === 'failed') {
      display = (
        <img
          className="loader fail"
          src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
          alt="failure review"
        />
      )
    } else {
      display = (
        <ul className="repo-list">
          {repoData.map(each => (
            <RepositoryItem key={each.id} details={each} />
          ))}
        </ul>
      )
    }

    return (
      <div className="repos">
        <h1 style={{'font-family': 'Lobster'}}>Popular</h1>
        <ul className="languageBar">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              details={each}
              change={this.changeId}
              active={activeId}
              key={each.id}
            />
          ))}
        </ul>
        <div className="repos-display">{display}</div>
      </div>
    )
  }
}

export default PopularRepos
