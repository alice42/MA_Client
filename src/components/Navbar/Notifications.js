import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import styles from './Navbar.styles'
import MailIcon from '@material-ui/icons/Mail'

const useStyles = makeStyles(styles)

function Menu(props) {
  const classes = useStyles()
  const history = useHistory()
  const paramsRealtorId = history.location.pathname.split('/')[2]

  const [value, setValue] = React.useState()

  React.useEffect(() => {
    if (paramsRealtorId && props.allRealtors) {
      const realtorId = props.allRealtors.find(
        a => `${a.id}` === paramsRealtorId
      )
      setValue(realtorId)
    } else if (!paramsRealtorId && props.allRealtors) {
      const realtorId = props.allRealtors[0]
      setValue(realtorId)
    }
  })

  if (value)
    return (
      <div className={classes.notifications}>
        <MailIcon />
        <span style={{ paddingLeft: '3px' }}>{value.unread_messages}</span>
      </div>
    )

  return (
    <div className={classes.notifications}>
      <MailIcon />
    </div>
  )
}

export default Menu
