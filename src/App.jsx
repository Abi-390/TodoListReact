import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [task, settask] = useState([
    { id: 1, title: "Example Task", isCompleted: false },
  ]);

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-6">
      <h1 className="text-center text-4xl font-bold mb-8 text-yellow-400">
        TODO LIST
      </h1>
      <Create task={task} settask={settask} />
      <Read task={task} settask={settask} />
    </div>
  );
};

export default App;
