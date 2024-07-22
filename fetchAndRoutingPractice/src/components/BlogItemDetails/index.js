import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const response = await fetch(
      `https://apis.ccbp.in/blogs/${match.params.id}`,
    )

    const each = await response.json()

    const formatted = {
      author: each.author,
      avatarUrl: each.avatar_url,
      content: each.content,
      id: each.id,
      imageUrl: each.image_url,
      title: each.title,
      topic: each.topic,
    }

    this.setState({blogData: formatted, isLoading: false})
  }

  render() {
    const {blogData, isLoading} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogData

    console.log(avatarUrl)

    const result = isLoading ? (
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    ) : (
      <div className="blog-info">
        <h1 className="blog-details-title">{title}</h1>

        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>

        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    )

    return <div className="blog-container">{result}</div>
  }
}

export default BlogItemDetails
