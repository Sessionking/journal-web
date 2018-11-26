import _ from 'lodash'
import printMe from './print.js'
import './style.css'

function component() {
  var element = document.createElement('div')
  var btn = document.createElement('button')

  element.innerHTML = _.join(['Hello', 'webpack'], ' ')

  btn.innerHTML = '点击'
  btn.onclick = printMe

  element.appendChild(btn)

  return element
}
document.body.appendChild(component())
