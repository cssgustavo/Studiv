import React from "react";

import "./Home.css";

const Home = () => {
  return (
    <div className="containerHome">
      <h2 className="h2-home">Crie Tarefas, Estude, StuDIV</h2>

      <div className="buttonsHome">
        <a
          href="https://www.youtube.com/watch?v=jfKfPfyJRdk"
          className="btnHome gradientBtn"
          target="_blank"
        >
          <i className="bi bi-boombox"></i>
        </a>
      </div>
    </div>
  );
};

export default Home;
