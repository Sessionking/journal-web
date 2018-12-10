import React, {Component} from 'react'
import ReactDOM from 'react-dom'
const MOUNT_NODE = document.getElementById('app')

export default class App extends Component {
  render() {
    return <div>2</div>
  }
}
ReactDOM.render(<App />, MOUNT_NODE)
