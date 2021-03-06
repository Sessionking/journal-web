import React from 'react'
import ReactDOM from 'react-dom'
import App from '@layout/app'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducers from '@/reducers'
import thunk from 'redux-thunk'
import {BrowserRouter as Router} from 'react-router-dom'

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('app')
)
