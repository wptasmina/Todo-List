// components/ToDoList.jsx
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../redux/features/todos/todoSlice";

export default function ToDoList() {
  const todos = useSelector(state => state.todos);
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (title.trim()) {
      dispatch(addTodo(title));
      setTitle("");
    }
  };

  return (
    <div className='space-y-4 max-w-lg mx-auto mt-10'>
      <h1 className='text-4xl font-extrabold text-gray-800 text-center'>ToDo List</h1>
      <div className='space-x-4 flex justify-center'>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder='Add a Todo'
          className='placeholder:text-gray-700 border border-gray-300 px-4 py-2 rounded-md w-full max-w-sm'
        />

        <button onClick={handleAddTask} className='text-white text-xl font-medium bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md cursor-pointer'>Add</button>
      </div>

      {/* Todo List */}
      <div>
        {
          todos.length > 0 ? (
            <ul className="space-y-2">
              {
                todos.map((todo) => (
                  <li key={todo.id} className='flex justify-between items-center px-4 py-2 border-b border-gray-300 shadow rounded-sm'>
                    <span>{todo.title}</span>
                    <button onClick={() => dispatch(removeTodo(todo.id))} className='text-xl text-red-500 font-bold cursor-pointer'>X</button>
                  </li>
                ))
              }
            </ul>
          ) : (
            <p className="text-red-600 font-medium text-xl text-center">No task found</p>
          )
        }
      </div>
    </div>
  );
}
