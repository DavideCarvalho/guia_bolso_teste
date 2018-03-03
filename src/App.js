import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import { Loader } from 'react-overlay-loader';
import CategoriesList from './connections/connected_categories_list';
import './App.css';
import 'react-overlay-loader/styles.css';
const { Header, Content, Footer } = Layout;

class App extends Component {

  componentWillMount() {
    //call action to do a request to the api to get the categories
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Header>Header</Header>
          <Content>
            <Row>
              <Col span={4} />
              <Col span={16}>
                <Row>
                  <CategoriesList />
                </Row>
              </Col>
            </Row>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
