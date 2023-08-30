import { useState, useEffect } from "react";

import "./Pomodoro.css";
import Todo from "../components/Todo";
import TodoForm from "../components/TodoForm";

// funcao contagem

const Extended = () => {
  const [minutos, setMinutos] = useState(50);
  const [segundos, setSegundos] = useState(0);
  const [contagemIniciada, setContagemIniciada] = useState(false);
  const [verificarLoop, setVerificarLoop] = useState(false);

  useEffect(() => {
    let interval;

    if (contagemIniciada) {
      interval = setInterval(() => {
        if (segundos === 0) {
          if (minutos !== 0) {
            setSegundos(59);
            setMinutos(minutos - 1);
          } else {
            let minutos = verificarLoop ? 49 : 9;
            let segundos = 59;

            setSegundos(segundos);
            setMinutos(minutos);
            setVerificarLoop(!verificarLoop);
          }
        } else {
          setSegundos(segundos - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [contagemIniciada, segundos, minutos]);

  const timerMinutos = minutos < 10 ? `0${minutos}` : minutos;
  const timerSegundos = segundos < 10 ? `0${segundos}` : segundos;

  const iniciarContagem = () => {
    setContagemIniciada(true);
  };

  const pausarContagem = () => {
    setContagemIniciada(false);
  };

  // inicio to-do list

  const [todos, setTodos] = useState([]);

  // funcao adicionar tarefa

  const addTodo = (title) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        title,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);
  };

  // funcao excluir tarefa

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );

    setTodos(filteredTodos);
  };

  // funcao completar todo

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <div className="containerPomo">
        <h2 className="mensagem">
          {" "}
          Você focará 50 minutos e terá 10 de descanso, ok?
        </h2>

        <h2 className="timer">
          {timerMinutos}:{timerSegundos}
        </h2>

        <div className="buttons">
          <button onClick={iniciarContagem} className="btnStart">
            Iniciar
          </button>
          <button onClick={pausarContagem} className="btnPause">
            Pausar
          </button>
        </div>
      </div>

      <div className="containerForm">
        <div className="containerFormTitle">
          <h2 className="containerForm-h2">Tarefas</h2>

          <div className="line"></div>
        </div>

        <div className="todo-list">
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
        </div>

        <TodoForm addTodo={addTodo} />

        {/* container form  */}
      </div>

      {/* container geral  */}
    </div>
  );
};

export default Extended;
