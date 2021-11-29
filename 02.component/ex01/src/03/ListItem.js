import React, { Component } from "react";

export default function ListItem({name, quantity}) {
    return (
        <li>{name} : {quantity} 개</li>
    )
}