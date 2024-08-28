const Language = props => {
  const {details, change} = props
  const {imageUrl, buttonText, imageAltText} = details

  const toggle = () => {
    change(imageUrl, imageAltText)
  }

  return (
    <li>
      <button type="button" onClick={toggle}>
        {buttonText}
      </button>
    </li>
  )
}

export default Language
