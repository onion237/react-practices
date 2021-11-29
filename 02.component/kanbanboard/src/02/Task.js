import React from "react";

export default function({name, done}){
    return (
        <li className='TaskList__Task'>
            <input type='checkbox' checked={done} />
            {name}
            <a href='#' className='TaskList__Task--remove'></a>
        </li>
    )
}