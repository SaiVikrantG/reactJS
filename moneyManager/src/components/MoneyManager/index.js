import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Money from '../MoneyDetails/index'
import Transaction from '../TransactionItem/index'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const MoneyOptions = [
  {
    name: 'Balance',
    color: 'green',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png',
    alt: 'balance',
  },
  {
    name: 'Income',
    color: 'blue',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png',
    alt: 'income',
  },
  {
    name: 'Expenses',
    color: 'purple',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png',
    alt: 'expenses',
  },
]

class Manager extends Component {
  state = {
    title: '',
    amount: '',
    type: '',
    amountList: [],
  }

  add = event => {
    const {id, value} = event.target

    if (id === 'title') {
      this.setState({
        title: value,
      })
    } else if (id === 'amount') {
      this.setState({
        amount: value,
      })
    } else if (id === 'type') {
      if (value === 'INCOME') {
        this.setState({
          type: 'Income',
        })
      } else {
        this.setState({
          type: 'Expenses',
        })
      }
    }
  }

  deel = id => {
    const {amountList} = this.state
    const newList = amountList.filter(eachState => eachState.id !== id)
    this.setState({
      amountList: newList,
    })
  }

  addBtn = event => {
    console.log('check')
    event.preventDefault()
    const {title, amount, type} = this.state

    const newOb = {
      id: uuidv4(),
      title,
      amount,
      type,
    }

    this.setState(prevState => ({
      amountList: [...prevState.amountList, newOb],
      title: '',
      amount: '',
    }))
  }

  render() {
    const {amountList, title, amount} = this.state

    const Income = amountList
      .filter(object => object.type === 'Income')
      .reduce((sum, object) => sum + object.amount, 0)

    const expense = amountList
      .filter(object => object.type === 'Expenses')
      .reduce((sum, object) => sum + object.amount, 0)

    console.log(amountList)

    return (
      <div className="container">
        <div className="navbar">
          <h1>Hi, Richard</h1>
          <p>Welcome back to your Money Manager</p>
        </div>
        <div className="money-tab">
          {MoneyOptions.map(eachItem => (
            <Money
              key={eachItem.name}
              object={eachItem}
              expense={expense}
              Income={Income}
            />
          ))}
        </div>
        <div className="transactions">
          <form className="addTrans" onSubmit={this.addBtn}>
            <h1>Add Transaction</h1>
            <label htmlFor="title">TITLE</label>
            <input
              type="input"
              onChange={this.add}
              placeholder="TITLE"
              id="title"
              value={title}
            />
            <label htmlFor="amount">AMOUNT</label>
            <input
              onChange={this.add}
              type="input"
              placeholder="AMOUNT"
              id="amount"
              value={amount}
            />
            <label htmlFor="type">TYPE</label>
            <select onChange={this.add} type="input" id="type">
              <option value="Inco">In</option>
              <option value={transactionTypeOptions[0].optionId}>
                {transactionTypeOptions[0].displayText}
              </option>
              <option value={transactionTypeOptions[1].optionId}>
                {transactionTypeOptions[1].displayText}
              </option>
            </select>
            <button onClick={this.addBtn} type="button">
              Add
            </button>
          </form>
          <div className="addTrans">
            <h1>History</h1>
            <ul>
              <div className="transactions">
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
              </div>
              {amountList.map(eachItem => (
                <Transaction
                  key={eachItem.id}
                  object={eachItem}
                  deel={this.deel}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Manager
