import React, { Component } from "react";
import { Menu } from "antd";

const paths = {
  "/": "1",
  "/categories": "1"
};

class Header extends Component {
  render() {
    const selectedNav = [paths[window.location.pathname]];
    return (
      <Header>
        <Menu
          theme='dark'
          mode='horizontal'
          selectedKeys={selectedNav}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key='1'>nav 1</Menu.Item>
          <Menu.Item key='2'>nav 2</Menu.Item>
          <Menu.Item key='3'>nav 3</Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default Header;
