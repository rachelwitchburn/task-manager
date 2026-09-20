import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-taupe-300 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Type the task title"
        className="bg-stone-100 border-slate-300 outline-slate-400 px-4 py-2 rounded-md text-stone-900"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Type the task description"
        className="bg-stone-100 border-slate-300 outline-slate-400 px-4 py-2 rounded-md text-stone-900"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></input>
      <button
        onClick={() => {
          // verify if title and desc are filled
          if (!title.trim() || !description.trim()) {
            setTitle("");
            setDescription("");
            return alert("Fill in the task's title and description");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-stone-100 text-stone-700 px-4 py-2 rounded-md"
      >
        Add
      </button>
    </div>
  );
}

export default AddTask;
