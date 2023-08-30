import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HeaderChoose.css"; // Certifique-se de ter o arquivo CSS para o estilo do botão

const HeaderChooseButtons = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const isButtonSelected = (buttonId) => {
    return buttonId === selectedButton;
  };

  return (
    <div className="headerChoose">
      <Link to="/">
        {" "}
        <button
          className={`header-btn-sem-efeito ${
            isButtonSelected("button1") ? "clicked" : ""
          }`}
          onClick={() => handleButtonClick("button1")}
        >
          {" "}
          Inicio{" "}
        </button>{" "}
      </Link>

      <Link to="/Soft">
        {" "}
        <button
          className={`header-btn ${
            isButtonSelected("button2") ? "clicked" : ""
          }`}
          onClick={() => handleButtonClick("button2")}
        >
          Soft
        </button>{" "}
      </Link>

      <Link to="/Normal">
        {" "}
        <button
          className={`header-btn ${
            isButtonSelected("button3") ? "clicked" : ""
          }`}
          onClick={() => handleButtonClick("button3")}
        >
          Normal{" "}
        </button>{" "}
      </Link>

      <Link to="/Extended">
        {" "}
        <button
          className={`header-btn ${
            isButtonSelected("button4") ? "clicked" : ""
          }`}
          onClick={() => handleButtonClick("button4")}
        >
          Extended
        </button>{" "}
      </Link>

      <Link to="/About">
        {" "}
        <button
          className={`header-btn-sem-efeito ${
            isButtonSelected("button5") ? "clicked" : ""
          }`}
          onClick={() => handleButtonClick("button5")}
        >
          {" "}
          Saber Mais{" "}
        </button>{" "}
      </Link>
    </div>
  );
};

export default HeaderChooseButtons;
