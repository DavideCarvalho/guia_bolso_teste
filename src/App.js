import React, { PureComponent } from "react";
import { Layout, Row, Col, Menu } from "antd";
import "./App.css";
import "react-overlay-loader/styles.css";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
const { Header, Content } = Layout;

const paths = {
  "/": "1",
  "/categories": "1",
  '/search':'2'
};

class App extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      selectedNav: [paths[this.props.location.pathname]]
    }
  }

  changeRoute(route: string) {
    this.setState({
      selectedNav: [route]
    })
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Header>
            <Menu
              theme="dark"
              mode="horizontal"
              selectedKeys={this.state.selectedNav}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="1">
                <Link to="/" onClick={(e) => this.changeRoute('1')} >Categorias</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/search" onClick={(e) => this.changeRoute('2')}>Procurar Piada</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content>
            <Row>
              <Col span={4} />
              <Col span={16}>
                <main>{this.props.children}</main>
              </Col>
            </Row>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
