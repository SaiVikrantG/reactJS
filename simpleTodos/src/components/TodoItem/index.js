import './index.css'

const Todo = props => {
  const {name, remove, uniqueNo} = props

  const del = () => {
    remove(uniqueNo)
  }

  return (
    <li className="todo">
      <p>{name}</p>
      <button type="button" className="button" onClick={del}>
        Delete
      </button>
    </li>
  )
}

export default Todo
