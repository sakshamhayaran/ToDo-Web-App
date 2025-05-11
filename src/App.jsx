import React,{useState,useEffect} from 'react';
import {TodoContext,useTodoContext,TodoProvider} from './Context/TodoContext.js';
import TodoForm from './Components/TodoForm';
import TodoItem from './Components/TodoItem';
import './App.css'


function App() {
    const [todos,setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos((prev)=>[{id:Date.now(),...todo}, ...prev])
    }

    const updateTodo = (id,todo) => {
        setTodos((prev) => prev.map((prevTodo) => prevTodo.id===id ? todo:prevTodo ))
    }

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((prevTodo)=>id!==prevTodo.id))
    }

    const toggleComplete = (id) => {
        setTodos((prev)=>prev.map((prevTodo)=> prevTodo.id==id ? {...prevTodo,completed: !prevTodo.completed} : prevTodo ))
    }

    useEffect(()=>{
        const todos = JSON.parse(localStorage.getItem("todos"));
        if(todos && todos.length > 0) {
            setTodos(todos);
        }
    },[])
    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])


  return (
  <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] min-h-screen py-10 px-4">
        <div className="w-full max-w-2xl mx-auto bg-white/10 backdrop-blur-md shadow-xl rounded-xl px-6 py-6 text-white">
            <h1 className="text-4xl font-bold text-center mb-10 tracking-wide">📝 Your Todo List</h1>
            <div className="mb-6">
                <TodoForm/>
            </div>
            <div className="flex flex-col gap-y-4">
                {todos.map((todo)=>(
                    <div key={todo.id} className="w-full">
                        <TodoItem todo={todo}/>
                    </div>
                ))}
            </div>
        </div>
    </div>

  </TodoProvider>
  )
}

export default App
