import React from 'react'

import Layout from './components/Layout'
import Header from './components/Header'
import Footer from './components/Footer'
import MessageList from './components/MessageList'
import MessageFolders from './components/MessageFolders'

import { categories, messages } from './data'


export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories,
      messages
    }
  }
  render() {
    return (
      <Layout 
        header={<Header />}
        footer={<Footer />} 
        leftPane={<MessageFolders categories={this.state.categories} />}
        rightPane={<MessageList messages={this.state.messages} />}
      />
    )
  }
}