import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import CategoryView from './CategoryView'
import MessageView from './MessageView'
import MessageCreateView from './MessageCreateView'


export default (contentProps) => {
  return (
    <Switch>
      <Route path="/" exact 
        render={(props) => <Redirect to='/category/all'/>} />}
      />
      <Route path="/category/:id" 
        render={(props) => <CategoryView {...props} {...contentProps} />}
      />
      <Route path="/message/:id" 
        render={(props) => <MessageView {...props} {...contentProps} />}
      />
      <Route path="/create" 
        render={(props) => <MessageCreateView {...props} {...contentProps} />}
      />
      <Route render={()=>(<div>404 NOT FOUND</div>)}/>
    </Switch>
  )
}