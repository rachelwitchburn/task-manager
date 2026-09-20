import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="h-sreen w-sreen bg-stone-200 p-6w-screen h-screen flex justify-center p-6">
      <div className="w-125 space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0"
          >
            <ChevronLeftIcon></ChevronLeftIcon>
          </button>
          <h1 className="text-3xl font-bold text-center text-zinc-700">
            Task details
          </h1>
        </div>
        <div className="bg-taupe-300 p-4 rounded-md">
          <h2 className="text-xl text-zinc-50 font-bold">{title}</h2>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
