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

  const handleAdd = () => {
    if (newItemValue != "") {
      addItem([...items, newItemValue]);
      setNewItemValue("");
      localStorage.setItem("items", JSON.stringify(items));
    }
  };

  const handleRemove = (e) => {
    const newItems = [...items];
    newItems.splice(Number(e.target.id), 1);
    addItem(newItems);
    localStorage.setItem("items", JSON.stringify(items));
  };

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
              onClick={handleAdd}
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
        <div className="w-full justify-between m-auto text-black py-5 text-black px-16 ">
          {items.map((value, index) => {
            return (
              <div
                className="justify-between border my-3 border-zinc-950 px-2 rounded-md p-2 flex"
                key={index}
              >
                <span>
                  <input type="checkbox" className="mr-2" />
                  {value}
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 my-1 hover:scale-125 hover:cursor-pointer"
                    id={index}
                    onClick={handleRemove}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
