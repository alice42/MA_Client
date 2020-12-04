import React from 'react'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import styles from './Home.styles'
import { MessagesList, Message, Contact } from '../../components/Messages'
import { Grid, Paper } from '@material-ui/core'
import withWidth, { isWidthDown } from '@material-ui/core/withWidth'

const useStyles = makeStyles(styles)

function Home(props) {
  const classes = useStyles()
  const { realtorId, messageId } = useParams()

  React.useEffect(() => {
    if (!props.allRealtors && !props.realtors.isFetching) {
      props.dataActions.cleanMessages()
      props.dataActions.getRealtors()
    }
  })

  React.useEffect(() => {
    messageId && props.dataActions.getMessage(realtorId, messageId)
  }, [messageId])

  React.useEffect(() => {
    props.dataActions.cleanMessages()
    realtorId && props.dataActions.getRealtor(realtorId)
  }, [realtorId])

  if (isWidthDown('sm', props.width)) {
    return !props.realtor.id && !props.realtor.isFetching ? (
      <div className={classes.section}>Selectionnez une agence!</div>
    ) : (
      (props.message.id && props.realtor.id && (
        <div className={classes.rootMobile}>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid className={classes.gridTitle} item>
              <Paper className={classes.paper}>
                <Contact message={props.message} />
              </Paper>
            </Grid>
            <Grid className={classes.gridContent} item>
              <Paper className={classes.paper}>
                <Message message={props.message} />
              </Paper>
            </Grid>
          </Grid>
          {/* <button onClick={() => history.goBack()}>A</button> */}
        </div>
      )) || (
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                {props.realtor && props.realtor.id && (
                  <MessagesList
                    className={classes.messagelist}
                    {...props}
                    realtor={props.realtor}
                  />
                )}
              </Paper>
            </Grid>
          </Grid>
        </div>
      )
    )
  }

  return !props.realtor.id && !props.realtor.isFetching ? (
    <div className={classes.section}>Selectionnez une agence!</div>
  ) : (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            {props.realtor && props.realtor.id && (
              <MessagesList
                className={classes.messagelist}
                {...props}
                realtor={props.realtor}
              />
            )}
          </Paper>
        </Grid>
        <Grid item xs={8}>
          {(props.message.id && props.realtor.id && (
            <div className={classes.rootDesktop}>
              <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
              >
                <Grid className={classes.gridTitle} item>
                  <Paper className={classes.paper}>
                    <Contact message={props.message} />
                  </Paper>
                </Grid>
                <Grid className={classes.gridContent} item>
                  <Paper className={classes.paper}>
                    <Message message={props.message} />
                  </Paper>
                </Grid>
              </Grid>
            </div>
          )) || (
            <div className={classes.section}>
              {!props.message.isFetching || !props.message.id
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
