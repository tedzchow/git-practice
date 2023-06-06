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

        // check if the value is empty
        if (task.trim().length === 0) {
            alert("Please enter a value!");
            return;
        }

        // create a new todo
        const todo: Todo = {
            id: Date.now(),
            task: task,
            isCompleted: false,
        };

        // add todo to the state
        setTodos([todo, ...todos]);

        // clear the value of task
        setTask("");
    };

    const handleChangeChecked = (todo: Todo) => {
        // index of the todo
        const index = todos.indexOf(todo);

        // change todo completed status
        todo.isCompleted = !todo.isCompleted;

        // then we need to replace it with one in todos
        todos.splice(index, 1, todo);

        // update the state
        setTodos([...todos]);
    };

    const handleDelete = (id: number) => {
        // find index of todo from id
        const index = todos.findIndex((todo) => todo.id === id);

        // remove todo
        todos.splice(index, 1);

        // update the state
        setTodos([...todos]);
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input className = "border-2 focus:bg-slate-300 p-2 focus:outline-cyan-500" type="text" name="task" value={task} onChange={handleInput} />
                <button className = "text-2xl bg-green-400 border-2 p-1 m-2" type="submit">Submit</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.task}
                        <input
                            type="checkbox"
                            checked={todo.isCompleted}
                            onChange={() => handleChangeChecked(todo)}
                        />
                        <button onClick={() => handleDelete(todo.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;