import './index.css'

const Expense = props => {
  const {object, deel} = props
  const {id, title, amount, type} = object

  const dele = () => {
    deel(id)
  }

  return (
    <li className="listItem">
      <p>{title}</p>
      <p>Rs {amount}</p>
      <p>{type}</p>
      <button data-testid="delete" type="button" onClick={dele}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default Expense
