import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import styles from './Navbar.styles'

const useStyles = makeStyles(styles)

export default function Navbar() {
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
      </Toolbar>
    </AppBar>
  )
}
