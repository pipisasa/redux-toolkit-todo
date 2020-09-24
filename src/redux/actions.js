import Axios from 'axios';
import {
  FETCH_DATA,
  FETCH_DATA_FAILED,
  FETCH_DATA_SUCCESS
} from './constants';

export const addTodo = (todo)=>(dispatch)=>{
  Axios.post(process.env.REACT_APP_API_URL+"/todos", todo)
    .then(()=>{
      dispatch(fetchData())
    })
    .catch(err=>{
      dispatch(fetchDataFailed(err))
    })
}

export const deleteTodo = (id)=>(dispatch)=>{
  Axios.delete(process.env.REACT_APP_API_URL+"/todos/"+id)
    .then(()=>{
      dispatch(fetchData())
    })
    .catch(err=>{
      dispatch(fetchDataFailed(err))
    })
}

export const editTodo = (todo, cb)=>(dispatch)=>{
  Axios.patch(process.env.REACT_APP_API_URL+"/todos/"+todo.id, todo)
    .then(()=>{
      dispatch(fetchData())
      cb();
    })
    .catch(err=>{
      dispatch(fetchDataFailed(err))
    })
}

export const fetchData = ()=> (dispatch)=>{
  dispatch({
    type: FETCH_DATA
  });
  Axios.get(process.env.REACT_APP_API_URL+"/todos" + window.location.search)
    .then(response=>{
      const {data} = response;
      dispatch(fetchDataSuccess(data))
    })
    .catch(err=>{
      dispatch(fetchDataFailed(err))
    })
}

export const fetchDataSuccess = (data)=>({
  type: FETCH_DATA_SUCCESS,
  payload: data
})

export const fetchDataFailed = (error)=>({
  type: FETCH_DATA_FAILED,
  payload: error
})
