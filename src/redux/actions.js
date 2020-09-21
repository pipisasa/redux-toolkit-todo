import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO
} from './constants';

export const addTodo = (todo)=>{
  return {
    type: ADD_TODO,
    payload: todo
  }
}