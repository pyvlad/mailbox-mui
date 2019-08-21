import React from 'react'
import {withRouter} from 'react-router-dom'

import NavMenu from '../components/NavMenu'
import MessageCreateButton from '../components/MessageCreateButton'
import MessageFolders from '../components/MessageFolders'


class Navigation extends React.Component {
  constructor(props) {
    super(props)

    this.API = this.props.API
    this.state = {
      categories: this.API.categories
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

  updateCategoryData() {
    let requests = this.API.categories.map(
      (cat) => this.API.getMessagesByCategoryId(cat.id)
    )
    Promise
      .all(requests)
      .then((groupedMessages) => {
        return this.API.categories.map(
          (cat, index) => Object.assign(cat, {amount: groupedMessages[index].length})
        )
      })
      .then((categoryData) => this.setState({
        categories: categoryData
      }))
  }

  componentDidMount() {
    this.updateCategoryData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.updateCategoryData()
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