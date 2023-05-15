import React from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({ varient, children }) => {
  return <Alert variant={varient}>{children}</Alert>
}
Message.defaultPorops = {
  varient: 'info',
}
export default Message
