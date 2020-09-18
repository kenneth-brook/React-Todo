import React from 'react';
import './Todo.css';

const Item = props => {
    return (
      <div
        className={`item${props.item.completed ? " done" : ""}`}
        onClick={(e) => props.toggleItem(props.item.id)}
      >
        {props.item.task}
      </div>
    );
  };
  
  export default Item;