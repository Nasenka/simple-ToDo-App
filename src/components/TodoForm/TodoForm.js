import React from 'react';

import style from './style.module.css';

class TodoForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();

    const { onSubmitForm } = this.props;

    const newTask = {
      id: new Date().toString(),
      text: event.target.todoInput.value,
      isDone: false,
    };

    onSubmitForm(newTask);

    event.target.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input required type="text" name="todoInput" className={style.todoInput} placeholder="Новое дело" />
        <button type="submit" className={style.todoButton}>Добавить</button>
      </form>
    );
  }
}

export default TodoForm;
