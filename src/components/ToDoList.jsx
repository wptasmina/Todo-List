// components/ToDoList.jsx
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "../redux/features/todos/todoSlice";


export default function ToDoList() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  const [text, setText] = useState("")

  const handleAddTask = () =>{
    dispatch(addTodo(text))
    setText("")
  }

  return (
    <div className='space-y-4 max-w-lg mx-auto mt-10'>
      <h1 className='text-4xl font-extrabold text-gray-800 text-center'>ToDo List</h1>
      <div className='space-x-4 flex justify-center'>
        <input
          value={text}
          onChange={(e)=> setText(e.target.value)}
          type="text"
          placeholder='Add a Todo'
          className='placeholder:text-gray-700 border border-gray-300 px-4 py-2 rounded-md w-full max-w-sm'
        />
        <button onClick={handleAddTask} className='text-white text-xl font-medium bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md cursor-pointer'>Add</button>
      </div>

      {/* Todo List */}
      <div>
        <ul className="space-y-4">
          {
            todos.length > 0 ? (
              todos.map((todo) => (
                <li key={todo.id} className="text-xl font-medium flex justify-between items-center px-4 py-2 border-b border-gray-300 shadow rounded-sm">
                  <span  onClick={() => dispatch(toggleTodo(todo.id))} className={`${todo.completed ? "line-through cursor-pointer" : ""}`}>{todo.text}</span>
                  <button onClick={() => dispatch(removeTodo(todo.id))} className="text-red-600 font-bold text-xl cursor-pointer">X</button>
                </li>
              ))

            ) : <p className="text-red-600 font-medium text-xl text-center">No text found</p>
          }
        </ul>
      </div>
    </div>
  );
}
