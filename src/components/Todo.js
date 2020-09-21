import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class Todo extends React.Component{
  
  handleChangeStatus=(id)=>{
    const index = this.state.todos.findIndex((item)=>{
      return item.id === id
    });
    const todos = [...this.state.todos];
    const item = {...todos[index]};
    item.status = !item.status;
    todos[index] = item
    this.setState({ todos })
  }

  handleDeleteTodo = (id)=>{
    console.log("DELETE-",id)
    const todos = this.state.todos.filter((item)=>{
      return item.id!==id
    });
    console.log(todos, this.state.todos)
    this.setState({ todos });
  }

  handleEditTodo=({ id, title })=>{
    const index = this.state.todos.findIndex((item)=>{
      return item.id === id
    });
    const todos = [...this.state.todos];
    const item = {...todos[index]};
    item.title = title;
    todos[index] = item
    this.setState({ todos })
  }

  render(){
    return (
      <div className="todo">
        <TodoForm />
        <TodoList 
          changeStatus={this.handleChangeStatus}
          deleteTodo={this.handleDeleteTodo}
          editTodo={this.handleEditTodo}
        />
      </div>
    )
  }
}

export default Todo;