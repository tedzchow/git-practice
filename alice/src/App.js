import React, { useState } from 'react';
import { Button,Form,ListGroup } from "react-bootstrap";

const Todolist = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if(newTodo.trim()){
      setToddos([...todos,newTodo.trim()])
      setNewTodo('');
    }
  }

  const handleEditTodo = (index) => {
    const editTodos = prompt('Edit your todo:', todos[index]);
    if(editTodos !== null && editTodos.trim()){
      const updateTodos = [...todos];
      updateTodos[index] = editTodos.trim();
      setTodos(updateTodos);
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  }

  return(
    <div className="container">
      <hi>Todolist</hi>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.controlId
            type="text"
            placeholder="Enter"
            value={newTodo}
            onChange={(e) => setNewToddo(e.target.value)}
            />
        </Form.Group>
        <Button varient = "primary" onClick = {handleAddTodo}>
          Add
        </Button>
      </Form>
      <hr />
      <ListGroup>
        {todos.map((todo,index) => (
          <ListGroup.Item key = {index}>
            {todo}{'  '}
            <Button varient= "warning" onClick={() => handleEditTodo(index)}>
              Edit
            </Button>
            <Button varient= "danger" onClick={() => handleDeleteTodo(index)}>
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Todolist