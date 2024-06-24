import React from "react";

type Props = TodoProps & {
  updateTodo: (todo: ITodo) => void;
  deleteTodo: (_id: string) => void;
};

const Todo: React.FC<Props> = ({ todo, updateTodo, deleteTodo }) => {
  const checkTodo: string = todo.status ? `line-through` : "";
  return (
    <div className="w-full flex border px-2 py-2 items-center bg-gray-100">
      <div className="w-full md:w-2/3 mb-6 md:mb-0">
        <h1 className={checkTodo}>{todo.name}</h1>
        <span className={checkTodo}>{todo.description}</span>
      </div>
      <div className="w-full md:w-1/3 mb-6 md:mb-0">
        <button
          onClick={() => updateTodo(todo)}
          className={
            todo.status
              ? `invisible text-sm border-2 text-black py-1 px-2 rounded-full mx-2`
              : "text-sm border-2 text-black py-1 px-2 rounded-full mx-2"
          }
        >
          Edit
        </button>
        <button
          onClick={() => updateTodo(todo)}
          className={
            todo.status
              ? `invisible text-sm border-2 text-black py-1 px-2 rounded-full mx-2`
              : "text-sm border-2 text-black py-1 px-2 rounded-full mx-2"
          }
        >
          Complete
        </button>
        <button
          onClick={() => deleteTodo(todo._id)}
          className="text-sm border-2 text-black py-1 px-2 rounded-full mx-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
