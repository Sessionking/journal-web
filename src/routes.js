import React, {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
// import SkinCareEntryInfo from '@pages/skinCareEntryInfo'
// import SkinCareEntryFeel from '@pages/skinCareEntryFeel'
import DiaryCaseEntry from '@pages/diary/diaryCaseEntry'

export default class RouteCollection extends Component {
  render() {
    return (
      <Switch>
        {/* <Redirect exact from="/" to="/diary/import" /> */}
        <Route path="/diary/import" component={DiaryCaseEntry} />
        {/* <Route path="/skinCare/entryInfo" component={SkinCareEntryInfo} />
        <Route path="/skinCare/entryFeel" component={SkinCareEntryFeel} /> */}
      </Switch>
    )
  }
}
