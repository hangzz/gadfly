'use strict';

import React from 'react'
import { Menu } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const config = () => (
  <div>
    <h2>content222</h2>
  </div>
)

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'mail',
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({
      current: e.key
    })
  }
  render() {
    return (
      <Router>
        <div>
          <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
            <Menu.Item key="home"><Link to="/">首页</Link></Menu.Item>
            <SubMenu title={<Link to="/topics">观点</Link>}>
              <MenuItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
            <Menu.Item key="about"><Link to="/about">关于</Link></Menu.Item>
            <Menu.Item key="alipay">
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
            </Menu.Item>
          </Menu>
          <Route exact path="/" component={config} />
          <Route path="/about" component={config} />
          <Route path="/topics" component={config} />
        </div>
      </Router>
    );
  }
}

export default Nav