import React from 'react'
import MessageList from '../components/MessageList'


class CategoryView extends React.Component {
  constructor(props) {
    super(props)
    this.API = this.props.API
    this.state = {
      category: {},
      messages: []
    }
    this.handleMessageSelect = this.handleMessageSelect.bind(this)
  }

  updateData = () => {
    const { match } = this.props
    const categoryId = match.params.id
    let promise = Promise.all([
      this.API.getCategoryById(categoryId),
      this.API.getMessagesByCategoryId(categoryId)
    ])
    promise.then(([category, messages]) => this.setState({
        category: category,
        messages: messages
    }))
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
    return <MessageList 
      categoryName={this.state.category.name}
      messages={this.state.messages}
      onMessageSelect={this.handleMessageSelect}
    />
  }
}


export default CategoryView
