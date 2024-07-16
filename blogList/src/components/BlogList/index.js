import BlogItem from '../BlogItem'

const BlogsList = props => {
  const {posts} = props

  return (
    <ul>
      {posts.map(each => (
        <BlogItem post={each} key={each.id} />
      ))}
    </ul>
  )
}

export default BlogsList
