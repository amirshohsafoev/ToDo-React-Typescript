
import { AppState } from './store/index'
import { connect } from 'react-redux'
import * as React from 'react';
import './App.css';

import TodoListContainer from './containers/TodoListContainer'
import Header from './containers/Header'
import { addTodo } from './store/todos/actions'

interface AppProps {
  addTodo: typeof addTodo
}


class App extends React.Component<AppProps> {
  render() {
    return (
      <div>
        <Header/>
        <TodoListContainer/>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  todoState: state.todoState
})

export default connect(mapStateToProps, { addTodo })(App);
