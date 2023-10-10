const TodoFilter = () => {
  return (
    <section className=" mt-8 container mx-auto">
      <div className=" bg-white p-4 rounded-md flex justify-center gap-4">
        <button className=" text-blue-800">All</button>
        <button className=" hover:text-blue-800">Active</button>
        <button className=" hover:text-blue-800">Completed</button>
      </div>
    </section>
  );
};
export default TodoFilter;
