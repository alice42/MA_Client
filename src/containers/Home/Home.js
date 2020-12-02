import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import styles from './Home.styles'

const useStyles = makeStyles(styles)

function Home(props) {
  const classes = useStyles()

  React.useEffect(() => {
    !props.allRealtors &&
      !props.realtors.fetching &&
      props.dataActions.getRealtors()
  })

  return (
    <div className={classes.root}>
      <div className={classes.section}>Content</div>
    </div>
  )
}

export default Home
