import './index.css'

const Photo = props => {
  const {imgDetails, change, clas} = props
  const {id, thumbnailUrl, thumbnailAltText} = imgDetails

  const Chan = () => {
    change(id)
  }

  return (
    <li>
      <button type="button" onClick={Chan}>
        <img
          alt={thumbnailAltText}
          className={`margin ${clas}`}
          src={thumbnailUrl}
        />
      </button>
    </li>
  )
}

export default Photo
