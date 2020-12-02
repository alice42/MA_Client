import React from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import styles from './Home.styles'

const useStyles = makeStyles(styles)

function Home(props) {
  const classes = useStyles()
  const history = useHistory()
  const paramsId = history.location.pathname.substring(1)

  React.useEffect(() => {
    !props.allRealtors &&
      !props.realtors.fetching &&
      props.dataActions.getRealtors()
  })

  const [realtor, setRealtor] = React.useState()

  React.useEffect(() => {
    if (paramsId && props.allRealtors) {
      const realtor = props.allRealtors.find(a => `${a.id}` === paramsId)
      setRealtor(realtor)
    } else if (!paramsId && props.allRealtors) {
      const realtor = props.allRealtors[0]
      setRealtor(realtor)
    }
  })

  React.useEffect(() => {
    realtor && props.dataActions.getMessages(realtor.id)
  }, [realtor])

  return (
    <div className={classes.root}>
      <div className={classes.section}>
        {realtor && (
          <div>
            ID: {realtor.id}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {props.currentRealtor.messages &&
                !props.currentRealtor.fetching &&
                props.currentRealtor.messages.map(message => (
                  <div key={message.id}>{message.id}</div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
