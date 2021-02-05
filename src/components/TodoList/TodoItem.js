import classnames from 'classnames';
import React from 'react';

import style from './style.module.css';

class TodoItem extends React.Component {
  state = {
    isDone: this.props.isDone,
  }

  handleClick = () => {
    this.setState(
      state => {
        return { isDone: !state.isDone };
      }
    );
  }

  render() {
    const { isDone } = this.state;
    const { text } = this.props;

    return (
      <li
        className={classnames(style.todoItem, { [style.done]: isDone })}
        onClick={this.handleClick}
      >
        {text}
      </li>
    );
  }
}

export default TodoItem;
