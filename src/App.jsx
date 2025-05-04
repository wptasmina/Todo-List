
import Themes from './components/Themes'
import ToDoList from './components/ToDoList'

export default function App() {
  return (
    <div className='flex justify-center items-center flex-col min-h-screen bg-amber-50'>
    <ToDoList/>
    <Themes />

    </div>
  )
}
