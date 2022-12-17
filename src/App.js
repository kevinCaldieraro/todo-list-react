import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import './App.css';

const App = () => {
  const initialTodos = [];

  const [value, setValue] = useState('');
  const [todos, setTodos] = useState(initialTodos);

  const erase = () => setValue('');

  const submit = () => {
    const newTodo = {
      id: new Date().getTime(),
      content: value,
      checked: false
    };
    setTodos([...todos, newTodo]);
  };

  const onChange = e => {
    setValue(e.target.value);
  };

  const onKeyDown = e => {
    if (e.key === 'Enter' && value !== '') {
      submit();
      erase();
    } else if (e.key === 'Escape') {
      erase();
    }
  };

  const toggleChecked = todo => {
    const newTodos = todos.map(objTodo => {
      return objTodo.id === todo.id
        ? { ...objTodo, checked: !todo.checked }
        : objTodo;
    });
    setTodos(newTodos);
  };

  const onRemove = () => {};

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">Todo List</h1>
      </header>
      <section className="main">
        <input
          type="text"
          className="new-todo"
          placeholder="Qual a sua tarefa?"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <ul className="todo-list">
          {todos.map(todo => (
            <li key={todo.id}>
              <span
                className={['todo', todo.checked ? 'checked' : ''].join(' ')}
                onClick={() => toggleChecked(todo)}
              >
                {todo.content}
              </span>
              <button
                className="remove"
                type="button"
                onClick={() => onRemove(todo)}
              >
                <MdDelete size={28} />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default App;
