import React from 'react';
import AddTodo from '../containers/AddTodo';
import Footer from '../containers/Footer';
import VisibleTodos from '../containers/VisibleTodos';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodos />
    <Footer />
  </div>
)

export default App;
