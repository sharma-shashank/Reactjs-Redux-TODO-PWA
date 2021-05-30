import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

function TodoList() {
    let todos = useSelector(state=>state);
    console.log('todo --- ', todos);
    return (
        <div className="my-4">
            {todos.map((todo, i)=>   {
                return <TodoItem key={todos.id} todo={todo}/>;
            })}
        </div>
    )
}

export default TodoList
