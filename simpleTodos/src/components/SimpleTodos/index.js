import './index.css'
import {Component} from 'react'
import Todo from '../TodoItem/index'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class TodoList extends Component {
  state = {todoList: initialTodosList}

  delete = uniqueNo => {
    this.setState(prevState => ({
      todoList: prevState.todoList.filter(eachItem => eachItem.id !== uniqueNo),
    }))
  }

  render() {
    const {todoList} = this.state

    return (
      <div className="background">
        <div className="card">
          <h1>Simple Todos</h1>
          <ul>
            {todoList.map(eachItem => (
              <Todo
                name={eachItem.title}
                key={eachItem.id}
                uniqueNo={eachItem.id}
                remove={this.delete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default TodoList
