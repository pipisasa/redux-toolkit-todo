import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

function TodoList(props) {
  const state = useSelector((state)=>{
    return state.todo;
  });
  console.log(state);

  return (
    <div>
      <ul className="todo-list">
        {state.todos.map(item=>(
          <TodoItem 
            key={item.id + "-list-item"} 
            item={item}
            changeStatus={props.changeStatus}
            deleteTodo={props.deleteTodo}
            editTodo={props.editTodo}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
