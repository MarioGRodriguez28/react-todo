import TodoItem from "./TodoItem";
import { Droppable, Draggable } from "@hello-pangea/dnd";

const TodoList = ({ todos, updateTodo, deleteTodo }) => {
    return (
        <Droppable droppableId="todos">
            {(droppableProvided) => (
                <div
                    ref={droppableProvided.innerRef}
                    {...droppableProvided.droppableProps}
                    className="bg-white rounded-t-md mt-8  overflow-hidden  dark:bg-gray-800 transition-all duration-1000"
                >
                    {todos.map((todo, index) => (
                        <Draggable
                            key={todo.id}
                            index={index}
                            draggableId={`${todo.id}`}
                        >
                            {
                                (draggableProvided) => (
                                <TodoItem
                                    todo={todo}
                                    updateTodo={updateTodo}
                                    deleteTodo={deleteTodo}
                                    ref={draggableProvided.innerRef}
                                    {...draggableProvided.dragHandleProps}
                                    {...draggableProvided.draggableProps}
                                />
                            )
                            }
                        </Draggable>
                    ))}
                    {droppableProvided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default TodoList;
