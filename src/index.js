import React from 'react';
import ReactDOM from 'react-dom';

// add @font-face rules in CSS:
import 'typeface-roboto';
// Typography injects CSS classes for each variant
// (with Roboto as first font-family):
import Typography from '@material-ui/core/Typography';
// font-icons are installed locally directly in the 'public' folder
import Icon from '@material-ui/core/Icon';
import { AccessAlarm } from '@material-ui/icons';


ReactDOM.render(
  <div>
    <Typography variant="h1">
      MUI Mailbox
    </Typography>
    <Icon>star</Icon>
    <AccessAlarm />
  </div>,
  document.getElementById('root')
);
