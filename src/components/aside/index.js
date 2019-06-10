import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import {Link} from 'react-router-dom'
import './index.scss'
const { Sider } = Layout
const { SubMenu } = Menu
export default class index extends Component {
  state = {
    collapsed: false
  }
  onCollapse() {
    let collapsed = this.state.collapsed
    this.setState({ collapsed: !collapsed })
  }
  render() {
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse.bind(this)}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="form" />
                <span>业务线管理</span>
              </span>
            }
          >
            <Menu.Item key="3">
              <Link to="/business-manage">业务线管理</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="dashboard" />
                <span>活动管理</span>
              </span>
            }
          >
            <Menu.Item key="6">
              <Link to="/act-manage">运营活动列表</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="profile" />
                <span>统计分析</span>
              </span>
            }
          >
            <Menu.Item key="9">
              <Link to="/statistics">
                统计分析
              </Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    )
  }
}
