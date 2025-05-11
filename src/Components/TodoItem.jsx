import React,{useState} from 'react';
import {useTodoContext} from '../Context/TodoContext';

function TodoItem({ todo }) {

    const [isTodoEditable,setIsTodoEditable] = useState(false);
    const [todoMsg,setTodoMsg] = useState(todo.todo);
    const {updateTodo, deleteTodo, toggleComplete} = useTodoContext();

    const editTodo = () => {
        updateTodo(todo.id,{...todo, todo:todoMsg})
        setIsTodoEditable(false)
    }
    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    return (
        <div
            className={`flex items-center border border-white/10 rounded-lg px-4 py-3 gap-x-3 shadow-md backdrop-blur-md duration-300 transition-all
            ${todo.completed ? "bg-green-600/50" : "bg-indigo-600/20"} hover:scale-[1.01]`} >
            <input
                type="checkbox"
                className="cursor-pointer accent-purple-500 w-5 h-5"
                checked={todo.completed}
                onChange={toggleCompleted} />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-md text-white text-base font-medium
                ${isTodoEditable ? "border-white/30 px-2 py-1 bg-white/10" : "border-transparent"}
                ${todo.completed ? "line-through text-gray-300" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable} />
            <button
                className="w-9 h-9 rounded-md text-lg border border-white/20 flex justify-center items-center bg-white/20 hover:bg-white/30 transition disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;
                    if (isTodoEditable) {
                        editTodo();
                    }
                    else {
                          setIsTodoEditable(true);
                    }
                }}
                disabled={todo.completed} >
                {isTodoEditable ? "💾" : "✏️"}
            </button>
            <button
                className="w-9 h-9 rounded-md text-lg border border-white/20 flex justify-center items-center bg-red-500/20 hover:bg-red-500/40 transition"
                onClick={() => deleteTodo(todo.id)} >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
