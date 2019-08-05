import React from 'react'
import {makeStyles} from '@material-ui/styles'
import {
  Typography,
  Grid,
  Paper
} from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  container: {
    height: "100%"
  },
  pane: {
    padding: theme.spacing(1),
    width: "100%"
  },
  paneContent: {
    padding: theme.spacing(2),
    height: "100%"
  }
}));


export default () => {
  const classes = useStyles()

  return (
    <Grid 
      container 
      direction="row"
      justify="center"
      alignItems="stretch"
      className={classes.container}
    >
      <Grid item sm={4} className={classes.pane}>
        <Paper className={classes.paneContent}>
          <Typography variant="h2" component="h1">
            Left Content
          </Typography>
        </Paper>
      </Grid>
      <Grid item sm={8} className={classes.pane}>
        <Paper className={classes.paneContent}>
          <Typography variant="h2" component="h1">
            Right Content
          </Typography>
        </Paper>
      </Grid>
    </Grid> 
  )
}