import React , { useState } from "react";
import {Tarea} from './tareas.jsx';


export const Lista = () => {

    const [inputValue, setInputValue] = useState("");
    const [tareas, setTareas] = useState ([]);
    var contador = 0;

    const DeleteTask =(e)=>{

    }


    return (

        <div id = "lista" 
        className = "container" style ={{width :"80%"}}>
            <h1>To Do List</h1>
            <h2>Move that ass!!</h2>
            <input type="text" 
            onChange={e => setInputValue(e.target.value)}
             value={inputValue} 
             style ={{width :"90%"}}
             onKeyUp ={ (event)=>{
                if (event.key === "Enter" && inputValue != "") {
                  setTareas ([...tareas, inputValue]);
                  setInputValue("");
                  console.log("enter");
                }
            }}
             placeholder="Agrega una tarea"
             />
             <div id="tareas">
                {
                    tareas.map((task, index)=> {
                        return (
                            <Tarea id={index} tareapendiente={task} />
                        )
                    })
                }
                
            </div>
        </div>
    )
}






