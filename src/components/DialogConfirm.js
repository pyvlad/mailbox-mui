import React from 'react'
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContentText,
  DialogContent
} from '@material-ui/core'

export default ({
  open,
  dialogTitle,
  dialogText,
  onConfirm,
  onCancel
}) => (
  <Dialog 
    open={open}
    onClose={onCancel} 
    aria-labelledby="simple-dialog-title" 
  >
    <DialogTitle id="simple-dialog-title">{dialogTitle}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {dialogText}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onCancel} color="primary">
        No
      </Button>
      <Button onClick={onConfirm} color="primary" autoFocus>
        Yes
      </Button>
    </DialogActions>
  </Dialog>
)