import React, { useState } from "react";

export const Tarea = (props) => {
    
    const [displayTarea, setdisplayTarea] = useState("");

    return (
        <div className="tarea row ">
            <div className="col text-left">
                <p className ="text-left">{props.tareapendiente}</p>
            </div>
            <div className="col-1">
                <i className="fas fa-window-close"
                onClick = {()=>setdisplayTarea('d-none')}
               
            
                ></i>
            </div>
        </div>

    )
}


