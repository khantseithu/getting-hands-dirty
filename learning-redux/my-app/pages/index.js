import { useSelector, useDispatch } from "react-redux"
import {useState} from "react"
import { todoSlice } from "@/redux/store"

export default function Home() {
  const [todoInput, setTodoInput] = useState("")
  const todos = useSelector((state) => state.todos.todos)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(todoSlice.actions.addTodo({
      id: Date.now(),
      title: todoInput,
      completed: false
    }))
    setTodoInput("")
  }
  return (
    <div className="flex justify-center mt-5 flex-col items-center">
      <form onSubmit={handleSubmit} w-md>
        <input type="text" value={todoInput} onChange={(e) => setTodoInput(e.target.value)}className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        <button type="submit" >Add todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center inline-block my-3"> {todo.title} <button 
          
          onClick={() => dispatch(todoSlice.actions.removeTodo({id: todo.id}))} className="p-2 bg-cyan-500 rounded-xl ml-4">Remove</button></li>
        ))}
      </ul>
    </div>
  )
}
