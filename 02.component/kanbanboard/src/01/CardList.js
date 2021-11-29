import React, { Fragment } from "react";
import Card from "./Card";

export default function({cards, title}){
    console.log(cards)
    return (
        <div className='CardList'>
            <h1>{title}</h1>
            
            {cards.map((card) => 
                <Card key={card.no} title={card.title} descriptions={card.description} tasks={card.tasks}/>
            )}
        </div>
    )
}