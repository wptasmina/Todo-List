import React from 'react'

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
                <li className='flex justify-between items-center px-4 py-2'>Item 1</li>
                <li className='flex justify-between items-center px-4 py-2'>Item 2</li>
                <li className='flex justify-between items-center px-4 py-2'>Item 3</li>
            </ul>
        </div>
        <div className=''>
        </div>
    </div>
  )
}
