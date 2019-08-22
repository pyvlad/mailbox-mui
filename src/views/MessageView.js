import React from 'react'
import MessageSingle from '../components/MessageSingle'
import { connect } from 'react-redux'
import * as actions from '../actions'


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
    const { match, startLoading, stopLoading } = this.props

    startLoading()
    this.API.getMessageById(parseInt(match.params.id))
      .then((msg) => {
        this.setState({
          message: msg
        })
      })
      .then(() => stopLoading())
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
    const { startLoading, stopLoading } = this.props

    startLoading()
    this.API.deleteMessageById(messageId)
      .then(() => stopLoading())
      .then(() => this.props.history.replace('/category/all'))
  }

  handleMessageSpam(messageId) {
    const { startLoading, stopLoading } = this.props

    startLoading()
    this.API.updateMessageCategory(messageId, "spam")
      .then(() => stopLoading())
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

export default connect(undefined, actions)(MessageView)