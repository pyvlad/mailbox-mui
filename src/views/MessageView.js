import React from 'react'
import MessageSingle from '../components/MessageSingle'


class MessageView extends React.Component {
  constructor(props) {
    super(props)
    // TODO this is bad, need to create fake message 
    // and embedded structures cause issues all the time
    this.state = {
      message: {
        from: {
          name: "",
          address: ""
        },
        to: {
          name: "",
          address: ""
        },
        date: "",
        title: "",
        body: ""
      }
    }
    this.handleMessageDelete = this.handleMessageDelete.bind(this)
    this.handleMessageSpam = this.handleMessageSpam.bind(this)
  }

  componentDidMount() {
    this.setState({
      message: this.props.getMessageById(parseInt(this.props.match.params.id))
    })
  }

  handleMessageDelete(messageId) {
    this.props.deleteMessageById(messageId)
    this.props.history.replace('/category/all')
  }

  handleMessageSpam(messageId) {
    this.props.updateMessageCategory(messageId, "spam")
    this.props.history.replace('/category/all')
  }

  render() {
    return <MessageSingle 
      {...this.state.message}
      onMessageDelete={() => this.handleMessageDelete(parseInt(this.props.match.params.id))}
      onMessageSpam={() => this.handleMessageSpam(parseInt(this.props.match.params.id))}
    />
  }
}

export default MessageView