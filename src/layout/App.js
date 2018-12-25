import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Layout, LocaleProvider} from 'antd'
import {app} from '@actions'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import Header from './header'
import LeftSider from './leftSider'
import RouteCollection from '@/routes'
import '@styles/index.less'
import './index.less'

const {Content} = Layout
class App extends Component {
  componentDidMount() {
    this.initHeader()
    this.initMenus()
  }

  // 获取头部信息
  initHeader = () => {
    const {dispatch} = this.props
    dispatch(app.getLoginInfo())
  }

  // 获取菜单信息
  initMenus = () => {
    const {dispatch} = this.props
    dispatch(app.getMenusInfo())
  }

  render() {
    const {loginInfo, menus} = this.props
    return (
      <LocaleProvider locale={zh_CN}>
        <Layout>
          <Header loginInfo={loginInfo} />
          <Layout>
            <LeftSider menus={menus} />
            <Content className="content">
              <RouteCollection />
            </Content>
          </Layout>
        </Layout>
      </LocaleProvider>
    )
  }
}
const mapStateToProps = ({loginInfo, menus}) => ({
  loginInfo,
  menus,
})

export default connect(mapStateToProps)(App)
