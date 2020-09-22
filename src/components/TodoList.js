import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

function TodoList() {
  const state = useSelector((state)=>{
    return state.todo;
  });

  return (
    <div>
      <ul className="todo-list">
        {state.todos.map(item=>(
          <TodoItem 
            key={item.id + "-list-item"} 
            item={item}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
