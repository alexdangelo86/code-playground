import React, { useState } from "react";
import InputButton from './InputButton';
import "./TodoList.css";

const TodoItem = ({item, onDelete, index}) => {
    const [ editMode, SetEditMode] = useState (false)

    const handleToggle = () => {
        SetEditMode(!editMode)
    }
    return (
        <div className="todo-item" onClick={handleToggle}>
            {editMode ? (<InputButton inputValue={item}/>) : <div onCLick={handleToggle}>(item)</div>} 
            <button 
            className='delete-button'
                onClick={() => onDelete(index)}
            >
                <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
        </div>
    )
}

export const TodoList = () => {
    const  [data, setData] = useState([])
    
    const handleAdd = (value) => {
        setData([...data, value])
    }
   
    const handleDelete = (index) => {
        const newData = data.filter((i,idx) => idx !== index)
        setData(newData)
    }

    return (
        <div className="todo-box"> 
            <div className="header">
               <InputButton onAdd={handleAdd}/>
            </div> 
            {data.map((item, index) => {
                return (
                    <TodoItem item={item} onDelete={handleDelete} index={index} />
                )   
            })}         
        </div>
    )
}