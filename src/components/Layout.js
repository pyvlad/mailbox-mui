import React from 'react'
import {makeStyles} from '@material-ui/styles'
import {
  AppBar,
  Container,
  Grid,
  Paper
} from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  footer: {
    padding: theme.spacing(2)
  },
  mainContainer: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    padding: 0,
    flex: 1
  },
  mainGrid: {
    height: "100%"
  },
  mainPane: {
    padding: theme.spacing(1),
    width: "100%"
  },
  mainPaneContent: {
    padding: theme.spacing(2),
    height: "100%"
  }
}));


export default ({header, footer, leftPane, rightPane }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        {header}
      </AppBar>

      <Container className={classes.mainContainer}>
        <Grid 
          container 
          direction="row"
          justify="center"
          alignItems="stretch"
          className={classes.mainGrid}
        >
          <Grid item sm={4} className={classes.mainPane}>
            <Paper className={classes.mainPaneContent}>
              { leftPane }
            </Paper>
          </Grid>
          <Grid item sm={8} className={classes.mainPane}>
            <Paper className={classes.mainPaneContent}>
              { rightPane }
            </Paper>
          </Grid>
        </Grid> 
      </Container>

      <footer className={classes.footer}>
        <Container>
          {footer}
        </Container>
      </footer>
    </div>
  )
}