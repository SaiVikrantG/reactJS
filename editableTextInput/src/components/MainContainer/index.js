import {Component} from 'react'
import Input from '../Input'

import './index.css'

class Main extends Component {
  state = {save: false}

  toggle = () => {
    this.setState(prevState => ({
      save: !prevState.save,
    }))
  }

  render() {
    const {save} = this.state

    return (
      <div className="main-cont">
        <Input toggle={this.toggle} saved={save} />
      </div>
    )
  }
}

export default Main
