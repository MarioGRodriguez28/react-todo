const TodoCreate = () => {
  return (
    <form className="bg-white rounded-md overflow-hidden flex items-center py-4 gap-4 px-4">
      <span className="rounded-full  border-2 inline-block h-5 w-5"></span>
      <input
        type="text"
        placeholder="Create a new TODO"
        className="  w-full text-gray-400 outline-none"
      />
    </form>
  );
};
export default TodoCreate;
