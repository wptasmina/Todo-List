import { createSlice } from "@reduxjs/toolkit";



 const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    {id: 1, text: "Hi, Developers", completed: false},
  ],
  reducers: {
    addTodo: (state, action) =>{
      state.push({
        id: Date.now(), 
        text: action.payload,
        completed: false,
      })
    },
    removeTodo: (state, action) =>{
      return state.filter(todo => todo.id !== action.payload )
    },
    toggleTodo: (state, action) =>{
      const todo = state.find((todo) => todo.id === action.payload)
      if(todo){
        todo.completed = !todo.completed;
      }
    }
  }
})

export const {addTodo, removeTodo, toggleTodo} = todoSlice.actions;
export const todoReducer = todoSlice.reducer