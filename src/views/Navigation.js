import React from 'react'
import {withRouter} from 'react-router-dom'

import NavMenu from '../components/NavMenu'
import MessageCreateButton from '../components/MessageCreateButton'
import MessageFolders from '../components/MessageFolders'


class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: this.props.categories
    }
    this.handleCategorySelect = this.handleCategorySelect.bind(this)
    this.handleMessageCreate = this.handleMessageCreate.bind(this)
  }

  handleCategorySelect(categoryId) {
    this.props.history.replace(`/category/${categoryId}`)
  }

  handleMessageCreate() {
    this.props.history.replace(`/create`)
  }

  fetchCategoryData() {
    return this.props.categories.map(
      (cat) => Object.assign(cat, {amount: this.props.getMessagesByCategoryId(cat.id).length})
    )
  }

  componentDidMount() {
    this.setState({
      categories: this.fetchCategoryData()
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({
        categories: this.fetchCategoryData()
      })
    }
  }

  render() {
    return (
      <NavMenu>
        <MessageCreateButton 
          handleClick={this.handleMessageCreate}
        />
        <MessageFolders 
          categories={this.state.categories}
          onCategorySelect={this.handleCategorySelect}
        />
      </NavMenu>
    )
  }
}

export default withRouter(Navigation)