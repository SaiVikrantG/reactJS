/* eslint-disable jsx-a11y/control-has-associated-label */
import {MdDelete} from 'react-icons/md'

const SongItem = props => {
  const {details, del} = props
  const {imageUrl, id, name, genre, duration} = details

  const Del = () => {
    del(id)
  }

  return (
    <li style={{display: 'flex', flexDirection: 'row'}}>
      <img src={imageUrl} alt="track" />
      <p>{name}</p>
      <p>{genre}</p>
      <p>{duration}</p>
      <button type="button" onClick={Del} data-testid="delete">
        <MdDelete />
      </button>
    </li>
  )
}

export default SongItem
