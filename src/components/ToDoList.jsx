import React from 'react'
import Themes from './Themes'

export default function ToDoList() {
  return (
    <div className='space-y-4'>
        <h1 className='text-4xl font-extrabold text-gray-800 text-center'>ToDo List</h1>
        <div className='space-x-4'>
            <input 
            type="text" 
            placeholder='add todo'
            className='placeholder:text-gray-700 border px-4 py-2 rounded-md' 
            />

            <button className='text-white text-xl font-medium bg-green-500 hover:green-700 px-4 py-2 rounded-md cursor-pointer'>Add</button>
        </div>
        <div className=''>
            <ul>
                <li className='flex justify-between items-center px-4 py-2 border-b border-gray-300 shadow'>
                  <span>Item 1</span>
                  <button className='text-xl text-red-500 font-bold cursor-pointer'>X</button>
                </li>
            </ul>
        </div>
        <div className=''>
        </div>
    </div>
  )
}
