import React from 'react';

import TodoForm from '../TodoForm';
import TodoList from '../TodoList';

import style from './style.module.css';

class App extends React.Component {
  state = {
    todoList: [
      {
        id: 1,
        text: 'Встать',
        isDone: true,
      },
      {
        id: 2,
        text: 'Покормить кота',
        isDone: false,
      },
      {
        id: 3,
        text: 'Позавтракать',
        isDone: false,
      }
    ]
  }

  handleSubmitForm = (todoItem) => {
    const { todoList } = this.state;
    const isFound = todoList.some(item => item.text === todoItem.text);
    
    if (!isFound || window.confirm("Такой пункт уже есть, точно добавить?")) {
      todoList.push(todoItem);
      this.setState({ todoList });
    }
  }

  render() {
    const { todoList } = this.state;

    return (
      <div className={style.body}>
        <h2>Список дел</h2>
        <p><a href="https://go.skillbox.ru/education/course/javascript/ddf685c2-27c4-4e63-8321-80aea062ed38/homework" target="_blank">Задание</a></p>
        <TodoList todoList={todoList} />
        <TodoForm onSubmitForm={this.handleSubmitForm} />
      </div>
    );
  }
}

export default App;
