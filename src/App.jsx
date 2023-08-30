import { Outlet } from "react-router-dom";
import "./App.css";

import HeaderChooseButtons from "./components/HeaderChooseButtons";

function App() {
  return (
    <div>
      <HeaderChooseButtons />

      <Outlet />
    </div>
  );
}

export default App;
