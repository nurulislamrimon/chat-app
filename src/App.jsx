import "./App.scss";
import { useState } from "react";
import Router from "./Router/router";
import Menus from "./Components/Shared/Menus";

function App() {
  const [selectedMenu, setSelectedMenu] = useState("Home");

  return (
    <main>
      <Menus selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <Router selectedMenu={selectedMenu} />
    </main>
  );
}

export default App;
