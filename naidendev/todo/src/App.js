import React, { useState, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.css'; 
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [show, setShow] = useState("d-none");
  const focus = useRef(null);

  const addlist = (e) => {
    e.preventDefault();
    if (inputValue) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
    focus.current.focus();
  };
  const displayinput = () => {
    setShow("d-block");
  };
  const hideInput = () => {
    setShow("d-none");
  };
  return (
    <div className="w-75 m-auto mt-5 border p-4">
      <div className="d-flex justify-content-between">
        <h1 className="text-success">
          <i>Todolist</i>
        </h1>
        <div>
          <button className="btn btn-outline-primary" onClick={displayinput} >
            + Add New
          </button>
        </div>
      </div>
      <div className={"d-flex justify-content-between " + show}>
        <input
          type="text"
          value={inputValue}
          ref={focus}
          onChange={(e) => setInputValue(e.target.value)}
          className="form-control me-5"
        />
        <button onClick={hideInput} className="btn btn-outline-danger me-4">
          Cancel
        </button>
        <button onClick={addlist} className="btn btn-primary">
          Add
        </button>
      </div>
      <table className="table table-striped border mt-4 m-auto">
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td className="align-middle text-start">
                <label htmlFor={index} className="w-100 py-1">
                  <input type="checkbox" id={index} className="check me-3" />
                  {todo}
                </label>
              </td>
              <td className="text-end">
                <button
                 
                  className="btn btn-danger"
                >
                  &times;
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
