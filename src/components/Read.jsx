import { toast } from "react-toastify";

const Read = ({ task, settask }) => {
  const deleteHandler = (id) => {
    const filteredTask = task.filter((t) => t.id !== id);
    settask(filteredTask);
    toast.error("Todo Deleted",{autoClose:800})
  };

  const display = task.map((t) => (
    <li
      className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 py-3 border-b border-gray-700"
      key={t.id}
    >
      <span className="w-full break-words">{t.title}</span>
      <button
        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
        onClick={() => deleteHandler(t.id)}
      >
        Delete
      </button>
    </li>
  ));

  return (
    <div className="bg-gray-800 rounded-md shadow-md max-w-3xl mx-auto p-6">
      <h2 className="text-xl md:text-2xl text-yellow-300 font-semibold mb-4">
        Pending Todos:
      </h2>
      <ul>{display}</ul>
    </div>
  );
};

export default Read;
