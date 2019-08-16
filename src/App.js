import React from 'react'

import Layout from './components/Layout'
import Navigation from './components/Navigation'
import Content from './components/Content'

import mockData from './data'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.categories = mockData.categories // categories aren't supposed to change
    this.messages = mockData.messages     // imitate DB store

    this.getMessagesByCategoryId = this.getMessagesByCategoryId.bind(this)
    this.getMessageById = this.getMessageById.bind(this)
    this.getCategoryById = this.getCategoryById.bind(this)
    this.deleteMessageById = this.deleteMessageById.bind(this)
    this.updateMessageCategory = this.updateMessageCategory.bind(this)
    this.createNewMessage = this.createNewMessage.bind(this)
  }

  // FAKE BACKEND API
  getMessagesByCategoryId(categoryId) {
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

  getMessageById(messageId) {
    return this.messages.filter((msg) => (msg.id === messageId))[0]
  }

  getCategoryById(categoryId) {
    if (categoryId === "all") {
      return {
        id: "all",
        name: "All Messages"
      }
    }
    return this.categories.filter((cat) => (cat.id === categoryId))[0]
  }

  deleteMessageById(messageId) {
    this.messages = this.messages.filter((msg) => (msg.id !== messageId))
  }

  updateMessageCategory(messageId, categoryId) {
    const msgObj = this.messages.find((msg) => (msg.id === messageId))
    msgObj["categoryId"] = categoryId
  }

  createNewMessage(msgData){
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
    this.messages.push(msgObj)
  }


  render() {
    return (
      <Layout 
        leftPane={
          <Navigation 
            categories={this.categories}
            getMessagesByCategoryId={this.getMessagesByCategoryId}
          />
        }
        rightPane={
          <Content 
            getMessagesByCategoryId={this.getMessagesByCategoryId}
            getMessageById={this.getMessageById}
            getCategoryById={this.getCategoryById}
            deleteMessageById={this.deleteMessageById}
            updateMessageCategory={this.updateMessageCategory}
            createNewMessage={this.createNewMessage}
          />
        }
      />
    )
  }
}

export default App