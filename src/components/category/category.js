import React, { Component } from 'react';
import { Col } from 'antd';
import './category.css';

const colStyle = {
  height: '120px',
  border: '1px solid black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const pStyle = {
  cursor: 'pointer'
}

export default class Category extends Component {
  render () {
    return (
      <Col span={6} style={colStyle}>
        <p onClick={(e) => this.props.selectCategoryAndshowModal(e)} style={pStyle}>{this.props.categoryName}</p>
      </Col>
    )
  }
}
