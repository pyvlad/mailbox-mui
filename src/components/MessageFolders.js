import React from 'react'
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import FolderIcon from '@material-ui/icons/FolderOpen'

export default class extends React.Component {

  render() {
    // destructure props for clearer code
    const {
      categories,
      onCategorySelect
    } = this.props

    // return component tree
    return (
      <React.Fragment>
        <Typography variant="h4" component="h2">
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
}
