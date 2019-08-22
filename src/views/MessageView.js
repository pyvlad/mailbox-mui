import React from 'react'
import MessageSingle from '../components/MessageSingle'


class MessageView extends React.Component {
  constructor(props) {
    super(props)
    this.API = this.props.API
    this.state = {
      message: null
    }
    this.handleMessageDelete = this.handleMessageDelete.bind(this)
    this.handleMessageSpam = this.handleMessageSpam.bind(this)
  }

  updateData = () => {
    const { match, toggleLoading } = this.props

    toggleLoading()
    this.API.getMessageById(parseInt(match.params.id))
      .then((msg) => {
        this.setState({
          message: msg
        })
      })
      .then(() => toggleLoading())
  }

  componentDidMount() {
    this.updateData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.updateData()
    }
  }

  handleMessageDelete(messageId) {
    const { toggleLoading } = this.props

    toggleLoading()
    this.API.deleteMessageById(messageId)
      .then(() => toggleLoading())
      .then(() => this.props.history.replace('/category/all'))
  }

  handleMessageSpam(messageId) {
    const { toggleLoading } = this.props

    toggleLoading()
    this.API.updateMessageCategory(messageId, "spam")
      .then(() => toggleLoading())
      .then(() => this.props.history.replace('/category/all'))
  }

  render() {
    return this.state.message !== null
    ? <MessageSingle 
        {...this.state.message}
        onMessageDelete={() => this.handleMessageDelete(parseInt(this.props.match.params.id))}
        onMessageSpam={() => this.handleMessageSpam(parseInt(this.props.match.params.id))}
      />
    : null
  }
}

export default MessageView