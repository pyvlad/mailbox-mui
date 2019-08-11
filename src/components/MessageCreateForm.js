import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  formContainer: {
    width: "100%",
    padding: 10,
    backgroundColor: '#fff'
  },
  form: {
    backgroundColor: "#F6F7F8",
    border: "1px solid #D6D9DC",
    borderRadius: "3px",
    padding: "10px"
  },
  formHeader: {
    textAlign: "center",
    marginBottom: "20px"
  },
  formRow: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    marginBottom: "10px"
  },
  formRowLabel: {
    fontSize: "16px",
    lineHeight: 1.3,
    fontWeight: "bold",
    padding: "5px 3px"
  },
  formRowInput: {
    border: "1px solid #D6D9DC",
    borderRadius: "3px",
    fontSize: "14px",
    padding: "7px"
  },
  formRowTextarea: {
    fontFamily: "Helvetica", //"Arial", sans-serif,
    fontSize: "14px",

    border: "1px solid #D6D9DC",
    borderRadius: "3px",
    resize: "none",

    height: "150px",
    marginBottom: "10px",
    padding: "7px"
  },
  submitButton: {
    fontSize: "16px",
    fontWeight: "bold",

    color: "#FFFFFF",
    backgroundColor: "#5995DA",

    border: "none",
    borderRadius: "3px",

    padding: "10px 40px",
    cursor: "pointer",

    '&:hover': {
      backgroundColor: "#76AEED",
    },
    '&:active': {
      backgroundColor: "#407FC7",
    }
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
      <form action='' method='get' className={classes.form} onSubmit={handleSubmit}>
        <header className={classes.formHeader}>
          <h1>New Message</h1>
        </header>
        <div className={classes.formRow}>
          <label 
            htmlFor='new-msg-destination'
            className={classes.formRowLabel}
          >
            Recepient Email
          </label>
          <input 
            type='email' 
            id='new-msg-destination' 
            name='destination' 
            placeholder='bob@example.com' 
            onChange={handleInputChange}
            className={classes.formRowInput}
          />
        </div>
        <div className={classes.formRow}>
          <label 
            htmlFor='new-msg-title'
            className={classes.formRowLabel}
          >
            Message Title
          </label>
          <input 
            type='text' 
            id='new-msg-title' 
            name='title' 
            onChange={handleInputChange}
            className={classes.formRowInput}
          />
        </div>
        <div className={classes.formRow}>
          <label 
            htmlFor='new-msg-body'
            className={classes.formRowLabel}
          >
            Message Body
          </label>
          <textarea 
            id='new-msg-body' 
            name='body' 
            onChange={handleInputChange}
            className={classes.formRowTextarea}
          />
        </div>
        <div className={classes.formRow}>
          <button className={classes.submitButton}>Send</button>
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

