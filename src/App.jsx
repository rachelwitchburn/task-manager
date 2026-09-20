import { Routes, Route } from "react-router-dom";
import TaskPage from "./pages/TaskPage";
import { useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask.jsx";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTasks = {
      id: v4,
      title, // same as title: title,
      description, // same as description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTasks]);
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="w-screen h-screen bg-stone-200 flex justify-center p-6">
            <div className="w-125 space-y-4">
              <h1 className="text-3xl font-bold text-center text-zinc-700">
                Task Manager
              </h1>
              <AddTask onAddTaskSubmit={onAddTaskSubmit}></AddTask>
              <Tasks
                tasks={tasks}
                onTaskClick={onTaskClick}
                onDeleteTaskClick={onDeleteTaskClick}
              ></Tasks>
            </div>
          </div>
        }
      ></Route>
      <Route path="/task" element={<TaskPage />}></Route>
    </Routes>
  );
}

export default App;
