import React, { Fragment } from "react";

export default function(){
    const date = new Date();
    const hours = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    let session = hours > 12? 'PM' : 'AM'
    
    return(
        <div>
            {('0' + (hours > 12 ? hours - 12 : hours)).slice(-2)} : {('0' + minute).slice(-2)} : {('0' + second).slice(-2)} {session }
        </div>
    );
}