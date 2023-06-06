"use client";
import React, { useEffect, useState } from "react";
export type TodoType = {
  id: Number;
  text: String;
  done: Boolean;
};
const TodoApp = () => {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const [input, setInput] = useState("");
  const [add, setAdd] = useState(true);
  useEffect(()=>{
    if(localStorage.todos){
      setTodos(JSON.parse (`${localStorage.getItem("todos")}`));
    }
  },[])
  const addTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
   await setTodos([...todos, { id: Date.now(), text: input, done: false }]);
   await setInput("");
   await setAdd(true);
   await localStorage.setItem('todos',JSON.stringify(todos));
  };

  const deleteTodo = (id: Number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    localStorage.setItem('todos',JSON.stringify(todos));
  };

  const markTodo = async (id: Number) => {
   await setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
    localStorage.setItem('todos',JSON.stringify(todos));
  };
  const onAdd = () => {
    setAdd(false);
  };
  return (
    <div className="container">
      <div className="flex between">
        <h1>Todo List</h1>
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
        />
        <button className="btn" onClick={()=>setAdd(true)}>
          Cancel
        </button>
        <button type="submit" className="btn">
          Add Todo
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li className={`todo-item ${todo.done ? "done" : ""}`}>
            <input type="checkbox" onChange={() => markTodo(todo.id)} />
            <span>{todo.text}</span>
            <button className="delete" onClick={() => deleteTodo(todo.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
