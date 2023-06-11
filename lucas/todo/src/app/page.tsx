"use client";
import React, { useState } from "react";
export type TodoType = {
  id: Number;
  text: String;
  done: Boolean;
};
const TodoApp = () => {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const [input, setInput] = useState("");
  const [isForm, setIsForm] = useState(false);
  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };

  const deleteTodo = (id: Number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const markTodo = (id: Number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const markForm = () => {
    setIsForm(true);
  };

  return (
    <div className="container">
      <div className="flex justify-between mt-20 p-10">
        <h1 className="text-4xl">Todo List</h1>
        <button
          onClick={() => markForm()}
          className="border-2 border-fuchsia-600 border-solid rounded-3xl text-fuchsia-600 p-3 px-6 hover:text-blue-600"
          color="secondary"
        >
          + Add New
        </button>
      </div>
      <form
        onSubmit={(e) => addTodo(e)}
        className={`flex gap-4 ${isForm ? "visible" : "invisible"}`}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo"
          className="p-5 w-full border"
        />
        <button
          onClick={() => setIsForm(false)}
          type="button"
          className="border-2 bg-slate-500 h-10 my-4  hover:bg-slate-800 rounded-3xl p-5 py-2"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="border-2 bg-fuchsia-600 h-10 my-4 hover:bg-fuchsia-800 rounded-3xl p-5 w-40 py-2"
        >
          Add Todo
        </button>
      </form>
      <ul className="w-full my-10">
        {todos.map((todo) => (
          <li
            className={`w-full p-4 my-2 todo-item border-2 rounded-full border-solid ${
              todo.done ? "border-fuchsia-600" : ""
            }`}
          >
            <input
              aria-label="check"
              type="checkbox"
              onClick={() => markTodo(todo.id)}
            />
            <span className={`w-4/5 ${todo.done ? "done" : ""}`}>
              {todo.text}
            </span>
            <button
              onClick={() => {
                `${todo.done ? "deleteTodo(todo.id)" : ""}`;
              }}
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
