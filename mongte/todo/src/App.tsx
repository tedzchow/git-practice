import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [display, setDisplay] = React.useState<string>("hidden");
  const [title, settitle] = React.useState<string>("");

  const addnew = (e: React.FormEvent) => {
    setDisplay("block");
  };
  return (
    <div className="App">
      <div className="flex justify-around">
        <p className="text-3xl mx-20 pt-20">To Do List</p>
        <header className="flex justify-around items-center pt-20">
          <button
            className="outline outline-1 text-xl px-5 text-sky-700 p-1 rounded-lg hover:scale-105 hover:bg-green-400 hover:"
            onClick={addnew}
          >
            +&nbsp;Add&nbsp;New
          </button>
        </header>
      </div>
      <div id="demo" className={"pt-20 text-lg flex justify-center " + display}>
        <input
          type="text"
          placeholder="Write Task Name"
          className="px-10 py-2  mx-10 text-sky-500 hover:rounded-lg focus:bg-pink-200 focus:outline-none"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default App;
