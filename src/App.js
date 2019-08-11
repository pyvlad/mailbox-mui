import React from 'react'

import Layout from './components/Layout'
import Header from './components/Header'
import Footer from './components/Footer'
import MessageFolders from './components/MessageFolders'
import MessageList from './components/MessageList'
import MessageSingle from './components/MessageSingle'
import MessageCreateForm from './components/MessageCreateForm'

import mockData from './data'


export default class extends React.Component {
  constructor(props) {
    super(props)
    this.categories = mockData.categories // categories aren't supposed to change
    this.messages = mockData.messages     // imitate DB store
    this.state = {
      viewType: "categoryView",
      currentCategory: {
        id: "all",
        name: "All Messages"
      },
      currentMessage: {}
    }
    this.getMessagesByCategory = this.getMessagesByCategory.bind(this)
    this.handleCategorySelect = this.handleCategorySelect.bind(this)
    this.handleMessageSelect = this.handleMessageSelect.bind(this)
    this.handleMessageCreate = this.handleMessageCreate.bind(this)
    this.handleMessageSend = this.handleMessageSend.bind(this)
  }

  // This method should extract messages from DB
  getMessagesByCategory(categoryId) {
    if (categoryId === "all") {
      return this.messages
    }
    return this.messages.filter(msg => msg.categoryId === categoryId)
  }

  handleCategorySelect(categoryId) {
    this.setState({
      viewType: "categoryView",
      currentCategory: this.categories.filter((cat) => (cat.id === categoryId))[0],
      currentMessage: {}
    })
  }

  handleMessageSelect(messageId) {
    this.setState({
      viewType: "messageView",
      currentCategory: {},
      currentMessage: this.messages.filter((msg) => (msg.id === messageId))[0]
    })
  }

  handleMessageCreate() {
    this.setState({
      viewType: "messageCreate",
      currentCategory: {},
      currentMessage: {}
    })
  }

  // this is here mostly to imitate backend 
  handleMessageSend(msgData) {
    const msgObj = {
      id: Math.max(...this.messages.map((item)=>item.id)) + 1,
      from: {
        name: "React Programmer",
        address: "react.programmer@example.com"
      },
      to: {
        name: "Unknown",
        address: msgData.recepient
      },
      categoryId: "sent",
      date: (new Date()).toISOString(),
      title: msgData.title,
      body: msgData.body
    }

    // imitate writing to DB
    this.messages.push(msgObj)

    this.setState({
      viewType: "categoryView",
      currentCategory: {
        id: "all",
        name: "All Messages"
      },
      currentMessage: {}
    })
  }

  // TODO: use router to dispatch the views
  render() {
    let content

    if (this.state.viewType === "categoryView") {
      let {name, id} = this.state.currentCategory
      let messages = this.getMessagesByCategory(id) // TODO: is this OK in render?
      content = (
        <MessageList 
          categoryName={name}
          messages={messages}
          onMessageSelect={this.handleMessageSelect}
        />
      )
    } 
    else if (this.state.viewType === "messageView") {
      content = (
        <MessageSingle {...this.state.currentMessage } />
      )
    }
    else if (this.state.viewType === "messageCreate") {
      content = (
        <MessageCreateForm 
          onMessageSend={this.handleMessageSend} 
        />
      )
    }

    return (
      <Layout 
        header={<Header onMessageCreateClick={this.handleMessageCreate} />}
        footer={<Footer />} 
        leftPane={
          <MessageFolders 
            categories={this.categories} 
            onCategorySelect={this.handleCategorySelect}
          />
        }
        rightPane={content}
      />
    )
  }
}