import React from 'react'

import Layout from './components/Layout'
import NavMenu from './components/NavMenu'
import MessageFolders from './components/MessageFolders'
import MessageList from './components/MessageList'
import MessageSingle from './components/MessageSingle'
import MessageCreateForm from './components/MessageCreateForm'
import MessageCreateButton from './components/MessageCreateButton'

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
    this.handleMessageDelete = this.handleMessageDelete.bind(this)
    this.handleMessageSpam = this.handleMessageSpam.bind(this)
  }

  // This method should extract messages from DB
  getMessagesByCategory(categoryId) {
    let msgList = this.messages

    if (categoryId !== "all") {
      msgList = this.messages.filter(msg => msg.categoryId === categoryId)
    }

    msgList.sort(function(a, b) {
      let dateA = new Date(a.date), 
          dateB = new Date(b.date);
      return dateB - dateA;
    });
    
    return msgList
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

  handleMessageDelete(messageId) {
    this.messages = this.messages.filter((msg) => (msg.id !== messageId))

    this.setState({
      viewType: "categoryView",
      currentCategory: {
        id: "all",
        name: "All Messages"
      },
      currentMessage: {}
    })
  }

  handleMessageSpam(messageId) {
    const msgObj = this.messages.find((msg) => (msg.id === messageId))
    msgObj["categoryId"] = "spam"

    this.setState({
      viewType: "categoryView",
      currentCategory: {
        id: "all",
        name: "All Messages"
      },
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
        address: msgData.destination
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
        <MessageSingle 
          {...this.state.currentMessage } 
          onMessageDelete={() => this.handleMessageDelete(this.state.currentMessage.id)}
          onMessageSpam={() => this.handleMessageSpam(this.state.currentMessage.id)}
        />
      )
    }
    else if (this.state.viewType === "messageCreate") {
      content = (
        <MessageCreateForm 
          onMessageSend={this.handleMessageSend} 
        />
      )
    }

    let navMenu = <NavMenu>
      <MessageCreateButton  
        handleClick={this.handleMessageCreate}
      />
      <MessageFolders 
        categories={
          this.categories.map(
            (cat) => Object.assign(cat, {amount: this.getMessagesByCategory(cat.id).length})
          )
        } 
        onCategorySelect={this.handleCategorySelect}
      />
    </NavMenu>


    return (
      <Layout 
        leftPane={navMenu}
        rightPane={content}
      />
    )
  }
}