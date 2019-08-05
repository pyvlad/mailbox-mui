import React from 'react'
import {makeStyles} from '@material-ui/styles'
import {
  AppBar,
  Container
} from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto'
  },
}));


export default ({header, footer, mainContent}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        {header}
      </AppBar>

      <Container className={classes.main} maxWidth="sm">
        {mainContent}
      </Container>

      <footer className={classes.footer}>
        <Container maxWidth="sm">
          {footer}
        </Container>
      </footer>
    </div>
  )
}