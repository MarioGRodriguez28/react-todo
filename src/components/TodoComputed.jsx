const TodoComputed = ({ itemsLeft, clearComplete }) => {
    return (
        <section className="py-4 px-4 flex justify-between  dark:bg-gray-800 transition-all duration-1000 bg-white rounded-b-md">
            <span className=" text-gray-400 ">{itemsLeft} Item left</span>
            <button onClick={clearComplete} className=" text-gray-400 ">
                Clear Completed
            </button>
        </section>
    );
};
export default TodoComputed;
