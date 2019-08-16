import React from 'react'
import {Switch, Route} from 'react-router-dom'

import MessageList from './MessageList'
import MessageSingle from './MessageSingle'
import MessageCreateForm from './MessageCreateForm'


const CategoryView = (props) => {
  const {
    categoryName,
    messages,
    handleMessageSelect
  } = props

  return <MessageList 
    categoryName={categoryName}
    messages={messages}
    onMessageSelect={handleMessageSelect}
  />
}

const MessageView = (props) => {
  const {
    currentMessage,
    handleMessageDelete,
    handleMessageSpam
  } = props

  return <MessageSingle 
    {...currentMessage} 
    onMessageDelete={() => handleMessageDelete(currentMessage.id)}
    onMessageSpam={() => handleMessageSpam(currentMessage.id)}
  />
}


const MessageCreateView = (props) => {
  const {
    handleMessageSend
  } = props

  return <MessageCreateForm 
    onMessageSend={handleMessageSend} 
  />
}


export default (contentProps) => {
  return (
    <Switch>
      <Route path="/" exact 
        render={(props) => <CategoryView {...props} {...contentProps} />}
      />
      <Route path="/category" 
        render={(props) => <CategoryView {...props} {...contentProps} />}
      />
      <Route path="/message" 
        render={(props) => <MessageView {...props} {...contentProps} />}
      />
      <Route path="/create" 
        render={(props) => <MessageCreateView {...props} {...contentProps} />}
      />
      <Route render={()=>(<div>404 NOT FOUND</div>)}/>
    </Switch>
  )
}