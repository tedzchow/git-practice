import React, { useState } from 'react';
import { Button, Form, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo('');
      setIsChecked(false);
    }
  };

  const handleEditTodo = (index) => {
    const editedTodo = prompt('Edit your todo:', todos[index]);
    if (editedTodo !== null && editedTodo.trim()) {
      const updatedTodos = [...todos];
      updatedTodos[index] = editedTodo.trim();
      setTodos(updatedTodos);
    }
  };
  const handleDeleteTodo = (index) => {
    if(isChecked){
      const updatedTodos = todos.filter((todo, i) => i !== index);
      setTodos(updatedTodos);
    }
  };

  const handlecheck = () =>{
    setIsChecked(!isChecked);
  }

  return (
    <div className='container'>
      <h1 className='mt-5'>Todo List</h1>
      <Form className="mt-5">
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </Form.Group>
        <Button variant="success" className='mt-3' onClick={handleAddTodo}>
          Add
        </Button>
      </Form>
      <hr />
      <ListGroup>
        {todos.map((todo, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between">
            <div>
              <input type="checkbox" onChange={() => handlecheck()}/>
              <span className={isChecked ? 'line' : ''}>{todo}{' '}</span>
            </div>
            <div>
              <Button variant="warning" className="mr-3" onClick={() => handleEditTodo(index)}>
                Edit
              </Button>{' '}
              <Button variant="danger" className="mr-3" onClick={() => handleDeleteTodo(index)}>
                Delete
              </Button>{' '}
              
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default TodoList;