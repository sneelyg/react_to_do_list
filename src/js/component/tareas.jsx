import React, { useState } from "react";

export const Tarea = (props) => {

    const [displayTarea, setdisplayTarea] = useState("");

    return (
        <div 
        key = {props.key}
        className={`tarea d-flex justify-content-between ${displayTarea}`}>
            
            <div className="nombre-tarea ml-5  ">
                <p className="ml-5 ">{props.tareapendiente}</p>
            </div>
            <div className="cierre-tarea col-1">
                <i className="fas fa-window-close"
                    key={props.key}
                    onClick={(e) => {
                        setdisplayTarea('d-none');
                    }

                    }
                ></i>
            </div>
        </div>

    )
}


