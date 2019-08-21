import React from 'react'
import MessageSingle from '../components/MessageSingle'


class MessageView extends React.Component {
  constructor(props) {
    super(props)
    this.API = this.props.API
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
    const { match } = this.props
    this.setState({
      message: this.API.getMessageById(parseInt(match.params.id))
    })
  }

  handleMessageDelete(messageId) {
    this.API.deleteMessageById(messageId)
    this.props.history.replace('/category/all')
  }

  handleMessageSpam(messageId) {
    this.API.updateMessageCategory(messageId, "spam")
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