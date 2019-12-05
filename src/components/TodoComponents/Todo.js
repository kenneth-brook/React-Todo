import React from 'react';

const Item = props => {
    return (
      <div
        className={`item${props.item.completed ? " done" : ""}`}
        onClick={e => props.toggleItem(props.item.id)}
      >
        {props.item.task}
      </div>
    );
  };
  
  export default Item;