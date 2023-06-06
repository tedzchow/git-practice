import React, { useState } from 'react';
import './App.css';

type Todo = {
  id: Number;
  task: String;
  done: Boolean
}
const App = () => {

  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [task, setTask] = useState("");

  const add = () => {
    if (!task) alert("Input Task");
    else {

      setTodos([...todos, { id: Date.now(), task: task, done: false }]);
      setTask("");
      console.log(todos)
    }
  }

  const mark = (id: Number) => {
    setTodos(
      todos.map((todo) => (
        todo.id === id ? { ...todo, done: !todo.done } : todo))
    )
  }
  const deleteTodo = (id:Number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="App">
      <div className="container">
        <div className='todo'>
          <h1 className="title">To Do List</h1>
          <button className="newBtn" > +&nbsp; Add New</button>
        </div>
        <div className='inputContainer'>
          <input className="inputField" name="task" placeholder="Write Task Name" value={task} onChange={(e) => setTask(e.target.value)} />
          
          <button className="cancelBtn">Cancel</button>
          <button className="addBtn" onClick={add}>Add</button>
        </div>
        <ul className='listBox'>
          {todos.map((todo, index) => {
            return (
              <li key={index} className="inputContainer">
                <input className="check" type="checkbox" onClick={() => mark(todo.id)} />
                <span className="list">{todo.task}</span>
                <span className="delete" onClick={() => deleteTodo(todo.id)}>
                  &times;
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
