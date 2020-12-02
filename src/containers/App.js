import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as dataActions from '../actions/dataActions'

import Layout from '../components/Layout'

const App = props => {
  return <Layout>NEW APP</Layout>
}

const actionsMapDispatchToProps = dispatch => {
  return {
    dataActions: bindActionCreators(dataActions, dispatch)
  }
}

const mapStateToProps = state => {
  const { data } = state
  return {
    data
  }
}

export default connect(mapStateToProps, actionsMapDispatchToProps)(App)
