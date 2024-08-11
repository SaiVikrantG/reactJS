import './index.css'

const CategoryOption = props => {
  const {activeId, details, change} = props
  const {imageUrl, ratingId} = details

  const onChange = () => {
    change(ratingId)
  }

  const selected = ratingId === activeId ? 'blue' : null

  return (
    <li onClick={onChange} className={`option ${selected}`}>
      <img src={imageUrl} className="rating-imgs" alt={`rating ${ratingId}`} />
      <p>& up</p>
    </li>
  )
}

export default CategoryOption
