import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import styles from './Navbar.styles'

import Dropdown from '../Dropdown'

const useStyles = makeStyles(styles)

export default function Navbar(props) {
  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography
          color="inherit"
          variant="h6"
          className={classes.brand}
          data-test="brand"
        >
          material example
        </Typography>
        <div className={classes.flex} />
        <Dropdown {...props} />
      </Toolbar>
    </AppBar>
  )
}
