import {message} from 'antd'

const request = (url, option) => {
	const defaultOptions = {method: 'get'}
	const newOptions = {...defaultOptions, ...option}
	return fetch(url, newOptions)
		.then(response => {
			return response.json()
		})
		.then(res => {
			const {success} = res
			if (success) {
				return res
			} else {
				message.error(res.msg || '请求失败')
			}
		})
		.catch(err => {
			console.log(err)
			message.warning('请求失败')
		})
}
export default request
