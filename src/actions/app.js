import request from '@utils'

const updateLoginInfo = data => ({
  type: 'loginInfo',
  data,
})
// 请求登录信息
const requestLoginInfo = () => async dispatch => {
  const res = await request('/loginInfo')
  if (res) {
    dispatch(updateLoginInfo(res.attr))
  }
}
const getLoginInfo = () => dispatch => dispatch(requestLoginInfo())

const menusInfo = data => ({
  type: 'menus',
  data,
})

// 请求菜单信息
const requestMenus = () => async dispatch => {
  const res = await request('/menus')
  if (res) {
    dispatch(menusInfo(res.attr))
  }
}

const getMenusInfo = () => dispatch => {
  dispatch(requestMenus())
}
export {getLoginInfo, getMenusInfo}
