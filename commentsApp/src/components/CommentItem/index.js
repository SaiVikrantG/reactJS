import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import './index.css'

class Comment extends Component {
  constructor(props) {
    super(props)

    this.state = {like: false}
  }

  Like = () => {
    this.setState(prevState => ({
      like: !prevState.like,
    }))
  }

  del = () => {
    const {deel, id} = this.props
    deel(id)
  }

  render() {
    const {object, color} = this.props
    const {name, Com, date} = object
    const {like} = this.state
    console.log(like)
    let Iamg

    if (!like) {
      Iamg = (
        <img
          alt="like"
          src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
        />
      )
    } else {
      Iamg = (
        <img
          alt="liked"
          src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
        />
      )
    }

    return (
      <li className="comment">
        <div className="header">
          <p className={`${color} icon`}>{name[0]}</p>
          <h1>{name}</h1>
          <p>{formatDistanceToNow(date)}</p>
        </div>
        <p>{Com}</p>
        <div className="header">
          <button type="button" onClick={this.Like}>
            {Iamg}
          </button>
          <button onClick={this.del} data-testid="delete" type="button">
            <img
              alt="delete"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            />
          </button>
        </div>
      </li>
    )
  }
}

export default Comment
