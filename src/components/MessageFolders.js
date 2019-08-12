import React from 'react'
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import FolderIcon from '@material-ui/icons/FolderOpen'
import {makeStyles} from '@material-ui/styles'


const useStyles = makeStyles(theme => ({
  header: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));


export default (props) => {
  const classes = useStyles()

  // destructure props for clearer code
  const {
    categories,
    onCategorySelect
  } = props

  // return component tree
  return (
    <React.Fragment>
      <Typography variant="h4" component="h2" className={classes.header}>
        Categories
      </Typography>
      <List component="nav" aria-label="main mailbox folders">
        {
          categories.map(
            ({id, name}) => (
              <ListItem 
                button 
                key={id} 
                onClick={() => onCategorySelect(id)}
              >
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            )
          )
        }
      </List>
    </React.Fragment>
  )
}
