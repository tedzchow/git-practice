import React, { useState } from "react";

const TodoList = () => {
  const [show, setShow] = useState("d-none");

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
          <button className="btn btn-outline-primary" onClick={displayinput}>
            + Add New
          </button>
        </div>
      </div>
      <div className={"d-flex justify-content-between " + show}>
        <input type="text" className="form-control me-5" />
        <button onClick={hideInput} className="btn btn-outline-danger me-4">
          Cancel
        </button>
        <button className="btn btn-primary">Add</button>
      </div>
    </div>
  );
};

export default TodoList;
