import React, { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);

    function handleAddTodo(event) {
        event.preventDefault();
        const text = event.target.elements.todoText.value;
        const time =new Date().toLocaleTimeString()
        const newTodo = { id: time, text, completed: false };
        setTodos(prevTodos => [...prevTodos, newTodo]);
        console.log(todos);
        event.target.reset();
    }

    function handleDeleteSelected() {
        setTodos(prevTodos => prevTodos.filter(todo => !selectedIds.includes(todo.id)));
        setSelectedIds([]);
    }

    function handleSelect(id) {
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter(todoId => todoId !== id));
        } else {
            setSelectedIds([...selectedIds, id]);
        }
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
                                <button className="btn bg-gray-200  w-[120px]  py-2 rounded-xl mr-3" type="reset" onClick={hidden}>Cancel</button>
                                <button className="btn bg-violet-400 w-[120px]  py-2  rounded-xl text-white" type="submit">Add</button>
                            </div>
                        </div>
                    </form>
                </div>
                <ul className='px-5'>
                    {todos.map((todo,i) => (
                        <TodoItem
                            key={i}
                            no={todo.id}
                            text={todo.text}
                            completed={todo.completed}
                            deleteTodo={handleDeleteSelected}
                            isSelected={selectedIds.includes(todo.id)}
                            selectTodo={() => handleSelect(todo.id)}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

function TodoItem({ text, deleteTodo, isSelected, selectTodo, no}) {
    return (
        <li className={`border-solid border-2 p-3 rounded-2xl   flex justify-between my-3 ${isSelected ? "border-purple-600" : " "
            }`}>
            <div>
                <input type="checkbox" checked={isSelected} onChange={selectTodo} className='mr-2' />
                <span style={{ textDecoration: isSelected ? 'line-through' : 'none' }} >{text}</span>
            </div>
            <p>{no}</p>
            <button onClick={deleteTodo} className=''>X</button>
        </li>
    );
}

export default TodoList;
