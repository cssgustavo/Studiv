import { useState } from "react";
import "./TodoForm.css";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) return;

    addTodo(title);

    setTitle("");
    console.log(title);
  };

  return (
    <div className="todoForm">
      <form action="" className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome da tarefa"
          className="inputTodo"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <button className="btnAdicionar" type="submit">
          +
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
