import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import './App.css';
const { Header, Content, Footer } = Layout;

class App extends Component {
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
                  <Col span={6}>Category 1</Col>
                  <Col span={6}>Category 2</Col>
                  <Col span={6}>Category 3</Col>
                  <Col span={6}>Category 4</Col>
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
