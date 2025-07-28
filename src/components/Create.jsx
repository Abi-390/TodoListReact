import { useState } from "react";
import { nanoid } from "nanoid";


const Create = (props) => {
  const task = props.task;
  const settask = props.settask;
  const [title, settitle] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = {
      title: title.charAt(0).toUpperCase() + title.slice(1),
      id: nanoid(),
      isCompleted: false,
    };
    //settask([...task,newTask]);
    let copy = [...task];
    copy.push(newTask);
    settask(copy);
    settitle("");
  };

  const setTitle = (e) => {
    settitle(e.target.value);
  };
const deleteAll=()=>{
  settask([]);
}
  return (
    <div>
      {" "}
      <form className="flex items-center justify-center" onSubmit={submitHandler}>
        <input className="mt-5 bg-gray-500 text-white px-5 mx-5 rounded-md"
          onChange={setTitle}
          type="text"
          placeholder="Enter your task"
          value={title}
        ></input>
        <button className="px-1 py-1 border-2 mt-5 mx-2 rounded-lg">Add Task</button>
        <span className="px-1 py-1 border-2 mt-5 mx-2 rounded-lg" onClick={deleteAll}>Delete all task</span>
      </form>
    </div>
  );
};

export default Create;
