import React, { Component } from 'react'
import { Breadcrumb } from 'antd';
import { connect } from 'react-redux';

class index extends Component {
  render() {
    const breadNames = this.props.breadNames
    return (
      <Breadcrumb style={{ margin: '16px 0' }}>
      {
        breadNames.map((item,index)=>{
          return <Breadcrumb.Item key={'bread_'+index}>{item}</Breadcrumb.Item>
        })
      }
      </Breadcrumb>
    )
  }
}
const masStateToProps = state => ({
  breadNames:state.bread.breadNames
})
export default connect(masStateToProps,null)(index)