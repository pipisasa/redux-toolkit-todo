import React from 'react'
import { 
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom';

import Todo from '../components/Todo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import TodoDetails from '../components/TodoDetails';

export default function Routes() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route
          path="/"
          component={Todo}
          exact
        />
        <Route
          path="/todos"
          exact
          component={TodoList}
        />
        <Route
          path="/add-todo"
          exact
          component={TodoForm}
        />
        <Route
          path="/todos/:id"
        >
          <TodoDetails/>
        </Route>
        <Route component={()=><h1>Error: 404</h1>}/>
      </Switch>
      <Footer/>
    </Router>
  )
}
