import React from 'react'
import { dateString } from '../../utils'
import { Icon } from '@material-ui/core'
import { useHistory, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import styles from './Message.styles'
import { LongDate } from '../../utils'
const useStyles = makeStyles(styles)

const Messages = ({ message }) => {
  const classes = useStyles()
  return (
    <div className={classes.wrapperMessage}>
      <div className={classes.infoMessage}>
        <div className={classes.fontNameMessage}>
          {`${message.contact.firstname} ${message.contact.lastname}`}
        </div>
        <div className={classes.dateMessage}>{LongDate(message.date)}</div>
      </div>
      <div className={classes.bodyMessage}>{message.body}</div>
    </div>
  )
}

export default Messages
