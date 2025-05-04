import { useDispatch, useSelector } from "react-redux"


export default function ToDoList() {
  const todos = useSelector(state => state.todos)
  console.log(todos);
  
  // const dispatch = useDispatch()

  return (
    <div className='space-y-4'>
        <h1 className='text-4xl font-extrabold text-gray-800 text-center'>ToDo List</h1>
        <div className='space-x-4'>
            <input 
            type="text" 
            placeholder='Add a Todo'
            className='placeholder:text-gray-700 border border-gray-300 px-4 py-2 rounded-md' 
            />

            <button className='text-white text-xl font-medium bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md cursor-pointer'>Add</button>
        </div>

        {/* todo map  */}
        <div>
          {
           todos.length > 0 ? (
            <ul>
              {
                todos.map((todo)=> (
                  <li key={todo.id} className='flex justify-between items-center px-4 py-2 border-b border-gray-300 shadow rounded-sm'>
                    <span>{todo.title}</span>
                    <button className='text-xl text-red-500 font-bold cursor-pointer'>X</button>
                  </li>
                ))
              }
            </ul>
           ) : (
            <p className="text-red-600 font-medium text-xl">No task found</p>
           )
          }
        </div>
    </div>
  )
}
