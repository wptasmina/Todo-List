import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     value: 0
//   }

export const todoSlice = createSlice({
    name: 'todos',
   initialState: [
    { id: 1, title: "Leran with React.Js", completed: false },
    { id: 2, title: "Leran with Redux", completed: false },
    { id: 3, title: "Leran with Next.Js", completed: true },
   ],
   reducers: {
    addTodo:(state, action)=>{
        state.push({
            id: Date.now(),
            title: action.payload,
            completed: false,
        })
    }
   }
})

export const {addTodo} = todoSlice.actions;
export const todoReducer = todoSlice.reducer