import React from 'react';
import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';
import './style.css';

const TodoList = ({ todos, toggleChecked, onRemove }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <li key={todo.id}>
        <span
          className={['todo', todo.checked ? 'checked' : ''].join(' ')}
          onClick={() => toggleChecked(todo)}
        >
          {todo.content}
        </span>
        <button className="remove" type="button" onClick={() => onRemove(todo)}>
          <MdDelete size={28} />
        </button>
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired
    })
  ).isRequired,
  toggleChecked: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default TodoList;
