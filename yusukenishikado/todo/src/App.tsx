import React from 'react';
import './App.css';

function App() {
  
  const [display, setDisplay] = React.useState<string>("hidden");
  
  const addnew = (e: React.FormEvent) => {
    setDisplay("block");
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
      
    </div>
  </div>
  );
}

export default App;
