import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class Todo extends React.Component{

  render(){
    return (
      <div className="todo">
        <TodoForm />
        <TodoList />
      </div>
    )
  }
}

export default Todo;