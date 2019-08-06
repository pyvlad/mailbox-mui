import React from 'react'

import Layout from './components/Layout'
import Header from './components/Header'
import Footer from './components/Footer'
import MessageList from './components/MessageList'
import MessageFolders from './components/MessageFolders'

import mockData from './data'


export default class extends React.Component {
  constructor(props) {
    super(props)
    this.categories = mockData.categories // categories aren't supposed to change
    this.state = {
      currentCategory: {
        id: "all",
        name: "All Messages"
      },
      messages: mockData.messages
    }
    this.handleCategorySelect = this.handleCategorySelect.bind(this)
  }

  handleCategorySelect(categoryId) {
    this.setState({
      currentCategory: this.categories.filter((cat) => (cat.id === categoryId))[0],
      messages: mockData.messages.filter(msg => msg.categoryId === categoryId)
    })
  }

  render() {
    return (
      <Layout 
        header={<Header />}
        footer={<Footer />} 
        leftPane={
          <MessageFolders 
            categories={this.categories} 
            onCategorySelect={this.handleCategorySelect}
          />
        }
        rightPane={
          <MessageList 
            categoryName={this.state.currentCategory.name}
            messages={this.state.messages}
          />
        }
      />
    )
  }
}