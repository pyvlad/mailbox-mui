import React from 'react'
import {makeStyles} from '@material-ui/styles'


const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center'
  },
  paneItem: {
    margin: `${theme.spacing(2)}px 0`
  }
}));


export default (props) => {
  const classes = useStyles()

  return <div className={classes.content}>
    {props.children.map(
      (child, index) => <div 
        className={classes.paneItem}
        key={index}
      >
        {child}
      </div>
    )}
  </div>
}
