import React, { useState, useRef } from "react";
const Todolist = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [show, setShow] = useState("d-done");
  const focus = useRef(null);
  const addlist = (e) => {
    e.preventDefault();
    if (inputValue) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
    focus.current.focus();
  };
  const handleDelete = (key) => {
    const newTodos = [...todos];
    newTodos.splice(key, 1);
    setTodos(newTodos);
  };
  const displayinput = () => {
    setShow("d-block");
    focus.current.focus();
  };
  const hideInput = () => {
    setShow("d-done");
  };
  return (
    <>
      <div className="w-75 m-auto my-5 border border-secondary p-4">
        <div className="d-flex justify-content-between">
          <h1>TodoList</h1>
        </div>
        <div>
          <button onClick={displayinput}>Add New</button>
        </div>
      </div>
      <div>
        <input
          type="text"
          value={inputValue}
          ref={focus}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={hideInput}>Cancel</button>
        <button onClick={addlist}>Add</button>
      </div>
      <div>
        <table>
          <tbody>
            {todos.map((todo, key) => (
              <tr key={key}>
                <td>
                  <label htmlFor={key}>
                    <input type="checkbox" id={key} />
                    {todo}
                  </label>
                </td>
                <td>
                  <div onClick={() => handleDelete(key)}>
                    <h2>&times;</h2>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Todolist;
