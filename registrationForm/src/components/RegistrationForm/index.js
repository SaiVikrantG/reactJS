// Write your JS code here
import {Component} from 'react'
import SuccessCard from '../SuccessCard/index'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    fnameError: false,
    lnameError: false,
    isTrue: false,
  }

  onFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onLastName = event => {
    this.setState({lastName: event.target.value})
  }

  validateFname = () => {
    const {firstName} = this.state
    return firstName !== ''
  }

  validateLname = () => {
    const {lastName} = this.state
    return lastName !== ''
  }

  firstBlurForm = () => {
    this.setState({
      fnameError: !this.validateFname(),
    })
  }

  lastBlurForm = () => {
    this.setState({
      lnameError: !this.validateLname(),
    })
  }

  onSubmitUser = event => {
    event.preventDefault()
    if (this.validateFname() && this.validateLname()) {
      this.setState({isTrue: true})
    } else {
      this.setState({
        fnameError: !this.validateFname(),
        lnameError: !this.validateLname(),
        isTrue: false,
      })
    }
  }

  resetForm = () => {
    this.setState({isTrue: false, firstName: '', lastName: ''})
  }

  render() {
    const {firstName, lastName, isTrue, fnameError, lnameError} = this.state
    return (
      <div className="bg-container">
        {!isTrue ? (
          <>
            <h1 className="heading">Registration</h1>
            <div className="form-container">
              <form className="form" onSubmit={this.onSubmitUser}>
                <label htmlFor="firstName" className="label">
                  First Name
                </label>
                <input
                  type="text"
                  className={`input ${fnameError ? 'border' : ''}`}
                  id="firstName"
                  placeholder="First name"
                  value={firstName}
                  onChange={this.onFirstName}
                  onBlur={this.firstBlurForm}
                />
                {fnameError && <p className="error">Required</p>}
                <label htmlFor="lastName" className="label">
                  Last Name
                </label>
                <input
                  type="text"
                  className={`input ${lnameError ? 'border' : ''}`}
                  id="lastName"
                  placeholder="Last name"
                  value={lastName}
                  onBlur={this.lastBlurForm}
                  onChange={this.onLastName}
                />
                {lnameError && <p className="error">Required</p>}
                <div className="btn-container">
                  <button type="submit" className="btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </>
        ) : (
          <>
            <SuccessCard resetForm={this.resetForm} />
          </>
        )}
      </div>
    )
  }
}

export default RegistrationForm
