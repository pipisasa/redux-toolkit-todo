import { configureStore } from "@reduxjs/toolkit";
// import { createStore, applyMiddleware } from "redux";
// import thunk from 'redux-thunk';
import rootReducer from './reducer';

// const middlewares = [thunk];

// export const store = createStore(
//   rootReducer, 
//   applyMiddleware(...middlewares)
// );

export const store = configureStore({
  reducer: rootReducer,
});