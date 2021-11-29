import React, { Component } from "react";
import ListItem from "./ListItem";

export default class extends Component{
    render(){

        // console.log(this.props.foods)

        // const components = [];
        // this.props.foods.forEach(food => components.push(<ListItem key={food.no} name={food.name} quantity={food.quantity}/>))
                
        return(
            <ul>
                {this.props.foods.map((food) => <ListItem key={food.no} name={food.name} quantity={food.quantity}/>)}
            </ul>
        )
    }
}