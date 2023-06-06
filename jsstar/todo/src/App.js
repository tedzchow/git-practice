import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import logo from "./logo.svg";
import "./App.css";

import Todo from "./components/Todo_";

function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
