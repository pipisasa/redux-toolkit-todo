import React from 'react'
import { 
  Router, 
  Switch,
  Route
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Todo from '../components/Todo';

export const history = createBrowserHistory();

export default function Routes() {
  return (
    <Router history={history}>

      <Switch>
        <Route
          path="/"
          component={Todo}
          exact
        />

        <Route
          path="/todo/:id"
          component={()=>"На перерыв"}
        />

        <Route component={()=><h1>Error: 404</h1>}/>

      </Switch>

    </Router>
  )
}
