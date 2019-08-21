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

  // TODO: repetition
  componentDidMount() {
    this.setState({
      category: this.API.getCategoryById(this.props.match.params.id),
      messages: this.API.getMessagesByCategoryId(this.props.match.params.id)
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.setState({
        category: this.API.getCategoryById(this.props.match.params.id),
        messages: this.API.getMessagesByCategoryId(this.props.match.params.id)
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