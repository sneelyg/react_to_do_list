import React, { useState } from "react";

export const Tarea = (props) => {
    return (
        <div className="tarea row">
            <div className="col-8">
                <p>{props.tareapendiente}</p>
            </div>
            <div className="col-1">
                <i class="fas fa-window-close"
            
                ></i>
            </div>
        </div>

    )
}

// <i class="fa-solid fa-xmark"></i>
