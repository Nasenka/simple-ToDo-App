import React from 'react';

import TodoItem from './TodoItem';

class TodoList extends React.Component {
  renderTodoList() {
    return this.props.todoList.map((todoItem) => {
      return (
        <TodoItem 
          key={todoItem.id}
          text={todoItem.text}
          isDone={todoItem.isDone}
        />
      );
    });
  }
  
  render() {
    return (
      <ol>{this.renderTodoList()}</ol>
    );
  }
}

export default TodoList;
