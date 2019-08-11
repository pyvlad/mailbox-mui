import React from 'react'
import {
  Fab, 
  Icon
 } from '@material-ui/core'


export default ({handleClick}) => (
  <Fab 
    color="secondary" 
    aria-label="edit" 
    size="medium"
    onClick={handleClick}
  >
    <Icon>edit_icon</Icon>
  </Fab>
)