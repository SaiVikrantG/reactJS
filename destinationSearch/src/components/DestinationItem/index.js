import './index.css'

const Place = props => {
  const {image, name} = props

  return (
    <li className="image-cont">
      <img className="image" src={image} alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default Place
