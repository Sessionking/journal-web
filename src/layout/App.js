import React, {Component} from 'react'
import request from '@/utils'
import {connect} from 'react-redux'
import {Button} from 'antd'
import {add} from '@/actions'

class App extends Component {
  componentDidMount() {
    request('/mock/loginInfo').then(res => {
      console.log(res)
    })
  }

  onClick = () => {
    const {count} = this.props
    this.props.dispatch(add(count + 1))
  }

  render() {
    const {count} = this.props
    return (
      <div>
        {count}
        <Button onClick={this.onClick}>点击</Button>
      </div>
    )
  }
}
const mapStateToProps = ({add}) => ({
  count: add.count,
})

export default connect(mapStateToProps)(App)
