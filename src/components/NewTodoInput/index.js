import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const NewTodoInput = ({ addNewTodo }) => {
  const [value, setValue] = useState('');

  const erase = () => setValue('');

  const submit = () => {
    const newTodo = {
      id: new Date().getTime(),
      content: value,
      checked: false
    };

    addNewTodo(newTodo);
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

  return (
    <input
      type="text"
      className="new-todo"
      placeholder="Qual a sua tarefa?"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

NewTodoInput.propTypes = {
  addNewTodo: PropTypes.func.isRequired
};

export default NewTodoInput;
