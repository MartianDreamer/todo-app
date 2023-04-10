export default function ContextMenu({ display, entry, x, y }) {
  return (
    <div
      className="rounded-sm border-gray-500 border-solid border-2 bg-white"
      style={{
        display: display,
        position: "absolute",
        top: y,
        left: x,
      }}
    >
      <p className="w-full p-1 cursor-pointer border-b-gray-500	border-b-2">
        Edit
      </p>
      <p className="w-full p-1 cursor-pointer">Delete</p>
    </div>
  );
}
