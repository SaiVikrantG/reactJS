import './index.css'

const CategoryOption = props => {
  const {activeId, details, change} = props
  const {name, categoryId} = details

  const onChange = () => {
    change(categoryId)
  }

  const selected = categoryId === activeId ? 'blue' : null

  return (
    <li onClick={onChange} className={`option ${selected}`}>
      <p>{name}</p>
    </li>
  )
}

export default CategoryOption
