import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Input} from 'antd'
const MOUNT_NODE = document.getElementById('app')

export default class App extends Component {
  render() {
    return <Input defaultValue="2" />
  }
}
ReactDOM.render(<App />, MOUNT_NODE)
