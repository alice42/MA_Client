import React from 'react'
import { dateString } from '../../utils'
import { Icon } from '@material-ui/core'
import { useHistory, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import styles from './MessagesList.styles'

const useStyles = makeStyles(styles)

const MessagesListItem = props => {
  const classes = useStyles()
  const history = useHistory()

  const { message, realtorId } = props
  const [classeRead, setClassRead] = React.useState(
    message.read ? classes.read : classes.unread
  )
  const handleRead = () => {
    if (!message.read) {
      setClassRead(classes.read)
      props.dataActions.markMessageRead(realtorId, message)
    }
  }

  return (
    <div className={classes.wrapper}>
      <Link
        onClick={handleRead}
        to={`/realtors/${realtorId}/messages/${message.id}`}
        key={message.id}
      >
        <div className={`${classes.itemMessage} ${classeRead}`}>
          <div className={`${classes.iconItemMessage} ${classeRead}`}>
            <Icon>{message.type}</Icon>
          </div>
          <div className={classes.contactMessageWrapper}>
            <div className={classes.nameMessage}>
              <div className={classes.fontNameMessage}>
                {`${message.contact.firstname} ${message.contact.lastname}`}
              </div>
              <div className={classes.phoneNumber}>
                {(message.type === 'phone' || message.type === 'sms') &&
                  `(${message.contact['phone']})`}
              </div>
            </div>
            <div className={classes.subjectMessage}>{message.subject}</div>
            <div className={classes.bodyMessage}>
              {`${message.body.slice(0, 80)}...`}
            </div>
          </div>
          <div className={`${classes.dateMessage} ${classeRead}`}>
            {dateString(message.date)}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default MessagesListItem
