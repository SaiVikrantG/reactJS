import './index.css'

const Banner = props => {
  const {headerText, description, className} = props

  return (
    <li className={`${className} card`}>
      <div>
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button type="button" className="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default Banner
