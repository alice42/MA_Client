import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as dataActions from '../../actions/dataActions'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Layout from '../../components/Layout'
import Home from '../Home'

const App = props => (
  <BrowserRouter basename="/">
    <LayoutConnected>
      <Switch>
        <Route exact path={'/realtors'} component={HomeConnected} />
        <Route exact path={'/realtors/:realtorId'} component={HomeConnected} />
        <Route
          exact
          path={'/realtors/:realtorId/messages/:messageId'}
          component={HomeConnected}
        />
        <Redirect to="/realtors" />
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
    messageEntity: data.realtorMessages,
    message: data.message
  }
}

const HomeConnected = connect(mapStateToProps, actionsMapDispatchToProps)(Home)
const LayoutConnected = connect(
  mapStateToProps,
  actionsMapDispatchToProps
)(Layout)

export default connect(mapStateToProps, actionsMapDispatchToProps)(App)
