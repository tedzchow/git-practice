import React, { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);

    function toggleTodoCompleted(id) {
        setTodos(prevTodos =>
            prevTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            })
        );
    }

    function handleAddTodo(event) {
        event.preventDefault();
        const text = event.target.elements.todoText.value;
        const newTodo = { id: Date.now(), text, completed: false };
        setTodos(prevTodos => [...prevTodos, newTodo]);
        event.target.reset();
    }

    function handleDeleteTodo(id) {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    }
    function show(e) {
        document.getElementById("form").style.display = "block"
    }
    function hidden(e) {
        document.getElementById("form").style.display = "none"
    }
    return (
        <div className='flex justify-center '>
            <div className='w-[60%] p-10'>
                <div className='px-5 flex justify-between py-3'>
                    <h1 className='text-4xl'>Todo List</h1>
                    <button onClick={show} className='border-2 border-purple-600 rounded-3xl  text-purple-600 px-3  '>+Add Todo</button>
                </div>
                <div className='px-5 mt-2'>
                    <form onSubmit={handleAddTodo} id='form' style={{ display: 'none' }} className='border-2 border-solid rounded-2xl py-2 '>
                        <div className='flex justify-between px-5'>
                            <input type="text" name="todoText" placeholder="Write Task Name" className=" outline-none" required />
                            <div>
                                <button className="btn bg-gray-200  w-[120px]  py-2 rounded-xl mr-3" type="button" onClick={hidden}>Cancel</button>
                                <button className="btn bg-violet-600 w-[120px]  py-2  rounded-xl text-white" type="submit">Add</button>
                            </div>
                        </div>
                    </form>
                </div>
                <ul className='px-5'>
                    {todos.map(todo => (
                        <TodoItem
                            key={todo.id}
                            text={todo.text}
                            completed={todo.completed}
                            toggleTodoCompleted={() => toggleTodoCompleted(todo.id)}
                            deleteTodo={() => handleDeleteTodo(todo.id)}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

function TodoItem({ text, completed, toggleTodoCompleted, deleteTodo }) {
    return (
        <li className={`border-solid border-2 p-3 rounded-2xl   flex justify-between my-3 ${completed ? "border-purple-600" : " "
            }`}>
            <div>
                <input type="checkbox" checked={completed} onChange={toggleTodoCompleted} className='mr-2' />
                <span style={{ textDecoration: completed ? 'line-through' : 'none' }} >{text}</span>
            </div>
            <button onClick={deleteTodo} className=''>X</button>
        </li>
    );
}

export default TodoList;