import { combineReducers } from "redux";
// import { TodoReducer } from "./todos/reducer";
import todosReducer from "./todosSlice";

export default combineReducers({
  // todo: TodoReducer,
  todo: todosReducer,
})