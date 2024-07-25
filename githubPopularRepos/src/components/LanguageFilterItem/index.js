import './index.css'

const LanguageItem = props => {
  const {details, change, active} = props
  const {id, language} = details

  const changeId = () => {
    change(id)
  }

  const select = active === id ? 'selectedItem' : null

  return (
    <li className="tabItem">
      <button className={select} type="button" onClick={changeId}>
        {language}
      </button>
    </li>
  )
}

export default LanguageItem
