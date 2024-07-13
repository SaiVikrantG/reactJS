import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Comment from '../CommentItem/index'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {CommentList: [], name: '', Com: ''}

  change = event => {
    const {id, value} = event.target

    if (id === 'comment') {
      this.setState(() => ({
        Com: value,
      }))
    } else {
      this.setState({
        name: value,
      })
    }
  }

  deel = id => {
    const {CommentList} = this.state
    this.setState({
      CommentList: CommentList.filter(eachItem => eachItem.id === id),
    })
  }

  add = () => {
    const {name, Com} = this.state

    const newOb = {
      id: uuidv4(),
      name,
      Com,
      date: new Date(),
    }

    this.setState(prevState => ({
      CommentList: [...prevState.CommentList, newOb],
      name: '',
      Com: '',
    }))
  }

  render() {
    const {CommentList, name, Com} = this.state
    const count = CommentList.length
    const index = Math.floor(
      Math.random() * initialContainerBackgroundClassNames.length,
    )
    console.log(CommentList)
    return (
      <div className="container">
        <form className="commentAdd">
          <div>
            <h1>Comments</h1>
            <p htmlFor="name">Say something </p>
            <input
              onChange={this.change}
              type="input"
              placeholder="Your Name"
              id="name"
              value={name}
            />
            <textarea
              onChange={this.change}
              placeholder="Your Comment"
              id="comment"
              value={Com}
            ></textarea>
            <button type="button" onClick={this.add}>
              Add Comment
            </button>
          </div>
          <img
            alt="comments"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
          />
        </form>
        <hr />
        <div className="commentAdd">
          <p>{count}</p>
          <p>Comments</p>
          <ul>
            {CommentList.map(eachItem => (
              <Comment
                deel={this.deel}
                object={eachItem}
                key={eachItem.id}
                color={initialContainerBackgroundClassNames[index]}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
