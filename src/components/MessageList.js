import React from 'react'
import {Typography} from '@material-ui/core'

export default ({messages}) => (
  <React.Fragment>
    <Typography variant="h4" component="h2">
      Messages
    </Typography>
    {
      messages.map(
        ({id, date, from, to, title}) => (
          <React.Fragment key={id}>
            <Typography variant="overline" >
              {date}
            </Typography>
            <Typography variant="body2" >
              [{from.name}->{to.name}]
            </Typography>
            <Typography variant="body1" >
              {title}
            </Typography>
          </React.Fragment>
        )
      )
    }
  </React.Fragment>
)
