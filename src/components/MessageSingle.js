import React from 'react'
import {makeStyles} from '@material-ui/styles'
// TODO: decompose this into several components
// TODO: rewrite this component with material UI components

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(2)
  },
  header: {
    display: "flex",
    justifyContent: "space-between"
  },
  actions: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "flex-end"
  },
  actionButton: {
    marginLeft: theme.spacing(1),
    padding: "2px",
    textAlign: "center",
    border: "2px solid #DDD",
    borderRadius: "5px"
  },
  emailMeta: { 
    paddingLeft: 0,
    marginTop: theme.spacing(2), 
    backgroundColor: "#eee",
    listStyleType: "none"
  },
  emailMetaItem: {
    padding: `0px ${theme.spacing(1)}px`
  },
  emailBody: {
    marginTop: theme.spacing(1), 
    padding: theme.spacing(1),
    border: "1px solid white"
  }
}));


export default ({
  id,
  from,
  to,
  categoryId,
  date,
  title,
  body
}) => {
  const classes = useStyles()

  return (
    <article className={classes.container}>
      <header className={classes.header}>
        <h1>{title}</h1>
        <ul className={classes.actions}>
          <li><button className={classes.actionButton}>&#128465;</button></li>
          <li><button className={classes.actionButton}>spam</button></li>
          <li><button className={classes.actionButton}>send</button></li>
        </ul>
      </header>
      <ul className={classes.emailMeta}>
        <hr/>
        <li className={classes.emailMetaItem}>From: {from.name}</li><hr/>
        <li className={classes.emailMetaItem}>To: {to.name}</li><hr/>
        <li className={classes.emailMetaItem}>
          { (new Date(date)).toLocaleString() }
        </li>
        <hr/>
      </ul>  
      <section className={classes.emailBody}>
        {body}
      </section>
    </article>
  )
}
