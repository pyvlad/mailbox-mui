import React from 'react'
import {makeStyles} from '@material-ui/styles'

import {
  Icon, 
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider
} from '@material-ui/core'


const useStyles = makeStyles(theme => ({
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
}));


export default ({
  id,
  from,
  to,
  categoryId,
  date,
  title,
  body,
  onMessageDelete,
  onMessageSpam
}) => {
  const classes = useStyles()

  return (
    <article className={classes.container}>
      <header className={classes.header}>
        <div className={classes.date}>
          <Typography variant="caption">
            {(new Date(date)).toLocaleString()}
          </Typography>
        </div>
        <div className={classes.actions}>
          <IconButton className={classes.action} onClick={onMessageDelete}>
            <Icon>delete</Icon>
          </IconButton>
          <IconButton className={classes.action} onClick={onMessageSpam}>
            <Icon>not_interested</Icon>
          </IconButton>
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
