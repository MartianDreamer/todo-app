export default function ControlCenter({ setDisplayInput }) {
  return (
    <div className="mb-4 p-4 border-solid border-4 border-emerald-400 rounded-sm">
      <div>
        <input
          type="text"
          className="w-11/12 border border-solid border-green-500 h-6 focus:outline-0 pl-1"
        />
        <button className="w-1/12 bg-green-500 h-6 hover:bg-green-400">
          Search
        </button>
      </div>
      <div className="mt-2 flex justify-center">
        <button
          className="w-2/12 bg-green-500 h-6 hover:bg-green-400"
          onClick={() => setDisplayInput("block")}
        >
          Add
        </button>
      </div>
    </div>
  );
}
