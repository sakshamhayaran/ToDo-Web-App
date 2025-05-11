import React,{useState} from 'react';
import {useTodoContext} from '../Context/TodoContext';

function TodoForm() {
    const [todo,setTodo] = useState("");
    const {addTodo} = useTodoContext();

    const add = (e) => {
        e.preventDefault();
        if(!todo) { return; }
        else  {
            addTodo({todo,completed:false})
            setTodo("")
        }
    }

    return (
        <form onSubmit={add} className="flex shadow-md rounded-lg overflow-hidden">
            <input
                type="text"
                placeholder="Write a new Todo..."
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
                className="w-full px-4 py-2 text-sm bg-white/80 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200" />
            <button
                type="submit"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-5 py-2 font-medium transition duration-200" >
                Add
            </button>
        </form>
    );
}

export default TodoForm;

