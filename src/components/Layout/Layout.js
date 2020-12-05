import React from 'react'
import Navbar from '../Navbar'
import { makeStyles } from '@material-ui/core/styles'
import styles from './Layout.styles'

const useStyles = makeStyles(styles)

function Layout(props) {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Navbar {...props} />
      <div className={classes.appBarSpacer} />
      <div className={classes.children}>{props.children}</div>
    </div>
  )
}

export default Layout
