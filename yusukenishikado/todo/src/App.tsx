import React from 'react';
import './App.css';

function App() {

  const [display, setDisplay] = React.useState<string>("hidden");
  const [title, settitle] = React.useState<string>("");
  const [todos, settodos] = React.useState<Object[]>([]);

  type Object = {
    id: number;
    title: string;
    isCompleted: boolean;
  };

  const addnew = (e: React.FormEvent) => {
    setDisplay("block");
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

  return (
    <div className="app">
      <div className="container h-full m-auto bg-white">
        <div className="flex justify-between pt-5">
          <p className="mx-20 text-5xl font-bold">To Do List</p>
          <button
            className="p-1 px-5 mx-20 text-sm rounded-2xl text-fuchsia-600 outline outline-1 hover:scale-105 hover:bg-gray-200"
            onClick={addnew}
          >
            +&nbsp;Add&nbsp;New
          </button>
        </div>
        <div className={"flex justify-between border-2 text-lg mx-20 mt-5 rounded-2xl " + display} >
          <input
            type="text"
            placeholder="Write Task Name"
            className="py-3 mx-10 w-96 hover:rounded-lg focus:outline-none"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
          <div className="p-2 mx-5">
            <button
              className="w-24 p-1 font-semibold bg-gray-200 rounded-xl"
              onClick={(e) => setDisplay("hidden")}
            >
              Cancel
            </button>
            <button className="w-24 p-1 mx-5 font-semibold text-white bg-fuchsia-500 rounded-xl " onClick={add}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
