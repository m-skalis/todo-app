import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from '../components/TodoList/TodoList';
import TodoForm from '../components/TodoForm/TodoForm';

const TodosPage = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );
  const [todo, setTodo] = useState({ id: null, text: '', completed: false });
  const [todoFilter, setTodoFilter] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.text.trim() === '') return;
    setTodos(todos.concat(todo));
    setTodo({ id: null, text: '', completed: false });
  };

  const handleChange = (e) => {
    setTodo({ id: uuidv4(), text: e.target.value, completed: false });
  };

  const deleteTodo = (id) => {
    setTodos((t) => t.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((t) =>
      t.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const moveTaskUp = (index) => {
    if (index === 0) return;
    const updatedTodos = [...todos];
    updatedTodos[index] = todos[index - 1];
    updatedTodos[index - 1] = todos[index];
    setTodos(updatedTodos);
  };

  const moveTaskDown = (index) => {
    if (index === todos.length - 1) return;
    const updatedTodos = [...todos];
    updatedTodos[index] = todos[index + 1];
    updatedTodos[index + 1] = todos[index];
    setTodos(updatedTodos);
  };

  const runFilter = (e) => {
    setTodoFilter(e.target.value);
  };

  const clearAll = () => {
    setTodos([]);
    localStorage.removeItem('todos');
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const shown =
    todos.length > 0 &&
    todos.filter((t) =>
      t.text.toLowerCase().includes(todoFilter.toLowerCase())
    );

  return (
    <div className="todos-page">
      <TodoForm
        value={todo.text}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      <TodoList
        toggleComplete={toggleComplete}
        todos={shown}
        deleteTodo={deleteTodo}
        moveUp={moveTaskUp}
        moveDown={moveTaskDown}
        clearAll={clearAll}
        runFilter={runFilter}
      />
    </div>
  );
};

export default TodosPage;
