import { useState, useEffect } from "react";

export const Main = () => {
  if (!localStorage.getItem("items")) {
    localStorage.setItem("items", []);
  }
  const [newItemValue, setNewItemValue] = useState("");

  const [items, addItem] = useState(
    JSON.parse(localStorage.getItem("items") || "[]")
  );
  const [NewRecordVisible, handleVisible] = useState("hidden");


  return (
    <>
      <div className="w-full">
        <div className="w-full justify-between flex m-auto bg-black  py-5 text-white px-16">
          <h1 className="text-2xl">To Do Item</h1>
          <button
            className="border border-color-white border-style-solid rounded-md px-6 hover:bg-gray-700"
            onClick={() => handleVisible("block")}
          >
            + Add New
          </button>
        </div>
        <div
          className={
            "w-full justify-between flex m-auto bg-gray-100 text-black py-5 text-black px-16 " +
            NewRecordVisible
          }
        >
          <input
            className="w-full mr-5 border-2 p-1 rounded-md"
            value={newItemValue}
            onChange={(e) => setNewItemValue(e.target.value)}
          />
          <div className="flex justify-between">
            <button
              className="bg-black text-white border border-zinc-950 px-2 rounded-md mr-4"
            >
              Add
            </button>
            <button
              className="bg-black text-white border border-zinc-950 px-2 rounded-md"
              onClick={() => {
                handleVisible("hidden");
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
