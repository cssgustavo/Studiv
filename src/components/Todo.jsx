import React from "react";
import "./Todo.css";

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <p className="todo-p">{todo.title}</p>

      <div className="buttonsTodo">
        <button
          className="btnTodoComplete"
          onClick={() => completeTodo(todo.id)}
        >
          Complete
        </button>
        <button className="btnTodoX" onClick={() => removeTodo(todo.id)}>
          X
        </button>
      </div>
    </div>
  );
};

export default Todo;
