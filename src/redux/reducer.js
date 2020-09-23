import { combineReducers } from "redux";

import {
  FETCH_DATA,
  FETCH_DATA_FAILED,
  FETCH_DATA_SUCCESS
} from './constants';

const INIT_TODO_STATE = {
  todos: [],
  loading: false,
  error: null,
}

const TodoReducer = (state = INIT_TODO_STATE, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {...state, loading: true}
    case FETCH_DATA_SUCCESS:
      return {
        ...state, 
        todos: action.payload, 
        loading: false, 
        error: null
      }; 
    case FETCH_DATA_FAILED:
      return {
        ...state,
        todos: [],
        loading: false,
        error: action.payload
      }
    
    default: return state;
  }
}

export default combineReducers({
  todo: TodoReducer,
})