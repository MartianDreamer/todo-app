export default function TodoTable({
  data,
  setData,
  modifyTodo,
  setDeletable,
  bgColor,
}) {
  return (
    <div
      className={
        (data.length > 0 ? "grid " : "hidden ") +
        "grid-cols-1 w-full border-solid border-4 rounded-sm border-emerald-400"
      }
      style={{
        backgroundColor: `rgb(${bgColor}, ${bgColor}, ${bgColor})`,
        color: bgColor === 250 ? "rgb(30,30,30)" : "rgb(250,250,250)"
      }}
    >
      {data.map((e, i) => (
        <TodoEntry
          key={i}
          entry={e}
          data={data}
          setData={setData}
          modifyTodo={modifyTodo}
          setDeletable={setDeletable}
          bgColor={bgColor}
        />
      ))}
    </div>
  );
}

function TodoEntry({ entry, data, setData, modifyTodo, setDeletable, bgColor }) {
  const className = [
    "justify-start m-1 border-2 rounded-sm border-solid border-indigo-300 text-left p-1 font-mono cursor-pointer bg-green-300 hover:bg-green-200",
    "justify-start m-1 border-2 rounded-sm border-solid border-indigo-300 text-left p-1 font-mono cursor-pointer bg-yellow-300 hover:bg-yellow-200",
    "justify-start m-1 border-2 rounded-sm border-solid border-indigo-300 text-left p-1 font-mono cursor-pointer bg-orange-300 hover:bg-orange-200",
    "justify-start m-1 border-2 rounded-sm border-solid border-indigo-300 text-left p-1 font-mono cursor-pointer bg-red-300 hover:bg-red-200",
  ];
  const darkModeClassName = [
    "justify-start m-1 border-2 rounded-sm border-solid border-indigo-300 text-left p-1 font-mono cursor-pointer bg-green-600 hover:bg-green-500",
    "justify-start m-1 border-2 rounded-sm border-solid border-indigo-300 text-left p-1 font-mono cursor-pointer bg-yellow-600 hover:bg-yellow-500",
    "justify-start m-1 border-2 rounded-sm border-solid border-indigo-300 text-left p-1 font-mono cursor-pointer bg-orange-600 hover:bg-orange-500",
    "justify-start m-1 border-2 rounded-sm border-solid border-indigo-300 text-left p-1 font-mono cursor-pointer bg-red-600 hover:bg-red-500",
  ];

  return (
    <div
      className={bgColor === 250 ? className[entry.priority - 1] : darkModeClassName[entry.priority - 1]}
      onDoubleClick={(e) => {
        if (e.target.tagName === "INPUT") {
          return;
        }
        setDeletable(true);
        modifyTodo(entry);
      }}
    >
      <h3 className="font-semibold">{entry.title}</h3>
      <div className="flex justify-start">
        <input
          type="checkbox"
          checked={entry.isDone}
          onChange={(e) => {
            const newData = [...data];
            newData.find((e) => e.id === entry.id).isDone = e.target.checked;
            setData(newData);
          }}
        />
        <p className="italic text-sm ml-2">
          from {entry.createdAt} to {entry.expiredAt}
        </p>
      </div>
      <p className="text-sm">{entry.description}</p>
    </div>
  );
}
