import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";

import Home from "./pages/Home.jsx";
import Soft from "./pages/Soft.jsx";
import Normal from "./pages/Normal.jsx";
import Extended from "./pages/Extended.jsx";
import About from "./pages/About.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/Soft" element={<Soft />} />
          <Route path="/Normal" element={<Normal />} />
          <Route path="/Extended" element={<Extended />} />
          <Route path="/About" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
