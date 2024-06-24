import { ChangeEvent, useState } from "react";
import { addTodo, getTodos } from "../api/todoApi";

export default function TodoForm() {
  const [formData, setFormData] = useState({ name: "", description: "" });
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event?.currentTarget?.name;
    const value = event?.target?.value;
    if (name === "name") {
      setFormData((prev) => {
        return {
          ...prev,
          name: value,
        };
      });
    }
    if (name === "description") {
      setFormData((prev) => {
        return {
          ...prev,
          description: value,
        };
      });
    }
  };
  return (
    <div>
      <form
        className="w-full mt-6 px-4 py-4"
        onSubmit={(event) => {
          event.preventDefault();
          addTodo(formData as ITodo);
          getTodos();
        }}
      >
        <div className="flex content-end">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-[12px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="name"
              name="name"
              type="text"
              placeholder="task name"
              value={formData?.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-[12px] py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="description"
              name="description"
              type="text"
              placeholder="task description"
              value={formData?.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mt-6 justify-self-center">
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-2 px-3 rounded-full"
              type="submit"
            >
              Add Todo
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
