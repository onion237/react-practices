import React, { Fragment } from "react";

export default function(){
    const date = new Date();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let session = hours > 12? 'PM' : 'AM'

    hours < 10 && (hours = '0' + hours);
    minute < 10 && (minute = '0' + minute);
    second < 10 && (second = '0' + second);
    return(
        <div>
            {hours} : {minute} : {second} {session}
        </div>
    );
}