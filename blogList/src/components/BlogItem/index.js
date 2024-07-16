const BlogItem = props => {
  const {post} = props
  const {title, description, publishedDate} = post

  return (
    <li>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{publishedDate}</p>
    </li>
  )
}

export default BlogItem
