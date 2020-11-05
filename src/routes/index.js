import { Route, Switch } from 'react-router-dom'
import React from 'react'
import Summaries from './Summaries'
import Employees from './Employees'
import Details from './Details'

const Routes = () => {
  return (
    <Switch>
      <Route path='/summary' exact component={Summaries} />
      <Route path='/employees' component={Employees} />
      <Route path='/details' component={Details} />
    </Switch>
  )
}

export default Routes
