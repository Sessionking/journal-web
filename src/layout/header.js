import React, {PureComponent, Fragment} from 'react'
import {Layout, Icon, Popover} from 'antd'

export default class Header extends PureComponent {
  render() {
    const {
      loginInfo: {phoneNumber, displayName, email},
    } = this.props
    const title = (
      <Fragment>
        <div className="header-login-info">手机号：{phoneNumber}</div>
        <div className="header-login-info">邮箱：{email}</div>
      </Fragment>
    )
    const content = (
      <div className="header-login-operate">
        <a>修改密码</a>
        <a>退出</a>
      </div>
    )
    return (
      <Layout.Header className="header">
        <span className="header-title">日记本</span>
        <div className="header-login">
          <span className="header-login-name">你好！{displayName}</span>
          <Popover title={title} content={content} placement="bottom" trigger="click">
            <Icon type="user" />
          </Popover>
        </div>
      </Layout.Header>
    )
  }
}
