import React from 'react'
import MessageList from '../components/MessageList'
import { connect } from 'react-redux'
import * as actions from '../actions'


class CategoryView extends React.Component {
  constructor(props) {
    super(props)
    this.API = this.props.API
    this.state = {
      category: null,
      messages: null
    }
    this.handleMessageSelect = this.handleMessageSelect.bind(this)
  }

  updateData = () => {
    const { match, startLoading, stopLoading } = this.props
    const categoryId = match.params.id

    startLoading()
    let promise = Promise.all([
      this.API.getCategoryById(categoryId),
      this.API.getMessagesByCategoryId(categoryId)
    ])
    promise
      .then(([category, messages]) => this.setState({
        category: category,
        messages: messages
    }))
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

  handleMessageSelect(messageId) {
    this.props.history.replace(`/message/${messageId}`)
  }

  render() {
    return (this.state.category !== null && this.state.messages !== null)
      ? <MessageList 
        categoryName={this.state.category.name}
        messages={this.state.messages}
        onMessageSelect={this.handleMessageSelect}
      />
      : null
  }
}


export default connect(undefined, actions)(CategoryView)
