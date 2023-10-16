import { useEffect, useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const itemsLeft = todos.filter((todo) => !todo.completed).length;

    const clearComplete = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const changeFilter = (filter) => setFilter(filter);

    const filteredTodos = () => {
        switch (filter) {
            case "all":
                return todos;
            case "active":
                return todos.filter((todo) => !todo.completed);
            case "completed":
                return todos.filter((todo) => todo.completed);
            default:
                return true;
        }
    };

    const handleDragEnd = (result) => {
        const { destination, source } = result;
        if (!destination) return;
        if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
        )
            return;

        setTodos((prevTasks) =>
            reorder(prevTasks, source.index, destination.index)
        );
    };
    return (
        <div className=" transition-all duration-1000 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-gray-200  dark:bg-gray-900 min-h-screen dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]  bg-contain bg-no-repeat md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
            <Header />
            <main className="container mt-8 mx-auto px-4 md:max-w-xl">
                <TodoCreate createTodo={createTodo} />
                <DragDropContext onDragEnd={handleDragEnd}>
                    <TodoList
                        todos={filteredTodos()}
                        updateTodo={updateTodo}
                        deleteTodo={deleteTodo}
                    />
                </DragDropContext>
                <TodoComputed
                    itemsLeft={itemsLeft}
                    clearComplete={clearComplete}
                />
                <TodoFilter changeFilter={changeFilter} filter={filter} />
            </main>
            <Footer />
        </div>
    );
};
export default App;
