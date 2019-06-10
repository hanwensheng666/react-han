import React, { Component } from 'react'
import { Switch,Redirect } from 'react-router-dom'
import { Layout } from 'antd'
import WrapRoute from 'components/wrap-route'
import BreadNav from 'components/bread-nav'
import BusinessManage from 'containers/business-manage'
import ActManage from 'containers/act-manage'
import Statistics from 'containers/statistics'

const { Content } = Layout
export default class index extends Component {
  render() {
    return (
      <Content style={{ margin: '0 16px' }}>
        <BreadNav />
        <div style={{ padding: 24, background: '#fff', minHeight: '350px' }}>
          <Switch>
            <WrapRoute path="/business-manage" component={BusinessManage} />
            <WrapRoute path="/act-manage" component={ActManage} />
            <WrapRoute path="/statistics" component={Statistics} />
            <Redirect to="/business-manage" />
          </Switch>
        </div>
      </Content>
    )
  }
}
