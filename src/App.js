import React from 'react'

// Material-UI
import 'typeface-roboto'
import { CssBaseline } from '@material-ui/core'
// Material-UI components come with a default theme
// To customize the theme we need to use ThemeProvider 
// to inject a new theme
import { ThemeProvider } from '@material-ui/styles'
import { lightTheme, darkTheme } from './theme'
// Routing
import { HashRouter as Router } from 'react-router-dom'

import Layout from './components/Layout'
import Navigation from './views/Navigation'
import Content from './views/Content'

import ApiService from './fakeApi'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: lightTheme,
      isLoading: false
    }
    this.toggleTheme = this.toggleTheme.bind(this)
    this.toggleLoading = this.toggleLoading.bind(this)
    this.API = new ApiService()
  }

  toggleTheme() {
    this.setState({
      theme: (this.state.theme.palette.type === "light") ? darkTheme : lightTheme
    })
  }

  toggleLoading() {
    this.setState({
      isLoading: !this.state.isLoading
    })
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <CssBaseline />
        <Router>
          <Layout 
            leftPane={<Navigation API={this.API} toggleLoading={this.toggleLoading} />}
            rightPane={<Content API={this.API} toggleLoading={this.toggleLoading} />}
            toggleTheme={this.toggleTheme}
            isLoading={this.state.isLoading}
          />
        </Router>
      </ThemeProvider>
    )
  }
}

export default App