import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import styles from './Navbar.styles'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import withWidth, { isWidthDown } from '@material-ui/core/withWidth'
import Dropdown from './Dropdown'

const useStyles = makeStyles(styles)

function Menu(props) {
  const classes = useStyles()

  if (isWidthDown('sm', props.width)) {
    return (
      <div className={classes.menuNavBarMobile}>
        <AccountCircleIcon />
        <Dropdown {...props} />
      </div>
    )
  }

  return (
    <div className={classes.menuNavBarDesktop}>
      <AccountCircleIcon />
      <div style={{ paddingLeft: '5px' }}>
        <div>Didier Martin</div>
        <Dropdown {...props} />
      </div>
    </div>
  )
}

export default withWidth()(Menu)
