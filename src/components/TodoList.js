import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../redux/actions';
import TodoItem from './TodoItem'

function TodoList() {
  const state = useSelector((state)=>{
    return state.todo;
  });

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchData())
  },[])

  if(!state?.todos?.length){
    return <h2>Your todo list is empty...</h2>
  }

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
