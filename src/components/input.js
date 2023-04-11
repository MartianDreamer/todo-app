import Todo from "../type/todo";

export default function Input({
  display,
  setDisplay,
  bgColor,
  data,
  setData,
  todo,
  setTodo,
  isDeletable,
  setDeletable,
  setDisplayDlg,
}) {
  return (
    <div
      className="w-fit border-2 rounded-md border-slate-400 p-4 absolute top-48 left-1/3"
      style={{
        backgroundColor: `rgb(${bgColor}, ${bgColor}, ${bgColor})`,
        display: display,
        color: bgColor === 250 ? "rgb(30,30,30)" : "rgb(250,250,250)",
      }}
    >
      <div className="mb-4">
        <label htmlFor="title" className="block mb-1">
          Title
        </label>
        <input
          className="border-solid border-2 border-slate-400 rounded-md pl-1 w-full bg-inherit"
          id="title"
          type="text"
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="description" className="block mb-1">
          Description
        </label>
        <textarea
          id="description"
          rows="4"
          cols="50"
          value={todo.description}
          className="border-solid border-2 border-slate-400 rounded-md pl-1 resize-none bg-inherit"
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="expiredAt" className="block mb-1">
          Expired date
        </label>
        <input
          className="border-solid border-2 border-slate-400 rounded-md pl-1 w-full bg-inherit"
          id="expiredAt"
          type="date"
          value={todo.expiredAt}
          onChange={(e) => setTodo({ ...todo, expiredAt: e.target.value })}
        />
      </div>
      <div className="mb-4 flex justify-center">
        <input
          className="border-solid border-2 border-slate-400 rounded-md bg-inherit mr-1"
          id="finished"
          type="checkbox"
          checked={todo.isDone}
          onChange={(e) => setTodo({ ...todo, isDone: e.target.checked })}
        />
        <label htmlFor="finished" className="cursor-pointer">
          Finished
        </label>
      </div>
      <div className="mb-4 flex justify-center">
        <input
          type="radio"
          name="priority"
          value="4"
          className="mr-1"
          checked={todo.priority === 4}
          onChange={() => setTodo({ ...todo, priority: 4 })}
          id="urgent"
        />
        <label htmlFor="urgent" className="mr-3 text-red-600">
          Urgent
        </label>
        <input
          type="radio"
          name="priority"
          value="3"
          className="mr-1"
          checked={todo.priority === 3}
          onChange={() => setTodo({ ...todo, priority: 3 })}
          id="high"
        />
        <label htmlFor="high" className="mr-3 text-orange-600">
          High
        </label>
        <input
          type="radio"
          name="priority"
          value="2"
          className="mr-1"
          checked={todo.priority === 2}
          onChange={() => setTodo({ ...todo, priority: 2 })}
          id="medium"
        />
        <label htmlFor="medium" className="mr-3 text-yellow-600">
          Medium
        </label>
        <input
          type="radio"
          name="priority"
          value="1"
          className="mr-1"
          checked={todo.priority === 1}
          onChange={() => setTodo({ ...todo, priority: 1 })}
          id="low"
        />
        <label htmlFor="low" className="mr-3 text-green-600">
          Low
        </label>
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="bg-green-600 pt-1 pb-1 pl-2 pr-2 rounded-sm hover:bg-green-500 mr-2"
          onClick={() => {
            if (data.find((e) => e.id === todo.id)) {
              setData([todo, ...data.filter((e) => e.id !== todo.id)]);
            } else {
              if (data.length > 0) {
                todo.id = Math.max(...data.map((e) => e.id)) + 1;
              } else {
                todo.id = 1;
              }
              setData([todo, ...data]);
            }
            setTodo(
              new Todo("", "", false, new Date().toLocaleDateString("en-CA"), 1)
            );
            setDisplay("none");
            setDeletable(false);
          }}
        >
          Submit
        </button>
        <button
          className="bg-red-600 pt-1 pb-1 pl-2 pr-2 rounded-sm hover:bg-red-500 mr-2"
          style={{
            display: isDeletable ? "block" : "none",
          }}
          onClick={() => {
            setDisplayDlg("block");
            setDisplay("none");
            setDeletable(false);
          }}
        >
          Delete
        </button>
        <button
          className="bg-yellow-600 pt-1 pb-1 pl-2 pr-2 rounded-sm hover:bg-yellow-500"
          onClick={() => {
            setTodo(
              new Todo("", "", false, new Date().toLocaleDateString("en-CA"), 1)
            );
            setDisplay("none");
            setDeletable(false);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
