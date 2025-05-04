// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './features/todos/todoSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer, // this must match what useSelector reads from
  },
});

export default store;
