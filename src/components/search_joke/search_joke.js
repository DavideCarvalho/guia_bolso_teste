// @flow
import React, { PureComponent } from "react";
import { Input, Row, Col, Avatar  } from "antd";
import swal from 'sweetalert2';
import { Loader } from 'react-overlay-loader';
import 'react-overlay-loader/styles.css';
const Search = Input.Search;

type CategoriesListPropsType = {
  inputSearchJoke: (e: string) => mixed,
  searchJoke: (input: string) => mixed,
  jokes: {
    categories: Array<String>,
    selectedJoke: {
      category: string,
      icon_url: string,
      id: string,
      url: string,
      value: string
    },
    searchJokeInput: string,
    jokesSearched: Array<Object>
  }
};

type SearchJokeType = {
  isLoading: boolean
}

const colStyle = {
  height: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export default class SearchJoke extends PureComponent<CategoriesListPropsType, SearchJokeType> {

  constructor(props: CategoriesListPropsType) {
    super(props);
    this.state = {
      isLoading: false
    }
  }

  async submitForm(e: Object, input: string) {
    e.preventDefault();
    try {
      this.setState({
        isLoading: true
      })
      await this.props.searchJoke(input);
    } catch (e) {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Não foi possível buscar pelas categorias de piadas'
      });
    }
    finally {
      this.setState({
        isLoading: false
      })
    }
  }

  async submitSearch(input: string) {
    try {
      this.setState({
        isLoading: true
      })
      await this.props.searchJoke(input);
    } catch (e) {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Não foi possível buscar pelas categorias de piadas'
      });
    }
    finally {
      this.setState({
        isLoading: false
      })
    }
  }

  render() {
    return (
      <Row gutter={16}>
        <h1>Procurar Piada</h1>
        <h2>Escreva o texto da piada e tentaremos acha-la para você</h2>
        <form onSubmit={(e) => this.submitForm(e, this.props.jokes.searchJokeInput)}>
          <Search onSearch={(e) => this.submitSearch(this.props.jokes.searchJokeInput)} value={this.props.jokes.searchJokeInput} placeholder="input search text" enterButton="Search" size="large" onChange={(e) => this.props.inputSearchJoke(e.target.value)} />
        </form>
        {this.props.jokes.jokesSearched.map((joke, index) => {
          return (
            <Col lg={8} sm={24} key={joke.id} style={colStyle}>
              <Row>
              <Col span={4}>
                <Avatar src={joke.icon_url} />
              </Col>
              <Col span={2}>
              </Col>
              <Col span={12}>
                <h2>{joke.category ? joke.category[0] : 'Piada'}</h2>
              </Col>
              <Col span={24}>
                <p className="category_div_p">{joke.value}</p>
              </Col>
              </Row>
            </Col>
          )
        })}
        <Loader fullPage loading={this.state.isLoading} />
      </Row>
    );
  }
}
