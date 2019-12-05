// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";

import Item from "./Todo";

const TodoListSet = props => {
  return (
    <div>
      {props.todo.map((item) => {
        return <Item item={item} key={item.id} toggleItem={props.toggleItem} />;
      })}
    </div>
  );
};

export default TodoListSet;