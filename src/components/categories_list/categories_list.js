// @flow
import React, { Component } from 'react';
import { Col, Modal } from 'antd';
import swal from 'sweetalert2';
import './categories_list.css';

type CategoriesListPropsType = {
  fetchJokesCategories: () => void,
  selectJokeCategory: (selectedJoke: string) => void,
  jokes: {
    categories: Array<String>,
    selectedJoke: {
      category: string,
      icon_url: string,
      id: string,
      url: string,
      value: string
    }
  }
};

type CategoriesListStateType = {
  visible: boolean
};

export default class CategoriesList extends Component<
  CategoriesListPropsType,
  CategoriesListStateType
> {
  constructor(props: CategoriesListPropsType) {
    super(props);
    this.state = {
      visible: false
    };
  }

  componentWillMount() {
    this.props.fetchJokesCategories();
  }

  async selectCategoryAndshowModal(e: Object) {
    try {
      await this.props.selectJokeCategory(e.currentTarget.textContent);
      this.setState({
        visible: true
      });
    } catch (e) {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href>Why do I have this issue?</a>'
      });
    }
  }

  handleOk(e: Object) {
    console.log(e);
    this.setState({
      visible: false
    });
  }

  handleCancel(e: Object) {
    this.setState({
      visible: false
    });
  }

  render() {
    return (
      <div>
        {this.props.jokes.categories.map((category, index) => (
          <Col span={6} key={index}>
            <p onClick={e => this.selectCategoryAndshowModal(e)}>{category}</p>
          </Col>
        ))}
        <Modal
          title={`Chuck Norris ${this.props.jokes.selectedJoke.category} jokes`}
          visible={this.state.visible}
          onOk={e => this.handleOk(e)}
          onCancel={e => this.handleCancel(e)}
        >
          <p>{this.props.jokes.selectedJoke.value}</p>
        </Modal>
      </div>
    );
  }
}
