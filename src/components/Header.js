import React from 'react'
import {
  Toolbar,
  Typography
} from '@material-ui/core'
import MessageCreateButton from './MessageCreateButton'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
  logo: {
    flex: 1
  },
  messageCreateButton: {
    margin: theme.spacing(1),
  }
}));


export default (props) => {
  const { onMessageCreateClick } = props
  const classes = useStyles()

  return (
    <Toolbar>
      <Typography variant="h3" component="h1" className={classes.logo}>
        MUI MailBox
      </Typography>
      <MessageCreateButton 
        className={classes.messageCreateButton} 
        handleClick={onMessageCreateClick}
      />
    </Toolbar>
  )
}
