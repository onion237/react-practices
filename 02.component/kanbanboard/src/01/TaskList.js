import React, { Fragment } from "react";
import Task from "./Task.js"
export default function({tasks}){
    return (
        <Fragment>
            {tasks.map((task) => <Task key={task.no} name={task.name} done={task.done}/>)}
        </Fragment>
    )
}