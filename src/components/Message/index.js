// Write your code here
// Write your code here
import './index.css'

const Message = props => {
  const {check} = props
  const msg = check ? 'Welcome User' : 'Please Login'
  return <h1 className="message">{msg}</h1>
}

export default Message
