import {Component} from 'react'
import Logout from '../Logout'
import Login from '../Login'
import Message from '../Message'
import './index.css'

class Home extends Component {
  state = {check: false}

  change = () => this.setState(prev => ({check: !prev.check}))

  render() {
    const {check} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <Message check={check} />
          {check ? (
            <Logout logout={this.change} />
          ) : (
            <Login login={this.change} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
