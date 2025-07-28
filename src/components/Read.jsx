const Read = (props) => {
  const task = props.task;
  const settask = props.settask;
  const deleteHandler = (id) => {
    console.log(id);
    const filteredTask=task.filter((task)=>task.id!==id);
    settask(filteredTask);
    

  };
  const display = task.map((t) => {
    return (
      <li className="flex justify-between items-start gap-4 py-2" key={t.id}>
        <span className="break-words w-full">{t.title}</span>

        <span
          className="border-2 mx-3 my-1 px-3"
          onClick={() => deleteHandler(t.id)}
        >
          Delete{" "}
        </span>
      </li>
    );
  });
  return (
    <div className="border-2 mx-10 my-5 rounded-md">
      <h1 className="text-yellow-400 px-6 py-4 text-2xl">Pending Todos:</h1>
      <ul className="px-6 py-0 my-2">{display}</ul>
    </div>
  );
};
export default Read;
