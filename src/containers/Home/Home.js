import React from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import styles from './Home.styles'
import MessagesList from '../../components/Messages/MessagesList'
import { Grid, Paper } from '@material-ui/core'
import withWidth, { isWidthDown } from '@material-ui/core/withWidth'

const useStyles = makeStyles(styles)

function Home(props) {
  const classes = useStyles()
  const history = useHistory()
  const paramsRealtorId = history.location.pathname.split('/')[2]
  const paramsMessageId = history.location.pathname.split('/')[4]

  React.useEffect(() => {
    !props.allRealtors &&
      !props.realtors.isFetching &&
      props.dataActions.getRealtors()
  })

  const [realtor, setRealtor] = React.useState()
  const [message, setMessage] = React.useState()

  React.useEffect(() => {
    if (paramsRealtorId && props.allRealtors) {
      const realtor = props.allRealtors.find(a => `${a.id}` === paramsRealtorId)
      setRealtor(realtor)
    } else if (!paramsRealtorId && props.allRealtors) {
      const realtor = props.allRealtors[0]
      setRealtor(realtor)
    }
  })

  React.useEffect(() => {
    paramsMessageId &&
      props.dataActions.getMessage(paramsRealtorId, paramsMessageId)
    setMessage(paramsMessageId)
  }, [paramsMessageId])

  React.useEffect(() => {
    paramsRealtorId && props.dataActions.cleanMessages()
  }, [paramsRealtorId])

  React.useEffect(() => {
    paramsRealtorId && props.dataActions.cleanMessages()
    // if (paramsMessageId) {
    //   props.dataActions.markMessageRead(paramsRealtorId, paramsMessageId)
    // }
  }, [paramsMessageId])

  if (isWidthDown('sm', props.width)) {
    return (
      (props.message.id && (
        <div className={classes.rootMobile}>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid className={classes.gridTitle} item>
              <Paper className={classes.paper}>{props.message.type}</Paper>
            </Grid>
            <Grid className={classes.gridContent} item>
              <Paper className={classes.paper}>{props.message.body}</Paper>
            </Grid>
          </Grid>
          {/* <button onClick={() => history.goBack()}>A</button> */}
        </div>
      )) || (
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                {realtor && (
                  <MessagesList
                    className={classes.messagelist}
                    {...props}
                    realtor={realtor}
                  />
                )}
              </Paper>
            </Grid>
          </Grid>
        </div>
      )
    )
  }

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            {realtor && (
              <MessagesList
                className={classes.messagelist}
                {...props}
                realtor={realtor}
              />
            )}
          </Paper>
        </Grid>
        <Grid item xs={8}>
          {(props.message.id && (
            <div className={classes.rootDesktop}>
              <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
              >
                <Grid className={classes.gridTitle} item>
                  <Paper className={classes.paper}>{props.message.type}</Paper>
                </Grid>
                <Grid className={classes.gridContent} item>
                  <Paper className={classes.paper}>{props.message.body}</Paper>
                </Grid>
              </Grid>
            </div>
          )) || (
            <div className={classes.section}>
              {!props.message.isFetching
                ? "selectionnez sur un message pour l'ouvrir"
                : 'chargement...'}
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  )
}

export default withWidth()(Home)
