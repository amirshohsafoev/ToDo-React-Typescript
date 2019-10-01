import * as React from 'react';
import { connect } from 'react-redux';

import { AppState } from '../store';
import { getVisibleTodos } from '../selectors'
import { Todo, TodoState } from 'src/store/todos/types';
import { deleteTodo, completeTodo, clearCompleted, editTodo } from '../store/todos/actions'

import TodoCard from '../components/TodoCard'
import Footer from '../components/Footer'

interface TodoListContainerProps {
    todoState: TodoState,
    deleteTodo: typeof deleteTodo,
    completeTodo: typeof completeTodo,
    clearCompleted: typeof clearCompleted,
    editTodo: typeof editTodo,
    filteredTodos: Todo[]
}

class TodoListContainer extends React.Component<TodoListContainerProps >{


    renderTodos = () => {
        let todoArr = this.props.filteredTodos
        return todoArr.map((todo) => 
        <TodoCard 
            todo={todo} key={todo.id} 
            edit 
            props={this.props} 
            deleteTodo={this.props.deleteTodo}
            completeTodo={this.props.completeTodo}
            editTodo={this.props.editTodo}
        />)
    }

    render(){
        // console.log(this.props.filteredTodos, 'filtered todos');
        
        let todoCards =  this.renderTodos()

        return(
        <div>
            <ul className="todo-list">{todoCards}</ul>
            <Footer
            clearCompleted={this.props.clearCompleted}
            />
        </div>)
    }
}

const mapStateToProps = (state: AppState) => ({
    todoState: state.todoState,
    filteredTodos: getVisibleTodos(state)
})


export default connect(mapStateToProps, { deleteTodo, completeTodo, clearCompleted, editTodo })(TodoListContainer)