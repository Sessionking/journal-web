import {message} from 'antd'

const prefix = '/mock'
const request = (url, option) => {
  const defaultOptions = {method: 'get'}
  const newOptions = {...defaultOptions, ...option}
  return fetch(`${prefix}/${url}`, newOptions)
    .then(response => response.json())
    .then(res => {
      const {success} = res
      if (success) {
        return res
      }
      message.error(res.msg || '请求失败')
      return false
    })
    .catch(err => {
      console.log(err)
      message.warning('请求失败')
    })
}
export default request
