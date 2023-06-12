import React, { useState } from 'react';
import { Button, Form, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

const TodoList = () => {
  

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
        <Button variant="primary" className='mt-3' onClick={handleAddTodo}>
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