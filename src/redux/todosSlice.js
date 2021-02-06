import { 
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import Axios from "axios";
// import reducer from "./reducer";

const INIT_TODO_STATE = {
  todos: [],
  loading: false,
  error: null,
}

export const fetchData = createAsyncThunk(
  "todos/fetchData",
  async (_, { dispatch })=>{
    try {
      const {data} = await Axios.get(process.env.REACT_APP_API_URL+"/todos" + window.location.search)
      return data;
    } catch (error) {
      dispatch(todosError(error));
      return;
    }
  }
);

// dispatch(fetchData({}, adasd))

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (todo, { dispatch })=>{
    try {
      await Axios.post(process.env.REACT_APP_API_URL+"/todos", todo)
      dispatch(fetchData())
    } catch (error) {
      dispatch(todosError(error));
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id, { dispatch })=>{
    try {
      await Axios.delete(process.env.REACT_APP_API_URL+"/todos/" + id)
      dispatch(fetchData())
    } catch (error) {
      dispatch(todosError(error));
    }
  }
);

export const editTodo = createAsyncThunk(
  "todos/editTodo",
  async ({todo, cb}, { dispatch })=>{
    try {
      await Axios.patch(process.env.REACT_APP_API_URL+"/todos/"+todo.id, todo)
      dispatch(fetchData());
      cb();
    } catch (error) {
      dispatch(todosError(error));
    }
  }
);


const todosSlice = createSlice({
  initialState: INIT_TODO_STATE,
  name: "todos",
  reducers: {
    todosError(state, action){
      state.todos = [];
      state.loading = false;
      state.error = action.payload;
    },
    // reducer = (state)=>({...state, todos: []})
  },
  extraReducers: {

    // [fetchData.pending]
    // [fetchData.rejected]
    // [fetchData.fulfilled]


    [fetchData.pending]: (state)=>{
      state.loading = true;
    },

    [fetchData.fulfilled]: (state, action)=>{
      state.todos = action.payload;
      state.loading = false;
      state.error = null;
    },
  }
});

const {
  reducer: todosReducer, 
  actions
} = todosSlice;

export const {
  todosError,
} = actions;

export default todosReducer;