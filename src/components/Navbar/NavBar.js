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

export default function Navbar(props) {
  const classes = useStyles()

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Logo className={classes.logo} />
        <Notifications {...props} />
        <div className={classes.flex} />
        <Menu {...props} />
      </Toolbar>
    </AppBar>
  )
}
