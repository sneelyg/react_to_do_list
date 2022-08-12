import React , { useState } from "react";
import {Tarea} from './tareas.jsx';


export const Lista = () => {

    const [inputValue, setInputValue] = useState('');

    return (

        <div className = "container">
            <h1>To Do List</h1>
            <input type="text" 
            onChange={e => setInputValue(e.target.value)}
             value={inputValue} />
             <div>
                <Tarea tareapendiente="Lavar los platos"/>
                <Tarea tareapendiente="Cocinar"/>
            </div>
        </div>
    )
}


var tareas = [];
