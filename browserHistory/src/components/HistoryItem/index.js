import './index.css'

const Item = props => {
  const {object, remove} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = object
  console.log(id)
  const dele = () => {
    remove(id)
  }

  return (
    <li className="container">
      <p>{timeAccessed}</p>
      <img alt="domain logo" src={logoUrl} />
      <p>{title}</p>
      <p>{domainUrl}</p>
      <button type="button" onClick={dele} data-testid="delete">
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default Item
