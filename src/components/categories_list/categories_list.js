// @flow
import React, { Component } from 'react';
import { Col, Modal } from 'antd';
import { Loader } from 'react-overlay-loader';
import Category from '../category';
import swal from 'sweetalert2';
import './categories_list.css';
import 'react-overlay-loader/styles.css';

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
  visible: boolean,
  isLoadableActive: boolean
};

export default class CategoriesList extends Component<CategoriesListPropsType, CategoriesListStateType> {
  constructor(props: CategoriesListPropsType) {
    super(props);
    this.state = {
      visible: false,
      isLoadableActive: false
    };
  }

  async componentWillMount() {
    this.setState({
      isLoadableActive: true
    })
    try {
      await this.props.fetchJokesCategories();
    } catch (e) {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Não foi possível buscar pelas categorias de piadas',
      });
    } finally {
      this.setState({
        isLoadableActive: false
      })
    }
  }

  async selectCategoryAndshowModal (e: Object) {
    console.log(e)
    console.log(this.setState);
    try {
      this.setState({
        isLoadableActive: true
      })
      await this.props.selectJokeCategory(e.currentTarget.textContent);
      this.setState({
        visible: true
      });
    } catch (e) {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Não foi possível buscar por uma piada',
      });
    } finally {
      this.setState({
        isLoadableActive: false
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
        {this.props.jokes.categories.map((categoryName, index) => (
          <Category key={index} categoryName={categoryName} selectCategoryAndshowModal={this.selectCategoryAndshowModal} />
        ))}
        <Modal
          title={`Chuck Norris ${this.props.jokes.selectedJoke.category} jokes`}
          visible={this.state.visible}
          onOk={e => this.handleOk(e)}
          onCancel={e => this.handleCancel(e)}
        >
          <p>{this.props.jokes.selectedJoke.value}</p>
        </Modal>
        <Loader fullPage loading={this.state.isLoadableActive} />
      </div>
    );
  }
}
