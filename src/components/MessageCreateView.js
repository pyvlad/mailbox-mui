import React from 'react'
import MessageCreateForm from './MessageCreateForm'


class MessageCreateView extends React.Component {
  constructor(props) {
    super(props)
    this.handleMessageSend = this.handleMessageSend.bind(this)
  }

  handleMessageSend(msgData) {
    this.props.createNewMessage(msgData)
    this.props.history.replace('/category/all')
  }

  render() {
    return <MessageCreateForm 
      onMessageSend={this.handleMessageSend} 
    />
  }
}

export default MessageCreateView