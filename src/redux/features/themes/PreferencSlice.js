import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    darkMode: false,
  }

export const preferencSlice = createSlice({
    name: 'preferences',
    initialState,
    reducers:{
        toggleDarkMode:(state) =>{
            state.darkMode =!state.darkMode
        }
    }

})
export const { toggleDarkMode } = preferencSlice.actions;
export const preferencesReducer = preferencSlice.reducer
