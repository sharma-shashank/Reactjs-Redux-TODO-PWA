import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/actions';

function TodoItem({ todo }) {
    const [editable, setEditable] = useState(false)
    const [name, setName] = useState(todo.name)
    let dispatch = useDispatch();

    const updateTodos = () => {
        setName(todo.name);
        dispatch(updateTodo({
            ...todo,
            name: name
        }));
        setEditable(!editable);
    }

    const deleteTodos = () => dispatch(deleteTodo(todo.id));

    return (
        <div>
            <div className="row mx-2 align-items-center">
                <div>#{todo.id.length > 1 ? todo.id[2] : todo.id}</div>
                <div className="col">
                    {editable ?
                        <input type="text" className="form-control"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}

                        />
                        :
                        <h4>{todo.name}</h4>}
                </div>
                <button className="btn btn-primary m-2"
                    onClick={updateTodos}
                >{editable ? "Update" : "Edit"}</button>
                <button className="btn btn-danger m-2"
                    onClick={deleteTodos}
                >Delete</button>
            </div>
        </div>
    )
}

export default TodoItem
