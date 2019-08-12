import React from 'react'
import {withStyles} from '@material-ui/styles'
import {
  AppBar,
  Container,
  Grid,
  Paper,
  Hidden,
  Toolbar,
  Typography,
  Link
} from '@material-ui/core'
import NavButton from './NavButton'


const useStyles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  footer: {
    padding: theme.spacing(1)
  },
  header: {
    padding: theme.spacing(1)
  },
  logo: {
    flex: 1
  },
  container: {
    maxWidth: theme.breakpoints.values.md,
    padding: 0
  },
  mainContainer: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    padding: 0,
    flex: 1,
    maxWidth: theme.breakpoints.values.md
  },
  mainGrid: {
    height: "100%"
  },
  mainPane: {
    padding: theme.spacing(1),
    width: "100%"
  },
  mainPaneContent: {
    padding: theme.spacing(1),
    height: "100%"
  }
});


class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showingLeftPane: false
    }
    this.handleLeftPaneToggle = this.handleLeftPaneToggle.bind(this)
  }

  handleLeftPaneToggle() {
    this.setState(
      (state, props) => ({showingLeftPane: !state.showingLeftPane})
    )
  }
  
  render () {
    const {
      classes,
      leftPane, 
      rightPane
    } = this.props
    
    let leftPaneGrid = (
      <Grid item sm={4} className={classes.mainPane}>
        <Paper className={classes.mainPaneContent}>
          { leftPane }
        </Paper>
      </Grid>
    )

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.header}>
          <Container className={classes.container}>
            <Toolbar>
              <Typography variant="h3" component="h1" className={classes.logo}>
                <Link color="inherit" href="/" underline="none">
                  MUI MailBox
                </Link>
              </Typography>
              <Hidden smUp>
                <NavButton
                  handleClick={this.handleLeftPaneToggle}
                />
              </Hidden>
            </Toolbar>
          </Container>
        </AppBar>

        <Container className={classes.mainContainer}>
          <Grid 
            container 
            direction="row"
            justify="center"
            alignItems="stretch"
            className={classes.mainGrid}
          >
            { this.state.showingLeftPane 
            ? <Hidden smUp>
              { leftPaneGrid }
            </Hidden>
            : null}
            <Hidden xsDown>
              { leftPaneGrid }
            </Hidden>
            <Grid item sm={8} className={classes.mainPane}>
              <Paper className={classes.mainPaneContent}>
                { rightPane }
              </Paper>
            </Grid>
          </Grid> 
        </Container>

        <footer className={classes.footer}>
          <Container className={classes.container}>
            <Typography variant="body2" color="textSecondary">
              &copy; 2019. Created by PyVlad React Professionals using
              &nbsp;
                <Link color="inherit" href="https://material-ui.com/">
                  Material-UI
                </Link>
              &nbsp;
              components.
            </Typography>
          </Container>
        </footer>
      </div>
    )
  }
}

export default withStyles(useStyles)(Layout)