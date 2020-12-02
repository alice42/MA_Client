import React from 'react'
import Navbar from '../Navbar'
import { makeStyles } from '@material-ui/core/styles'
import styles from './Layout.styles'

const useStyles = makeStyles(styles)

function Layout({ children }) {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Navbar />
      <div className={classes.children}>{children}</div>
    </div>
  )
}

export default Layout
