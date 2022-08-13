import React , { useState } from "react";
import {Tarea} from './tareas.jsx';


export const Lista = () => {

    const [inputValue, setInputValue] = useState("");
    const [tareas, setTareas] = useState ([]);

    return (

        <div className = "container" style ={{width :"70%"}}>
            <h1>To Do List</h1>
            <input type="text" 
            onChange={e => setInputValue(e.target.value)}
             value={inputValue} 
             style ={{width :"70%"}}
             onKeyUp ={ (event)=>{
                if (event.key === "Enter" && inputValue != "") {
                  setTareas ([...tareas, inputValue]);
                  setInputValue("");
                  console.log("enter");
                }
            }}
             placeholder="Agrega una tarea"/>
             <div>
                {
                    tareas.map((task, index)=> {
                        return (
                            <Tarea  tareapendiente={task} />
                        )
                    })
                }
                
            </div>
        </div>
    )
}






