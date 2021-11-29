import React, { Component } from "react";
import ListItem from "./ListItem";

export default class extends Component{
    render(){
        return(
            <ul>
                <ListItem name='Bread' quantity='10'/>
                <ListItem name='Egg' quantity='5'/>
                <ListItem name='Milk' quantity='20'/>
                <ListItem name='Carrot' quantity='30'/>
            </ul>
        )
    }
}