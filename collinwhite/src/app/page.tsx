'use client'
import React, { useState } from "react";
export type TodoType={
  id:Number;
  text:String;
  done:Boolean
}
const TodoApp = () => {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const [input, setInput] = useState("");

  const addTodo = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };

  const deleteTodo = (id:Number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const markTodo = (id:Number) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
    );
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <form onSubmit={(e)=>addTodo(e)}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li className={`todo-item ${todo.done ? "done" : ""}`}>
            <span onClick={() => markTodo(todo.id)}>{todo.text}</span>
            <button className="delete" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;