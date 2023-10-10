import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
  const [title, setTitle] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      return setTitle("");
    }
    createTodo(title);
    setTitle("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-md overflow-hidden flex items-center py-4 gap-4 px-4"
    >
      <span className="rounded-full  border-2 inline-block h-5 w-5"></span>
      <input
        type="text"
        placeholder="Create a new TODO"
        className="  w-full text-gray-400 outline-none"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};
export default TodoCreate;
