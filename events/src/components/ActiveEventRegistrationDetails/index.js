import './index.css'

const statItems = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  closed: 'REGISTRATIONS_CLOSED',
}

const ActiveEvent = props => {
  const {status} = props

  let display

  if (status === statItems.initial) {
    // eslint-disable-next-line
    display = (
      <div>
        <p>Click on an event, to view its registration details</p>
      </div>
    )
  } else if (status === statItems.yetToRegister) {
    display = (
      <div>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
          alt="yet to register"
        />
        <p>A live performance brings so much to your relationship with dance</p>
        <button type="button">Register Here</button>
      </div>
    )
  } else if (status === statItems.registered) {
    display = (
      <div>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          alt="registered"
        />
        <h1>You have already registered for the event</h1>
      </div>
    )
  } else {
    display = (
      <div>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
          alt="registrations closed"
        />
        <h1>Registrations Are Closed Now!</h1>
        <p>Stay tuned. We will reopen</p>
      </div>
    )
  }

  return display
}

export default ActiveEvent
