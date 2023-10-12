import TodoItem from "./TodoItem";

const TodoList = ({ todos, updateTodo, deleteTodo }) => {
    return (
        <div className="bg-white rounded-t-md mt-8  overflow-hidden  dark:bg-gray-800 transition-all duration-1000">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    updateTodo={updateTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
};


export default TodoList;
