import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'


export default () => (
  <Typography variant="body2" color="textSecondary">
    &copy; 2019. Created by PyVlad React Professionals using
    &nbsp;
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
    &nbsp;
    components.
  </Typography>
)