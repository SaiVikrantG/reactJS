import './index.css'

const EmojiCard = props => {
  const {emojiName, emojiUrl, uniqueId, addToSelect, top} = props

  const add = () => {
    addToSelect(uniqueId, top)
  }

  return (
    <li>
      <button className="card" type="button" onClick={add}>
        <img src={emojiUrl} alt={emojiName} className="image" />
      </button>
    </li>
  )
}

export default EmojiCard
