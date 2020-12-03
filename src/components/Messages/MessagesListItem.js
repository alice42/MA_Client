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
  const classeRead = message.read ? classes.read : classes.unread

  return (
    <div
      className={classeRead}
      style={{
        borderBottom: '1px solid black',
        padding: '5px',
        textDecoration: 'none',
        color: 'black'
      }}
    >
      <Link
        to={`/realtors/${realtorId}/messages/${message.id}`}
        key={message.id}
        style={{
          textDecoration: 'none',
          color: 'black'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          <Icon>{message.type}</Icon>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'baseline',
              justifyContent: 'space-between'
              // width: '100%'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'baseline'
              }}
            >
              <h4
                style={{ padding: '0', margin: '0' }}
              >{`${message.contact.firstname} ${message.contact.lastname}`}</h4>

              {(message.type === 'phone' || message.type === 'sms') &&
                `(${message.contact['phone']})`}
            </div>
            <div>
              <small>{dateString(message.date)}</small>
            </div>
          </div>
        </div>
        <div>{`${message.body.slice(0, 100)}...`}</div>
      </Link>
    </div>
  )
}

export default MessagesListItem
