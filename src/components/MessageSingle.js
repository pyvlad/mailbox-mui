import React from 'react'
import {withStyles} from '@material-ui/styles'

import {
  Icon, 
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
  Tooltip
} from '@material-ui/core'
import DialogConfirm from './DialogConfirm'


const useStyles = theme => ({
  container: {
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  actions: {
    textAlign: "right"
  },
  action: {
    color: "#f55"
  },
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  direction: {
    color: theme.palette.primary[theme.palette.type]
  }
})


class MessageSingle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isDeleteConfirmOpen: false,
      isSpamConfirmOpen: false
    }
    this.handleDialogClose = this.handleDialogClose.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
  }

  handleConfirm(what) {
    if (what === "spam") {
      this.setState({isSpamConfirmOpen: true})
    }
    else if (what === "delete") {
      this.setState({isDeleteConfirmOpen: true})
    }
  }

  handleDialogClose() {
    this.setState({
      isDeleteConfirmOpen: false,
      isSpamConfirmOpen: false
    })
  }

  render() {
    const {
      classes,
      from,
      to,
      date,
      title,
      body,
      onMessageDelete,
      onMessageSpam
    } = this.props

    return (
      <article className={classes.container}>
        <header className={classes.header}>
          <div className={classes.date}>
            <Typography variant="caption">
              {(new Date(date)).toLocaleString()}
            </Typography>
          </div>
          <div className={classes.actions}>
            <DialogConfirm 
              open={this.state.isDeleteConfirmOpen}
              dialogTitle="Confirm Delete"
              dialogText="Are you sure you want to delete this message?"
              onConfirm={onMessageDelete}
              onCancel={this.handleDialogClose}
            />
            <Tooltip title="delete">
              <IconButton className={classes.action} onClick={() => this.handleConfirm("delete")}>
                <Icon>delete</Icon>
              </IconButton>
            </Tooltip>
            <DialogConfirm 
              open={this.state.isSpamConfirmOpen}
              dialogTitle="Confirm as Spam"
              dialogText="Are you sure you want to mark this message as spam?"
              onConfirm={onMessageSpam}
              onCancel={this.handleDialogClose}
            />
            <Tooltip title="mark as spam">
              <IconButton className={classes.action} onClick={() => this.handleConfirm("spam")}>
                <Icon>not_interested</Icon>
              </IconButton>
            </Tooltip>
          </div>
        </header>
        <List className={classes.addressList}>
          <ListItem dense disableGutters>
            <ListItemAvatar>
              <Avatar>
                <Icon>image</Icon>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={from.name} secondary={from.address} />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem dense disableGutters>
            <ListItemAvatar>
              <Avatar>
                <Icon>image</Icon>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={to.name} secondary={to.address} />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
        <Typography variant="h4" component="h2" className={classes.title}>{title}</Typography>
        <section className={classes.body}>
          <Typography variant="body1">
            {body}
          </Typography>
        </section>
      </article>
    )
  }
}
  
export default withStyles(useStyles)(MessageSingle)
