import React from 'react'

import {Typography} from '@material-ui/core'
import Icon from '@material-ui/core/Icon'
import {AccessAlarm} from '@material-ui/icons'

// Here, we use Hook API to generate and apply component styles
// https://material-ui.com/styles/basics/
// alternatives: Styled Components (via 'styled') and HOC (via 'withStyles')
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0
  }
}));

export default () => {
  const classes = useStyles()

  return <div className={classes.root}>
    <Typography variant="h1">
      MUI Mailbox
    </Typography>
    <Icon>star</Icon>
    <AccessAlarm />
  </div>
}