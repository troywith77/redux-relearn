import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch  }) => {
  let textNode;
  return (
    <header>
      <form onSubmit={e => {
        e.preventDefault();
        dispatch(addTodo(textNode.value));
        textNode.value = '';
      }}>
        <input type="text" ref={e => textNode = e} />
        <input type="submit" value="Add Todo" />
      </form>
    </header>
  )
};

export default connect()(AddTodo);
