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
      className=" dark:bg-gray-800 bg-white rounded-md overflow-hidden flex items-center py-4 gap-4 px-4 transition-all duration-1000 "
    >
      <span className="rounded-full  border-2 inline-block h-5 w-5"></span>
      <input
        type="text"
        placeholder="Create a new TODO"
        className="  dark:bg-gray-800  w-full text-gray-400 outline-none transition-all duration-1000"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};
export default TodoCreate;
