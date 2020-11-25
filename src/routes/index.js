import { Route, Switch } from 'react-router-dom'
import Start from './Start'
import Summaries from './Summaries'
import Employees from './Employees'
import Signup from './Signup'
import Details from './Details'

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Start} />
      <Route path='/summary' component={Summaries} />
      <Route path='/employees' exact component={Employees} />
      <Route path='/employees/signup' component={Signup} />
      <Route path='/details' component={Details} />
    </Switch>
  )
}

export default Routes
