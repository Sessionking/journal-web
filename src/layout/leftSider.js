import React, {Component} from 'react'
import {Layout, Menu} from 'antd'
import {Link} from 'react-router-dom'

const {SubMenu, Item} = Menu
class LeftSider extends Component {
  renderMenu = menus =>
    menus.map(menu => (
      <SubMenu key={menu.key} title={menu.title}>
        {menu.subMenu.map(sub => (
          <Item key={sub.key}>
            <Link to={sub.url}>{sub.title}</Link>
          </Item>
        ))}
      </SubMenu>
    ))

  render() {
    const {menus} = this.props
    return (
      <Layout.Sider className="sider">
        <Menu mode="inline">{this.renderMenu(menus)}</Menu>
      </Layout.Sider>
    )
  }
}

export default LeftSider
