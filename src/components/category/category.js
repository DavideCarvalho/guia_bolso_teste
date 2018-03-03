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

  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Col span={6} style={colStyle}>
          <p onClick={this.props.selectCategoryAndshowModal()} style={pStyle}>{this.props.categoryName}</p>
        </Col>
      </div>
    )
  }
}
