import React, { Fragment } from "react";

export default function(){
    const date = new Date();
    const hours = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    let session = hours > 12? 'PM' : 'AM'
    
    const html = `${('0' + (hours > 12 ? hours - 12 : hours)).slice(-2)} : ${('0' + minute).slice(-2)} : ${('0' + second).slice(-2)} ${session }`;

    return(
        //HTML 태그를 동적으로 생성하여 JSX Element의 특정 속성으로 추가하는 작업은 금지하고 있지만,
        //XSS 보호기능을 끄고 사용할 수 있다.
        //
        <div dangerouslySetInnerHTML={{__html : html}}></div>       
    );
}