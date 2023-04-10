
export default function DangerousDialog({
  children,
  display,
  handleConfirm,
  handleCancel,
  bgColor,
}) {
  return (
    <div
      className="w-fit border-2 rounded-md border-red-400 p-4 absolute"
      style={{
        backgroundColor: `rgb(${bgColor}, ${bgColor}, ${bgColor})`,
        display: display,
        left: "690px",
        top: "300px",
      }}
    >
      <p>{children}</p>
      <div className="flex justify-center mt-4">
        <button
          className="bg-red-600 pt-1 pb-1 pl-2 pr-2 rounded-sm hover:bg-red-500 mr-2"
          onClick={handleConfirm}
        >
          Confirm
        </button>
        <button
          className="bg-green-600 pt-1 pb-1 pl-2 pr-2 rounded-sm hover:bg-green-500 mr-2"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
