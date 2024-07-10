import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import AppointmentItem from '../AppointmentItem/index'

class Appointments extends Component {
  state = {
    appointmentsList: [],
    starredApts: [],
    title: '',
    date: '',
    fil: false,
  }

  filt = () => {
    const {appointmentsList, fil} = this.state
    let updatedArray

    if (!fil) {
      updatedArray = appointmentsList.filter(item => item.id === true)
      this.setState(() => ({
        starredApts: updatedArray,
        fil: !fil,
      }))
    } else {
      this.setState(() => ({
        fil: !fil,
      }))
    }
  }

  modify = (star, uniq) => {
    const {appointmentsList} = this.state
    const updatedArray = appointmentsList.map(item => {
      if (item.id === uniq) {
        return {...item, star: !star}
      }
      return item
    })

    console.log(updatedArray)

    this.setState(() => ({
      appointmentsList: updatedArray,
    }))
  }

  change = event => {
    const {id, value} = event.target

    if (id === 'textInput') {
      this.setState(() => ({
        title: value,
      }))
    } else {
      const da = new Date(value)
      this.setState(() => ({
        date: da,
      }))
    }
  }

  add = () => {
    const {title, date} = this.state

    if (title === '' || date === '') {
      console.log('date or title missing')
      return
    }

    const newObject = {
      id: uuidv4(),
      title,
      date,
      star: false,
    }

    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newObject],
      title: '',
      date: '',
    }))
  }

  render() {
    const {appointmentsList, title, date, fil, starredApts} = this.state
    let filtered

    if (fil) {
      filtered = starredApts
    } else {
      filtered = appointmentsList
    }

    return (
      <div className="apt">
        <div className="card">
          <div className="add">
            <div className="AddApt">
              <h1>Add Appointment</h1>
              <label htmlFor="textInput">TITLE</label>
              <br />
              <input
                onChange={this.change}
                value={title}
                placeholder="Title"
                type="text"
                id="textInput"
              />
              <br />
              <label htmlFor="dateInput">DATE</label>
              <br />
              <input
                onChange={this.change}
                type="date"
                id="dateInput"
                placeholder="DD-MM-YYYY"
                value={date}
              />
              <button onClick={this.add} type="button" className="button">
                Add
              </button>
            </div>
            <div className="image">
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
            </div>
          </div>
          <hr className="line" />
          <h1>Appointments</h1>
          <button className="button" onClick={this.filt} type="button">
            Starred
          </button>
          <ul className="add">
            {filtered.map(eachItem => (
              <AppointmentItem
                title={eachItem.title}
                date={eachItem.date}
                key={eachItem.id}
                chang={this.modify}
                uniq={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
