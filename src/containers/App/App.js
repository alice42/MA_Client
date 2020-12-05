import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as dataActions from '../../actions/dataActions'

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  HashRouter
} from 'react-router-dom'

import Layout from '../../components/Layout'
import Home from '../Home'

const App = props => (
  <BrowserRouter basename="/">
    <LayoutConnected>
      <Switch>
        <Route exact path={'/'} component={HomeConnected} />
        <Route exact path={'/realtor/:realtorId'} component={HomeConnected} />
        <Route
          exact
          path={'/realtor/:realtorId/message/:messageId'}
          component={HomeConnected}
        />
        <Redirect to="/" />
      </Switch>
    </LayoutConnected>
  </BrowserRouter>
)

const actionsMapDispatchToProps = dispatch => {
  return {
    dataActions: bindActionCreators(dataActions, dispatch)
  }
}

const mapStateToProps = state => {
  const { data } = state
  return {
    realtors: data,
    realtor: data.realtor,
    allRealtors: data.allRealtors,
    realtorMessages: data.realtorMessages,
    message: data.message
  }
}

const HomeConnected = connect(mapStateToProps, actionsMapDispatchToProps)(Home)
const LayoutConnected = connect(
  mapStateToProps,
  actionsMapDispatchToProps
)(Layout)

export default connect(mapStateToProps, actionsMapDispatchToProps)(App)
