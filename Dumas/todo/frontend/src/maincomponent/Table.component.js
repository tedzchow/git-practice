import React from "react";
import Selectbar from "../common/Selectbar";

const Table = ({
  exps,
  editid,
  setDateedit,
  setAmountedit,
  description,
  setDescription,
  update,
  edit,
  setDeleteid,
}) => {
  return (
    <table className="text-center bg-primary p-3 table table-striped mt-5">
      <thead className="text-center">
        <tr>
          <td>Date</td>
          <td>Amount</td>
          <td>Description</td>
          <td>Edit</td>
          <td>Delete</td>
        </tr>
      </thead>
      <tbody>
        {exps.map((item, key) => {
          return (
            <tr key={item._id} className={item._id && "bg-success"}>
              <td>
                {item._id === editid ? (
                  <input
                    type="date"
                    defaultValue={item.date.slice(0, 10)}
                    onChange={(e) => {
                      setDateedit(e.target.value);
                    }}
                  ></input>
                ) : (
                  item.date.slice(0, 10)
                )}
              </td>
              <td>
                {item._id === editid ? (
                  <input
                    type="number"
                    defaultValue={item.amount}
                    onChange={(e) => {
                      setAmountedit(e.target.value);
                    }}
                  ></input>
                ) : (
                  item.amount
                )}
              </td>
              <td>
                {item._id === editid ? (
                  <Selectbar
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></Selectbar>
                ) : (
                  item.description
                )}
              </td>
              <td>
                {item._id === editid ? (
                  <div className="btn btn-info" onClick={() => update()}>
                    Update
                  </div>
                ) : (
                  <div className="btn btn-info" onClick={() => edit(item)}>
                    Edit
                  </div>
                )}
              </td>
              <td>
                {" "}
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => setDeleteid(item._id)}
                >
                  {" "}
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Table;
