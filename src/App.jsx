import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = [
  { id: 1, title: "Go to the gym", completed: false },
  { id: 2, title: "Complete To Do App", completed: true },
  { id: 3, title: "Czech leasson", completed: false },
  { id: 4, title: "Typescript curse", completed: false },
];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

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

  return (
    <div className="bg-gray-200  min-h-screen bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <Header />
      <main className="container mt-8 mx-auto px-4">
        <TodoCreate createTodo={createTodo} />
        <TodoList
          todos={todos}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
        <TodoComputed />
        <TodoFilter />
      </main>
      <Footer />
    </div>
  );
};
export default App;
