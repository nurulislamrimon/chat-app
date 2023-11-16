import "./App.scss";
import { useState } from "react";
import Router from "./Router/router";

function App() {
  const [selectedMenu, setSelectedMenu] = useState("Home");

  return <Router selectedMenu={selectedMenu} />;
}

export default App;
