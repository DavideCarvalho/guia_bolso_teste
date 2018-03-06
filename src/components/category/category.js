import React, { Component } from 'react';
import { Col } from 'antd';

const colStyle = {
  height: '120px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
  fontWeight: 'bolder'
  color: '#001529'
  textDecoration: underline
}

const pStyle = {
  cursor: 'pointer'
}

export default class Category extends Component {
  render () {
    return (
      <Col sm={12} lg={6} style={colStyle}>
        <p className="category_div_p" onClick={(e) => this.props.selectCategoryAndshowModal(e)} style={pStyle}>{this.props.categoryName}</p>
      </Col>
    )
  }
}
