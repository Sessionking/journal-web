import React, {Component, Fragment} from 'react'
import {Route} from 'react-router-dom'
import SkinCareEntryInfo from '@pages/skinCareEntryInfo'

export default class RouteCollection extends Component {
  render() {
    return (
      <Fragment>
        <Route path="" component={SkinCareEntryInfo} />
      </Fragment>
    )
  }
}
