import './index.css'

const EventItem = props => {
  const {details, change} = props
  const {registrationStatus, imageUrl, name, location} = details

  const changeStatus = () => {
    change(registrationStatus)
  }

  return (
    <li className="eventContainer">
      <button onClick={changeStatus} type="button">
        <img src={imageUrl} alt="event" className="image" />
        <p>{name}</p>
        <p>{location}</p>
      </button>
    </li>
  )
}

export default EventItem
