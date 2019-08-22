import React from 'react'
import MessageCreateForm from '../components/MessageCreateForm'


class MessageCreateView extends React.Component {
  constructor(props) {
    super(props)
    this.API = this.props.API
    this.handleMessageSend = this.handleMessageSend.bind(this)
  }

  handleMessageSend(msgData) {
    const { toggleLoading } = this.props

    toggleLoading()
    this.API.createNewMessage(msgData)
      .then(() => toggleLoading())
      .then(() => this.props.history.replace('/category/all'))
  }

  render() {
    return <MessageCreateForm 
      onMessageSend={this.handleMessageSend} 
    />
  }
}

export default MessageCreateView