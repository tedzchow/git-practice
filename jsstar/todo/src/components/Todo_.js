import React, { useState } from "react";

const Todo_ = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [add, setAdd] = useState(true);
  const addTodo = (e) => {
    e.preventDefault();
    if (!input) return;
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput("");
    setAdd(true);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const markTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };
  const onAdd = () => {
    setAdd(false);
  };
  return (
    <div className="container">
      <div className="flex between">
        <h1>To do List</h1>
        <button className="btn" onClick={onAdd}>
          +Add New
        </button>
      </div>
      <form onSubmit={(e) => addTodo(e)} className={`${add ? "add" : ""}`}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo"
          className="add-input"
        />
        <button className="cancel-btn" onClick={() => setAdd(true)}>
          Cancel
        </button>
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li className={`todo-item ${todo.done ? "done" : ""}`}>
            <div>
              <input type="checkbox" onChange={() => markTodo(todo.id)} />
              <span>{todo.text}</span>
            </div>
            <button className="delete" onClick={() => deleteTodo(todo.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo_;
