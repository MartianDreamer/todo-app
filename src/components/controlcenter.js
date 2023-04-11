import { useState } from "react";
import { getData } from "../persistence";

export default function ControlCenter({
  setDisplayInput,
  data,
  setData,
  bgColor,
  setBgColor,
}) {
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
    const newFilter = { ...filter };
    newFilter[e.target.id] = e.target.checked;
    setFilter(newFilter);
    const data = filterIsDone(newFilter);
    const result = filterPriority(data, newFilter);
    result.sort((a, b) => b.id - a.id);
    setData(result);
  };

  const filterIsDone = (filterObj) => {
    const data = getData();
    const result = [];
    if (filterObj.done) {
      result.push(...data.filter((e) => e.isDone));
    }
    if (filterObj.notDone) {
      result.push(...data.filter((e) => !e.isDone));
    }
    return result;
  };

  const filterPriority = (data, filterObj) => {
    const result = [];
    if (filterObj.urgent) {
      result.push(...data.filter((e) => e.priority === 4));
    }
    if (filterObj.high) {
      result.push(...data.filter((e) => e.priority === 3));
    }
    if (filterObj.medium) {
      result.push(...data.filter((e) => e.priority === 2));
    }
    if (filterObj.low) {
      result.push(...data.filter((e) => e.priority === 1));
    }
    return result;
  };

  return (
    <div
      className="mb-4 p-4 border-solid border-4 border-emerald-400 rounded-sm"
      style={{
        backgroundColor: `rgb(${bgColor}, ${bgColor}, ${bgColor})`,
        color: bgColor === 250 ? "rgb(30,30,30)" : "rgb(250,250,250)",
      }}
    >
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
            if (searchInput === "") {
              setFilter({
                urgent: true,
                high: true,
                medium: true,
                low: true,
                done: true,
                notDone: true,
              });
              setData(getData());
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
            newData.sort((a, b) => b.id - a.id);
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
          className="w-2/12 bg-green-500 h-6 hover:bg-green-400 font-semibold mr-2"
          onClick={() => setDisplayInput("block")}
        >
          Add
        </button>
        <button
          className="w-2/12 bg-blue-500 h-6 hover:bg-blue-400 font-semibold"
          onClick={() => {
            if (bgColor === 250) {
              setBgColor(30);
            } else {
              setBgColor(250);
            }
          }}
        >
          {bgColor === 30 ? "Bright Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
}
