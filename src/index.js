import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';

import 'typeface-roboto';
import { CssBaseline } from '@material-ui/core';
import App from './App';

// Material-UI components come with a default theme
// To customize the theme we need to use ThemeProvider 
// to inject a new theme
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);
