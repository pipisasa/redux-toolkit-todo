import Axios from 'axios';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

function TodoList() {
  const state = useSelector((state)=>{
    return state.todo;
  });

  useEffect(()=>{
    Axios.get(process.env.REACT_APP_API_URL + "/people")
      .then(({data})=>{
        console.log(data)
      })
  },[]);

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
