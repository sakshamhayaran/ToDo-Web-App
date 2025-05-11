import React, {createContext,useContext} from 'react';

const TodoContext = createContext({
    todos : [{
        id:1,
        todo:"ToDo message",
        completed:false,
    }],
    addTodo:(todo) => {},
    updateTodo:(id,todo) => {},
    deleteTodo:(id) => {},
    toggleComplete:(id) => {},
})

const useTodoContext = () => {
    return useContext(TodoContext);
}

const TodoProvider = TodoContext.Provider;

export {TodoContext,useTodoContext,TodoProvider};