import React from 'react'
import {withRouter} from 'react-router-dom'

import Layout from './components/Layout'
import NavMenu from './components/NavMenu'
import MessageFolders from './components/MessageFolders'
import MessageCreateButton from './components/MessageCreateButton'
import Content from './components/Content'

import mockData from './data'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.categories = mockData.categories // categories aren't supposed to change
    this.messages = mockData.messages     // imitate DB store
    this.state = {
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

  // TODO: this looks BAD, currently shown components are being rerendered
  // before the logic of what is to be rendered is updated
  handleCategorySelect(categoryId) {
    this.setState({
      currentCategory: this.categories.filter((cat) => (cat.id === categoryId))[0],
      currentMessage: {}
    })
    this.props.history.replace(`/category/${categoryId}`)
  }

  handleMessageSelect(messageId) {
    this.setState({
      currentCategory: {},
      currentMessage: this.messages.filter((msg) => (msg.id === messageId))[0]
    })
    this.props.history.replace(`/message/${messageId}`)
  }

  handleMessageCreate() {
    this.setState({
      currentCategory: {},
      currentMessage: {}
    })
    this.props.history.replace(`/create`)
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
    this.props.history.replace('/category/all')
  }

  handleMessageSpam(messageId) {
    const msgObj = this.messages.find((msg) => (msg.id === messageId))
    msgObj["categoryId"] = "spam"

    this.setState({
      currentCategory: {
        id: "all",
        name: "All Messages"
      },
      currentMessage: {}
    })

    this.props.history.replace('/category/all')
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
      currentCategory: {
        id: "all",
        name: "All Messages"
      },
      currentMessage: {}
    })
    this.props.history.replace('/category/all')
  }

  // TODO: use router to dispatch the views
  render() {
    // TODO: is this OK in render? should be pure function
    let messages = this.getMessagesByCategory(this.state.currentCategory.id) 

    let content = <Content 
      categoryName={this.state.currentCategory.name}
      messages={messages}
      currentMessage={this.state.currentMessage}
      handleMessageSelect={this.handleMessageSelect}
      handleMessageDelete={this.handleMessageDelete}
      handleMessageSpam={this.handleMessageSpam}
      handleMessageSend={this.handleMessageSend}
    />

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

export default withRouter(App)