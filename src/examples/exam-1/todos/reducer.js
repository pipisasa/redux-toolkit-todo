import { ADD_TODO, CLEAR_TODO, DELETE_TODO, UPDATE_TODO } from "./constants";

const INITIAL_STATE = {
  data: [],
}

export const todosReducer = (state = INITIAL_STATE, action)=>{
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        data: state.data.concat(action.payload.todo)
      };
    
    case DELETE_TODO:
      return {
        ...state,
        data: state.data.filter(item=>item.id !== action.payload.id),
      };

    case UPDATE_TODO:
      return {
        ...state,
        data: state.data.concat(action.payload)
      };

    case CLEAR_TODO:
      return {
        ...state,
        data: [],
      };

    default: return state;
  }
};