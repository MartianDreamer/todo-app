import { useState } from "react";
import { getData } from "../persistence";

export default function ControlCenter({ setDisplayInput, setData }) {
  const [searchInput, setSearchInput] = useState("");
  const [filter, setFilter] = useState({
    urgent: true,
    high: true,
    medium: true,
    low: true,
    done: true,
    notDone: true,
  });


  const handleFilter = (e) => {
   console.log(e);
  };

  return (
    <div className="mb-4 p-4 border-solid border-4 border-emerald-400 rounded-sm">
      <div>
        <input
          type="text"
          value={searchInput}
          className="w-11/12 border border-solid border-green-500 h-6 focus:outline-0 pl-1"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="w-1/12 bg-green-500 h-6 hover:bg-green-400 font-semibold"
          onClick={(e) => {
            const data = getData();
            if (searchInput === "") {
              setData(data);
              return;
            }
            const newData = [
              ...data.filter(
                (e) =>
                  e.title.toLowerCase().includes(searchInput.toLowerCase()) ||
                  e.description
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())
              ),
            ];
            setData(newData);
            setSearchInput("");
          }}
        >
          Search
        </button>
      </div>
      <div className="mt-2 flex justify-center">
        <input
          type="checkbox"
          id="urgent"
          className="mr-1"
          checked={filter.urgent}
          onChange={handleFilter}
        />
        <label htmlFor="urgent" className="font-semibold mr-4">
          Urgent
        </label>
        <input
          type="checkbox"
          id="high"
          className="mr-1"
          checked={filter.high}
          onChange={handleFilter}
        />
        <label htmlFor="high" className="font-semibold mr-4">
          High
        </label>
        <input
          type="checkbox"
          id="medium"
          className="mr-1"
          checked={filter.medium}
          onChange={handleFilter}
        />
        <label htmlFor="medium" className="font-semibold mr-4">
          Medium
        </label>
        <input
          type="checkbox"
          id="low"
          className="mr-1"
          checked={filter.low}
          onChange={handleFilter}
        />
        <label htmlFor="low" className="font-semibold mr-4">
          Low
        </label>
        <input
          type="checkbox"
          id="done"
          className="mr-1"
          checked={filter.done}
          onChange={handleFilter}
        />
        <label htmlFor="done" className="font-semibold mr-4">
          Finised
        </label>
        <input
          type="checkbox"
          id="notDone"
          className="mr-1"
          checked={filter.notDone}
          onChange={handleFilter}
        />
        <label htmlFor="notDone" className="font-semibold mr-4">
          In progress
        </label>
      </div>
      <div className="mt-2 flex justify-center">
        <button
          className="w-2/12 bg-green-500 h-6 hover:bg-green-400 font-semibold"
          onClick={() => setDisplayInput("block")}
        >
          Add
        </button>
      </div>
    </div>
  );
}
