import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleDarkMode } from "../redux/features/themes/PreferencSlice"


export default function Themes() {
  const darkMode = useSelector(state => state.preferences.darkMode)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(darkMode){
      document.documentElement.classList.add('dark');
    }else{
      document.documentElement.classList.remove('dark');
    }
  },[darkMode])

  return (
    <div className="space-y-4 pt-4 text-center ">
      <h2 className="text-gray-700 dark:text-amber-50 text-xl font-bold">Preference</h2>
      <p className="text-gray-700 font-medium">Dark Mode: <span>{darkMode ? "Enable" : "Disable"}</span></p>
      <button onClick={() => dispatch(toggleDarkMode())} className="bg-black hover:bg-gray-900 text-amber-50 px-4 py-2 shadow rounded-md cursor-pointer">Dark Mode </button>
    </div>
  )
}
 