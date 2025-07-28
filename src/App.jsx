import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [task, settask] = useState([
    { id: 1, title: "Take shower", isCompleted: false },
  ]);

  return (
    <div className="w-screen h-screen bg-gray-800 text-white">
      <h1 className="flex items-center justify-center bg-white text-black text-3xl">TODO LIST</h1>
      <Create task={task} settask={settask} />
      <Read task={task} settask={settask} />
    </div>
  );
};

export default App;
