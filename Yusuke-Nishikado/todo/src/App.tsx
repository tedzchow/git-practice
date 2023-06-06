import React, { useState } from "react";

type Todo = {
  id: number;
  task: string;
  isCompleted: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const [task, setTask] = useState<string>("");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (task.trim().length === 0) {
      alert("Please enter a value!");
      return;
    }

    const todo: Todo = {
      id: Date.now(),
      task: task,
      isCompleted: false,
    };

    setTodos([todo, ...todos]);
    setTask("");
  };

  return (<div>
    <form onSubmit={handleFormSubmit}>
      <input type="text" name="task" onChange={handleInput} />
      <button type="submit">Submit</button>
    </form>
  </div>);
}

export default App;