import React from 'react'
import {Typography} from '@material-ui/core'

export default ({categories}) => (
  <React.Fragment>
    <Typography variant="h4" component="h2">
      Categories
    </Typography>
    {
      categories.map(
        ({id, name}) => (
          <Typography variant="h6" key={id}>
            {name}
          </Typography>
        )
      )
    }
  </React.Fragment>
)
