import React, { useState, useRef } from "react";
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

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const displayinput = () => {
    setShow("d-block");
    focus.current.focus();
  };
  const hideInput = () => {
    setShow("d-none");
  };

  return (
    <div className="w-75 m-auto my-5 border border-secondary p-4">
      <div className="d-flex justify-content-between">
        <h1 className="text-primary">
          <strong>Todolist</strong>
        </h1>
        <div>
          <button className="btn btn-outline-success" onClick={displayinput}>
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
        <button onClick={hideInput} className="btn btn-danger me-4">
          Cancel
        </button>
        <button onClick={addlist} className="btn btn-primary">
          Add
        </button>
      </div>
      <table className="table  border border-warning mt-3 m-auto">
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index} className="my-3">
              <td className="align-middle text-start my-3">
                <label htmlFor={index} className="w-100 py-2">
                  <input type="checkbox" id={index} className="check me-3" />
                  {todo}
                </label>
              </td>
              <td className="text-end">
                <div
                  onClick={() => handleDelete(index)}
                  className="text-danger "
                >
                  <h2>&times;</h2>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
