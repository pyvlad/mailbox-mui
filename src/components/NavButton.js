import React from 'react'
import {
  IconButton
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'


export default ({handleClick}) => {
  return (
    <IconButton
      color="inherit"
      edge="start"
      onClick={handleClick}
    >
      <MenuIcon />
    </IconButton>
  )
}
