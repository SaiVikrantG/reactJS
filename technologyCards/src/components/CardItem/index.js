import './index.css'

const Card = props => {
  const {card} = props
  const {title, description, imgUrl, className} = card

  return (
    <li className={className}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img alt={title} src={imgUrl} />
    </li>
  )
}

export default Card
