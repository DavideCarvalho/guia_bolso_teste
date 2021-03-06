import React, { Component } from 'react';
import { Col } from 'antd';

const colStyle = {
  height: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const pStyle = {
  cursor: 'pointer',
  padding: '30px',
  fontWeight: 'bolder',
  color: '#1890ff',
  textDecoration: 'underline'
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
