import React from "react";
import TodoForm from "./TodoForm";

type Props = TodoProps & {
  updateTodo?: (todo: ITodo) => void;
  deleteTodo?: (_id: string) => void;
  saveTodo?: (e: React.FormEvent, formData: ITodo) => void;
};

const Todo: React.FC<Props> = ({ todo, updateTodo, deleteTodo }) => {
  return (
    <div className="w-full bg-gray-100 mb-6">
      <TodoForm />
    </div>
  );
};

export default Todo;
