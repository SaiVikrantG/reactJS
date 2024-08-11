import {Component} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Register from './components/Register'
import RegisterContext from './context/RegisterContext'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {
    registerStatus: false,
    topic: 'ARTS_AND_CULTURE',
    showError: false,
    name: '',
  }

  changeRegisterStatus = () => {
    this.setState(prevState => ({
      registerStatus: !prevState.registerStatus,
    }))
  }

  updateError = () => {
    this.setState(prevState => ({showError: !prevState.showError}))
  }

  updateName = enteredName => {
    this.setState({name: enteredName})
  }

  updateTopic = topicValue => {
    this.setState({topic: topicValue})
  }

  render() {
    const {registerStatus, name, topic, showError} = this.state

    return (
      <RegisterContext.Provider
        value={{
          registerStatus,
          name,
          topic,
          showError,
          changeRegisterStatus: this.changeRegisterStatus,
          updateError: this.updateError,
          updateName: this.updateName,
          updateTopic: this.updateTopic,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
