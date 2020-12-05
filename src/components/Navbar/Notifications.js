import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import styles from './Navbar.styles'
import MailIcon from '@material-ui/icons/Mail'

const useStyles = makeStyles(styles)

function Menu(props) {
  const classes = useStyles()

  const [value, setValue] = React.useState('')

  React.useEffect(() => {
    if (props.realtor.id && !props.realtor.isFetching) {
      setValue(props.realtor.unread_messages - 1)
    }
  })

  return (
    <div className={props.classesNotif}>
      <MailIcon />
      <span style={{ paddingLeft: '3px' }}>{value}</span>
    </div>
  )
}

export default Menu
