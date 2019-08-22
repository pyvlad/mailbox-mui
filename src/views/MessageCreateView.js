import React from 'react'
import MessageCreateForm from '../components/MessageCreateForm'
import { connect } from 'react-redux'
import * as actions from '../actions'


class MessageCreateView extends React.Component {
  constructor(props) {
    super(props)
    this.API = this.props.API
    this.handleMessageSend = this.handleMessageSend.bind(this)
  }

  handleMessageSend(msgData) {
    const { startLoading, stopLoading } = this.props

    startLoading()
    this.API.createNewMessage(msgData)
      .then(() => stopLoading())
      .then(() => this.props.history.replace('/category/all'))
  }

  render() {
    return <MessageCreateForm 
      onMessageSend={this.handleMessageSend} 
    />
  }
}

export default connect(undefined, actions)(MessageCreateView)