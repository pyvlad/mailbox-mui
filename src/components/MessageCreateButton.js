import React from 'react'
import {makeStyles} from '@material-ui/styles'
import {
  Fab, 
  Icon,
  Typography
 } from '@material-ui/core'


 const useStyles = makeStyles(theme => ({
  buttonIcon: {
    marginRight: theme.spacing(1)
  },
  buttonLabel: {
    lineHeight: 1
  }
}));


export default ({handleClick}) => {
  const classes = useStyles()

  return <Fab 
    variant="extended"
    color="secondary" 
    aria-label="edit" 
    size="medium"
    onClick={handleClick}
  >
    <Icon className={classes.buttonIcon}>edit_icon</Icon>
    <Typography variant="body1" className={classes.buttonLabel}>
      New Message
    </Typography>
  </Fab>
}