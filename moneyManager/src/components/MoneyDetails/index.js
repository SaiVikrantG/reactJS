import './index.css'

const Money = props => {
  const {object, Income, expense} = props
  const {name, color, imgUrl, alt} = object

  let val
  let testid

  if (name === 'Balance') {
    val = parseInt(Income) - parseInt(expense)
    testid = 'balanceAmount'
  } else if (name === 'Income') {
    val = parseInt(Income)
    testid = 'incomeAmount'
  } else {
    val = parseInt(expense)
    testid = 'expensesAmount'
  }

  return (
    <div className={`${color} tab`}>
      <img className="image" src={imgUrl} alt={alt} />
      <div>
        <p>Your {name}</p>
        <p data-testid={testid}>Rs {val}</p>
      </div>
    </div>
  )
}

export default Money
