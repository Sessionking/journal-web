import React, {Component} from 'react'
import {Layout, Menu} from 'antd'
import {Link} from 'react-router-dom'

const {SubMenu, Item} = Menu
class LeftSider extends Component {
  state = {openKeys: []}

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

  onOpenChange = openKeys => {
    const lastOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1)
    this.setState({openKeys: lastOpenKey ? [lastOpenKey] : []})
  }

  render() {
    const {menus} = this.props
    const {openKeys} = this.state
    return (
      <Layout.Sider className="sider">
        <Menu mode="inline" openKeys={openKeys} onOpenChange={this.onOpenChange}>
          {this.renderMenu(menus)}
        </Menu>
      </Layout.Sider>
    )
  }
}

export default LeftSider
