import React, { Component } from 'react';
import { Col } from 'antd';

export default class CategoriesList extends Component {

  componentWillMount() {
    this.props.fetchJokesCategories();
  }

  render() {
    return (
      <div>
        <Col span={6}>Category 1</Col>
        <Col span={6}>Category 2</Col>
        <Col span={6}>Category 3</Col>
        <Col span={6}>Category 4</Col>
      </div>
    );
  }
}
