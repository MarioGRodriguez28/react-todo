const TodoFilter = ({ changeFilter, filter }) => {
  const filterOptions = [
    { text: "All", value: "all" },
    { text: "Active", value: "active" },
    { text: "Completed", value: "completed" },
  ];

  return (
    <section className="mt-8 container mx-auto">
      <div className="bg-white p-4 rounded-md flex justify-center gap-4">
        {filterOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => changeFilter(option.value)}
            className={`${
              filter === option.value
                ? "text-blue-500 hover:text-gray-400"
                : "text-gray-400 hover:text-blue-500"
            }`}
          >
            {option.text}
          </button>
        ))}
      </div>
    </section>
  );
};

export default TodoFilter;
