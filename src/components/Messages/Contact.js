import React from 'react'
import { dateString } from '../../utils'
import { Icon } from '@material-ui/core'
import { useHistory, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import styles from './Message.styles'
import { LongDate } from '../../utils'
const useStyles = makeStyles(styles)

const Contact = ({ message }) => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <div className={classes.iconItemMessage}>
        <Icon>{message.type}</Icon>
      </div>
      <div className={classes.contactWrapper}>
        <div className={classes.fontNameMessage}>
          {`${message.contact.firstname} ${message.contact.lastname}`}
        </div>
        <div className={classes.contactDetails}>
          <div>Email:</div>
          <div className={classes.contactDetailsValue}>
            {message.contact['mail']}
          </div>
        </div>
        <div className={classes.contactDetails}>
          <div>Telephone: </div>
          <div className={classes.contactDetailsValue}>
            {message.contact['phone']}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
