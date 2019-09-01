import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  Typography,
  TextField,
  Button
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  formContainer: {
    width: "100%",
    padding: theme.spacing(1)
  },
  formHeader: {
    margin: 0
  },
  formRow: {
    width: "100%",
    marginBottom: theme.spacing(1)
  },
  buttonRow: {
    textAlign: "center"
  }
}));


const MessageCreateFormDumb = (props) => {
  const {
    handleSubmit,
    handleInputChange
  } = props
  const classes = useStyles()

  return (
    <div className={classes.formContainer}>
      <form action='' method='get' onSubmit={handleSubmit}>
        <Typography 
          variant="h5" 
          component="h2" 
          align="center"
          className={classes.formHeader}
        >
          New Message
        </Typography>
        <div className={classes.formRow}>
          <TextField
            id="new-msg-destination"
            label="Recepient Email"
            type='email'
            name='destination' 
            placeholder='bob@example.com'
            helperText="Specify email address of the recepient."
            onChange={handleInputChange} 
            className={classes.formRow}
          />
        </div>
        <div className={classes.formRow}>
          <FormControl className={classes.formRow}>
            <InputLabel htmlFor='new-msg-title'>
              Message Title
            </InputLabel>
            <Input 
              id='new-msg-title'
              type='text'
              name='title' 
              onChange={handleInputChange}
            />
            <FormHelperText>
              Specify the title of the message.
            </FormHelperText>
          </FormControl>
        </div>
        <div className={classes.formRow}>
          <TextField
            variant="outlined"
            id='new-msg-body' 
            name='body' 
            onChange={handleInputChange}
            margin="dense"
            multiline
            rows="9"
            className={classes.formRow}
          />
        </div>
        <div className={classes.buttonRow}>
          <Button 
            variant="contained" 
            color="primary" 
            type="submit"
          >
            {/* Docs:
            "Any other properties supplied will be provided 
            to the root element (ButtonBase)."
            ButtonBase accepts the "type" prop.*/}
            Send
          </Button>
        </div>
      </form>
    </div>
  )
}


export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      recepient: '',
      title: '',
      body: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(e) {
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state)
    this.props.onMessageSend(this.state)
  }

  render() {
    return <MessageCreateFormDumb
      handleSubmit={this.handleSubmit}
      handleInputChange={this.handleInputChange}
    />
  }
}

