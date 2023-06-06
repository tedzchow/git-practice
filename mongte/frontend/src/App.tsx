import React from "react";
import { ReactDOM } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./tailwind.css";
import { json } from "stream/consumers";

function App() {
  const [todos, settodos] = React.useState<Object[]>([]);
  const [title, settitle] = React.useState<string>("");
  const [display, setDisplay] = React.useState<string>("hidden");
  type Object = {
    id: number;
    title: string;
    isCompleted: boolean;
  };
  const add = (e: React.FormEvent) => {
    e.preventDefault();
    if (title != "") {
      const todo: Object = {
        id: Date.now(),
        title: title,
        isCompleted: false,
      };

      settodos([todo, ...todos]);
      let tododata = [];

      localStorage.setItem("todo", JSON.stringify(todos));

      settitle("");
    }
  };
  const addnew = (e: React.FormEvent) => {
    setDisplay("block");
  };
  const handleChangeChecked = (todo: Object) => {
    const index = todos.indexOf(todo);

    todo.isCompleted = !todo.isCompleted;

    todos.splice(index, 1, todo);

    settodos([...todos]);
  };
  const handleDelete = (id: number) => {
    const index = todos.findIndex((todo) => todo.id === id);

    todos.splice(index, 1);

    settodos([...todos]);
  };
  return (
    <div className="App ">
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
        <button className="bg-pink-100 px-7  rounded-xl mx-5 " onClick={add}>
          Add
        </button>
        <button
          className="bg-sky-300 px-5 rounded-xl"
          onClick={(e) => setDisplay("hidden")}
        >
          Cancel
        </button>
      </div>
      <ul className="inline-block w-[60%] ml-[8%] justify-center mx-10 pt-10">
        {todos.map((val) => (
          <li
            key={val.id}
            className="text-black hover:outline rounded-xl px-5 hover:outline-1 p-3 w-full m-5 flex justify-between"
          >
            <div className="text-left">
              <input
                type="checkbox"
                checked={val.isCompleted}
                onChange={(e) => handleChangeChecked(val)}
              />
              <span className="text-xl mx-5">{val.title}</span>
            </div>

            <button
              onClick={() => handleDelete(val.id)}
              className="text-right rounded-xl mx-5"
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
