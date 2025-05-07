
import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './features/todos/todoSlice'
import { preferencesReducer } from './features/themes/PreferencSlice'

const store = configureStore({
  reducer: {
    todos: todoReducer,
    preferences: preferencesReducer,
  }
})

export default store