import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }
  return (
    <div>
      <ul className="space-y-4 p-6 bg-taupe-300 rounded-md shadow">
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`bg-zinc-100 text-left w-full tex-white p-2 rounded-md`}
            >
              <span className={task.isCompleted ? "line-through" : ""}>
                {task.title}
              </span>
              {task.isCompleted && "✅"}
            </button>
            <button
              onClick={() => onSeeDetailsClick(task)}
              className="bg-taupe-300 p-2 rounded-md text-white"
            >
              <ChevronRightIcon></ChevronRightIcon>
            </button>
            <button
              onClick={() => onDeleteTaskClick(task.id)}
              className="bg-taupe-300 p-2 rounded-md text-white"
            >
              <TrashIcon></TrashIcon>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
