import React from 'react';
import { connect } from 'react-redux';
import { Route ,withRouter} from 'react-router-dom'
import {changeBreadNav} from 'store/actions/bread.js'
/**
 * 重新封装路由，处理路由跳转得前置逻辑
 */

const breadNames = {
  '/business-manage':['业务线管理'],
  '/act-manage':['活动管理'],
  '/statistics':['统计分析'],
} 

class index extends React.Component {
  componentWillMount(){
    this.props.changeBreadNav(breadNames[this.props.location.pathname])
  }
  componentWillReceiveProps(newProps){
    this.props.changeBreadNav(breadNames[newProps.path])
  }
  render() {
    const { component: Component, ...rest } = this.props;
    let c = (<Route
      {...rest}    
      render={props =>
        <Component {...props} />
      }
    />);
    return (
      <>
        {c}
      </>
    );
  }
}
const mapStateToProps = state => ({

})
export default connect(mapStateToProps,{changeBreadNav})(withRouter(index));
