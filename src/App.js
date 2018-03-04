import React from 'react';
import { Layout, Row, Col, Menu } from 'antd';
import './App.css';
import 'react-overlay-loader/styles.css';
import { Link } from 'react-router-dom'
const { Header, Content, Footer } = Layout;

const paths = {
  '/': '1',
  '/categories':'1'
}

const App = (props, context) => {
  const selectedNav = [paths[window.location.pathname]]
  return (
  <div className='App'>
    <Layout>
      <Header>
        <Menu
          theme='dark'
          mode='horizontal'
          selectedKeys={selectedNav}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key='1'>Categorias</Menu.Item>
          <Menu.Item key='2'><Link to="/search">Procurar Piada</Link></Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Row>
          <Col span={4} />
          <Col span={16}>
            <main>{props.children}</main>
          </Col>
        </Row>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  </div>
);
}

export default App;