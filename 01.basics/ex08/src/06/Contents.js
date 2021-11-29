import React, { Fragment } from "react";
import Clock01 from './Clock01'
import Clock02 from "./Clock02";
export default function(){
    return (
        <Fragment>
            <p>{ `JSX 표현식 표기법 {expression} 에서 발생할 수 있는  문제점` }</p>
            <Clock01/>
            <Clock02/>
        </Fragment>
    );
}