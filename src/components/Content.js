import React from 'react'

import MessageList from './MessageList'
import MessageSingle from './MessageSingle'
import MessageCreateForm from './MessageCreateForm'


export default (props) => {
  const {
    viewType,
    categoryName,
    messages,
    currentMessage,
    handleMessageSelect,
    handleMessageDelete,
    handleMessageSpam,
    handleMessageSend
  } = props

  let content

  if (viewType === "categoryView") {
    content = <MessageList 
      categoryName={categoryName}
      messages={messages}
      onMessageSelect={handleMessageSelect}
    />
  }
  else if (viewType === "messageView") {
    content = <MessageSingle 
      {...currentMessage} 
      onMessageDelete={() => handleMessageDelete(currentMessage.id)}
      onMessageSpam={() => handleMessageSpam(currentMessage.id)}
    />
  }
  else if (viewType === "messageCreate") {
    content = <MessageCreateForm 
      onMessageSend={handleMessageSend} 
    />
  }

  return content
}