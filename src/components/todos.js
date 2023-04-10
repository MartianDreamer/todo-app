export default function TodoTable({ data, setData, modifyTodo, setDeletable }) {
  return (
    <div
      className={
        (data.length > 0 ? "grid " : "hidden ") +
        "grid-cols-1 w-full border-solid border-4 rounded-sm border-emerald-400"
      }
    >
      {data.map((e, i) => (
        <TodoEntry
          key={i}
          entry={e}
          data={data}
          setData={setData}
          modifyTodo={modifyTodo}
          setDeletable={setDeletable}
        />
      ))}
    </div>
  );
}

function TodoEntry({ entry, data, setData, modifyTodo, setDeletable }) {
  const bgColor = [
    "bg-green-200",
    "bg-yellow-200",
    "bg-orange-200",
    "bg-red-200",
  ];
  return (
    <div
      className={
        "justify-start m-1 border-2 rounded-sm border-solid border-indigo-300 text-left p-1 font-mono " +
        bgColor[entry.priority - 1]
      }
      onDoubleClick={() => {
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
            newData.find((e) => e.createdAt === entry.createdAt).isDone =
              e.target.checked;
            setData(newData);
          }}
        />
        <p className="italic text-sm ml-2">{entry.expiredAt}</p>
      </div>
      <p className="text-sm">{entry.description}</p>
    </div>
  );
}
