import React from 'react'
import MessageList from './MessageList'


class CategoryView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      category: {},
      messages: []
    }
    this.handleMessageSelect = this.handleMessageSelect.bind(this)
  }

  // TODO: repetition
  componentDidMount() {
    this.setState({
      category: this.props.getCategoryById(this.props.match.params.id),
      messages: this.props.getMessagesByCategoryId(this.props.match.params.id)
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.setState({
        category: this.props.getCategoryById(this.props.match.params.id),
        messages: this.props.getMessagesByCategoryId(this.props.match.params.id)
      })
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