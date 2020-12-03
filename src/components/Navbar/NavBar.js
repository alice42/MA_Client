import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'
import styles from './Navbar.styles'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'

import { ReactComponent as Logo } from '../../assets/logo-meilleursagentspro-neg.svg'

import Menu from './Menu'
import Notifications from './Notifications'

const useStyles = makeStyles(styles)

function ElevationScroll(props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  })
}

export default function Navbar(props) {
  const classes = useStyles()

  return (
    // <ElevationScroll {...props}>
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Logo className={classes.logo} />
        <Notifications {...props} />
        <div className={classes.flex} />
        <Menu {...props} />
      </Toolbar>
    </AppBar>
    // </ElevationScroll>
  )
}
