import React, { useState } from 'react';
import NewTodoInput from './components/NewTodoInput';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addNewTodo = newTodo => {
    setTodos([...todos, newTodo]);
  };

  const toggleChecked = todo => {
    const newTodos = todos.map(objTodo => {
      return objTodo.id === todo.id
        ? { ...objTodo, checked: !todo.checked }
        : objTodo;
    });
    setTodos(newTodos);
  };

  const onRemove = todo => {
    const newTodos = todos.filter(objTodo => objTodo.id !== todo.id);
    setTodos(newTodos);
  };

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">Todo List</h1>
      </header>
      <section className="main">
        <NewTodoInput addNewTodo={addNewTodo} />
        <TodoList
          todos={todos}
          toggleChecked={toggleChecked}
          onRemove={onRemove}
        />
      </section>
    </section>
  );
};

export default App;
